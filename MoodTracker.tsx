import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, TrendingUp } from 'lucide-react';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const moods = [
    { emoji: '😄', label: 'Excellent', value: 'excellent', color: 'bg-green-500' },
    { emoji: '😊', label: 'Good', value: 'good', color: 'bg-green-400' },
    { emoji: '😐', label: 'Okay', value: 'okay', color: 'bg-yellow-400' },
    { emoji: '😔', label: 'Low', value: 'low', color: 'bg-orange-400' },
    { emoji: '😢', label: 'Very Low', value: 'very-low', color: 'bg-red-400' },
  ];

  const handleSaveMood = () => {
    if (!selectedMood) return;
    // Save mood logic here
    alert('Mood saved successfully!');
    setSelectedMood('');
    setNotes('');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">How are you feeling today? 💝</h2>
        <p className="text-pink-100">Track your emotions to better understand your mental wellness patterns.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Mood</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-5 gap-3">
              {moods.map((mood) => (
                <Button
                  key={mood.value}
                  variant={selectedMood === mood.value ? "default" : "outline"}
                  className={`h-20 flex flex-col space-y-1 ${
                    selectedMood === mood.value ? mood.color : ''
                  }`}
                  onClick={() => setSelectedMood(mood.value)}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What's on your mind today?"
                className="min-h-20"
              />
            </div>
            
            <Button 
              onClick={handleSaveMood} 
              disabled={!selectedMood}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
            >
              Save Today's Mood
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Mood Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Start tracking your mood to see patterns and trends over time.</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">This Week's Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Mood</span>
                    <span className="text-sm font-medium">😊 Good</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Best Day</span>
                    <span className="text-sm font-medium">Monday 😄</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Entries This Week</span>
                    <span className="text-sm font-medium">5/7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MoodTracker;