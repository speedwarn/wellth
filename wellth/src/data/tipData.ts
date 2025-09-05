export interface Tip {
  id: string;
  text: string;
  category: 'Finance' | 'Well-being';
}

export const tips: Tip[] = [
  { id: '1', text: 'Create a budget and stick to it.', category: 'Finance' },
  { id: '2', text: 'Automate your savings.', category: 'Finance' },
  { id: '3', text: 'Invest in your future self.', category: 'Finance' },
  { id: '4', text: 'Review your insurance policies annually.', category: 'Finance' },
  { id: '5', text: 'Practice mindfulness for 5 minutes a day.', category: 'Well-being' },
  { id: '6', text: 'Go for a 30-minute walk.', category: 'Well-being' },
  { id: '7', text: 'Get 7-9 hours of sleep per night.', category: 'Well-being' },
  { id: '8', text: 'Connect with a loved one.', category: 'Well-being' },
];
