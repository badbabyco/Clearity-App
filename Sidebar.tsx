import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, MessageCircle, Heart, Book, Target, Calendar, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'chat', label: 'AI Coach', icon: MessageCircle },
    { id: 'mood', label: 'Mood Tracker', icon: Heart },
    { id: 'meditation', label: 'Meditation', icon: Calendar },
    { id: 'sleep', label: 'Sleep Tracking', icon: Moon },
    { id: 'affirmations', label: 'Daily Affirmations', icon: Sun },
    { id: 'journal', label: 'Journal', icon: Book },
    { id: 'goals', label: 'Goals', icon: Target },
  ];

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                activeTab === item.id && "bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] text-white"
              )}
              onClick={() => {
                onTabChange(item.id);
                onClose();
              }}
            >
              <Icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;