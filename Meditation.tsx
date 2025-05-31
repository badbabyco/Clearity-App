import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

const Meditation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  const durations = [1, 5, 10, 15, 20];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    let breathingInterval: NodeJS.Timeout;
    if (isPlaying) {
      breathingInterval = setInterval(() => {
        setBreathingPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, 4000);
    }
    return () => clearInterval(breathingInterval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(selectedDuration * 60);
    setBreathingPhase('inhale');
  };

  const handleDurationChange = (duration: number) => {
    setSelectedDuration(duration);
    setTimeLeft(duration * 60);
    setIsPlaying(false);
  };

  const getBreathingText = () => {
    switch (breathingPhase) {
      case 'inhale': return 'Breathe In...';
      case 'hold': return 'Hold...';
      case 'exhale': return 'Breathe Out...';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Guided Meditation 🧘‍♀️</h2>
        <p className="text-blue-100">Find your inner peace with breathing exercises and mindfulness.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Breathing Exercise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`w-32 h-32 mx-auto rounded-full border-4 transition-all duration-4000 flex items-center justify-center ${
                breathingPhase === 'inhale' ? 'scale-110 border-[#5ACEFA] bg-blue-50' :
                breathingPhase === 'hold' ? 'scale-110 border-[#77EDCB] bg-teal-50' :
                'scale-90 border-green-400 bg-green-50'
              }`}>
                <span className="text-2xl">🫁</span>
              </div>
              <p className="text-lg font-medium mt-4 text-gray-700">{getBreathingText()}</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-4">
                {formatTime(timeLeft)}
              </div>
              
              <div className="flex justify-center space-x-2 mb-4">
                {durations.map((duration) => (
                  <Button
                    key={duration}
                    variant={selectedDuration === duration ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleDurationChange(duration)}
                    disabled={isPlaying}
                  >
                    {duration}m
                  </Button>
                ))}
              </div>

              <div className="flex justify-center space-x-3">
                {!isPlaying ? (
                  <Button onClick={handleStart} className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB]">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                ) : (
                  <Button onClick={handlePause} variant="outline">
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                )}
                <Button onClick={handleReset} variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Volume2 className="h-5 w-5" />
              <span>Guided Sessions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                🌅 Morning Mindfulness (10 min)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                💤 Sleep Meditation (15 min)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🌊 Ocean Waves (20 min)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🏔️ Mountain Peace (12 min)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                ⭐ Body Scan (8 min)
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Today's Recommendation</h4>
              <p className="text-sm text-blue-700">Try the "Morning Mindfulness" session to start your day with clarity and focus.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Meditation;