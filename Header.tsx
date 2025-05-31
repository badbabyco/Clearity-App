import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-gradient-to-r from-[#5ACEFA] to-[#77EDCB] text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-white hover:bg-white/20">
            <Menu className="h-5 w-5" />
          </Button>
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/683a9979feb58d68b43d693b_1748675764106_470e0c95.png" 
            alt="Clearity" 
            className="h-20 w-auto"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;