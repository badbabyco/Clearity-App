import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, BookOpen, Target, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const quickStats = [
    { label: 'Current Mood', value: '😊 Good', icon: Heart, color: 'text-green-500' },
    { label: 'Meditation Streak', value: '5 days', icon: Brain, color: 'text-blue-500' },
    { label: 'Journal Entries', value: '12 this week', icon: BookOpen, color: 'text-teal-500' },
    { label: 'Goals Progress', value: '3/5 completed', icon: Target, color: 'text-cyan-500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
        <p className="text-blue-100">Your AI coach is ready to help you on your wellness journey today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Weekly Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Mood Tracking</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Meditation</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-[#5ACEFA] h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Journaling</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-[#77EDCB] h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] hover:from-[#4A9EE8] hover:to-[#66D4B9]">
              Chat with AI Coach
            </Button>
            <Button variant="outline" className="w-full">
              Log Today's Mood
            </Button>
            <Button variant="outline" className="w-full">
              Start 5-min Meditation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;