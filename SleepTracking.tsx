import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Clock, Lightbulb, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SleepTracking: React.FC = () => {
  const [bedtime, setBedtime] = useState('22:00');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  const sleepTips = [
    'Keep your bedroom cool (60-67°F)',
    'Avoid screens 1 hour before bed',
    'Create a consistent bedtime routine',
    'Limit caffeine after 2 PM',
    'Use blackout curtains or eye mask',
    'Try relaxation techniques like deep breathing'
  ];

  const windDownActivities = [
    { name: 'Reading', duration: '15-30 min', icon: '📚' },
    { name: 'Gentle Stretching', duration: '10-15 min', icon: '🧘' },
    { name: 'Meditation', duration: '5-10 min', icon: '🧠' },
    { name: 'Warm Bath', duration: '15-20 min', icon: '🛁' },
    { name: 'Journaling', duration: '10-15 min', icon: '✍️' },
    { name: 'Herbal Tea', duration: '5 min', icon: '🍵' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] bg-clip-text text-transparent mb-2">
          Sleep Tracking
        </h1>
        <p className="text-gray-600">Improve your sleep hygiene and wind down peacefully</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#5ACEFA]" />
              Sleep Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bedtime</label>
              <input 
                type="time" 
                value={bedtime} 
                onChange={(e) => setBedtime(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Wake Time</label>
              <input 
                type="time" 
                value={wakeTime} 
                onChange={(e) => setWakeTime(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Wind-down Reminders</span>
              <Button 
                variant={remindersEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => setRemindersEnabled(!remindersEnabled)}
                className={remindersEnabled ? "bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB]" : ""}
              >
                <Bell className="h-4 w-4 mr-1" />
                {remindersEnabled ? 'On' : 'Off'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-[#77EDCB]" />
              Sleep Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sleepTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-[#5ACEFA]" />
            Wind-Down Activities
          </CardTitle>
          <CardDescription>
            Gentle activities to help you relax before bed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {windDownActivities.map((activity, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{activity.icon}</span>
                  <div>
                    <h3 className="font-medium">{activity.name}</h3>
                    <Badge variant="secondary" className="text-xs">{activity.duration}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepTracking;