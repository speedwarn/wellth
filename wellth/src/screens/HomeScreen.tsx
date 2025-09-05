import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withSequence } from 'react-native-reanimated';
import { db } from '../api/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Tip } from '../data/tipData';
import { upvoteTip } from '../api/firestore';
import SettingsModal from '../components/SettingsModal';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [tip, setTip] = useState<Tip | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const fetchTip = async () => {
      const tipsCollection = collection(db, 'tips');
      const tipSnapshot = await getDocs(tipsCollection);
      const tipsList = tipSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Tip[];
      if (tipsList.length > 0) {
        const randomIndex = Math.floor(Math.random() * tipsList.length);
        setTip(tipsList[randomIndex]);
      }
    };

    fetchTip();
  }, []);

  const handleUpvote = () => {
    if (tip) {
      upvoteTip(tip.id);
      // Trigger animation
      translateY.value = withSequence(withSpring(-20), withSpring(0));
      scale.value = withSequence(withSpring(1.2), withSpring(1));
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="settings-outline" size={24} color="black" />
      </TouchableOpacity>
      <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Animated.View style={[styles.mascotContainer, animatedStyle]}>
        {/* This is a placeholder for the mascot image.
            The actual image file should be placed at src/assets/mascot.png */}
        <Image source={require('../assets/mascot.png')} style={styles.mascot} />
      </Animated.View>
      <Text style={styles.title}>Today's Tip</Text>
      {tip ? (
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>{tip.text}</Text>
          <Button title="Upvote" onPress={handleUpvote} />
        </View>
      ) : (
        <Text>Loading tip...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  settingsButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tipCard: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: '100%',
  },
  tipText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  mascotContainer: {
    marginBottom: 30,
  },
  mascot: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
