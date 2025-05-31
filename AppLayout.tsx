import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AIChat from './AIChat';
import MoodTracker from './MoodTracker';
import Meditation from './Meditation';
import SleepTracking from './SleepTracking';
import DailyAffirmations from './DailyAffirmations';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <AIChat />;
      case 'mood':
        return <MoodTracker />;
      case 'meditation':
        return <Meditation />;
      case 'sleep':
        return <SleepTracking />;
      case 'affirmations':
        return <DailyAffirmations />;
      case 'journal':
        return (
          <div className="p-6">
            <div className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Personal Journal 📝</h2>
              <p className="text-blue-100">Coming soon - Your private space for thoughts and reflections.</p>
            </div>
          </div>
        );
      case 'goals':
        return (
          <div className="p-6">
            <div className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Wellness Goals 🎯</h2>
              <p className="text-blue-100">Coming soon - Set and track your mental wellness goals with AI feedback.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={toggleSidebar} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      <main className="transition-all duration-300">
        {renderContent()}
      </main>
    </div>
  );
};

export default AppLayout;