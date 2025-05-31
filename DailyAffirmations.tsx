import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Heart, Star, Sun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DailyAffirmations: React.FC = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const affirmations = [
    "I am worthy of love and respect",
    "I choose peace and calm in every moment",
    "I am growing stronger every day",
    "I trust in my ability to overcome challenges",
    "I am grateful for this moment and this breath",
    "I radiate positivity and attract good things",
    "I am exactly where I need to be right now",
    "I choose to focus on what I can control",
    "I am resilient and can handle whatever comes my way",
    "I deserve happiness and inner peace"
  ];

  const quotes = [
    { text: "The only way out is through.", author: "Robert Frost" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Progress, not perfection.", author: "Anonymous" },
    { text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.", author: "Anonymous" },
    { text: "Healing isn't linear.", author: "Anonymous" },
    { text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person.", author: "Lori Deschene" },
    { text: "Take time to make your soul happy.", author: "Anonymous" },
    { text: "You are allowed to be both a masterpiece and a work in progress simultaneously.", author: "Sophia Bush" }
  ];

  const categories = [
    { name: 'Self-Love', icon: '💖', color: 'from-pink-400 to-rose-400' },
    { name: 'Confidence', icon: '⭐', color: 'from-yellow-400 to-orange-400' },
    { name: 'Peace', icon: '🕊️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Growth', icon: '🌱', color: 'from-green-400 to-emerald-400' },
    { name: 'Gratitude', icon: '🙏', color: 'from-purple-400 to-violet-400' },
    { name: 'Strength', icon: '💪', color: 'from-indigo-400 to-blue-400' }
  ];

  useEffect(() => {
    const today = new Date().getDate();
    setCurrentAffirmation(today % affirmations.length);
    setCurrentQuote(today % quotes.length);
  }, []);

  const getNewAffirmation = () => {
    setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
  };

  const getNewQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] bg-clip-text text-transparent mb-2">
          Daily Affirmations
        </h1>
        <p className="text-gray-600">Start your day with positivity and motivation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-[#5ACEFA]/10 to-[#77EDCB]/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#5ACEFA]" />
              Today's Affirmation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-lg font-medium text-gray-800 leading-relaxed">
                "{affirmations[currentAffirmation]}"
              </p>
            </div>
            <Button 
              onClick={getNewAffirmation}
              className="w-full bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] hover:opacity-90"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              New Affirmation
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#77EDCB]/10 to-[#5ACEFA]/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#77EDCB]" />
              Inspirational Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-lg font-medium text-gray-800 leading-relaxed mb-3">
                "{quotes[currentQuote].text}"
              </p>
              <p className="text-sm text-gray-600 font-medium">
                — {quotes[currentQuote].author}
              </p>
            </div>
            <Button 
              onClick={getNewQuote}
              variant="outline"
              className="w-full border-[#77EDCB] text-[#77EDCB] hover:bg-[#77EDCB] hover:text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              New Quote
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-[#5ACEFA]" />
            Affirmation Categories
          </CardTitle>
          <CardDescription>
            Explore different types of positive affirmations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                  <Badge variant="secondary" className="mt-2">
                    Focus Area
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyAffirmations;