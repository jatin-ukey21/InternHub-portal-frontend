import React from 'react';
import {Users,UserPlus,Home} from 'lucide-react';

export default function Navigation({currentView,onViewChange,applicantCount}) {
const NavButton = ({ view, icon: Icon, label, count }) => (
    <button
      onClick={() => onViewChange(view)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        currentView === view
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
      {count !== undefined && count > 0 && (
        <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
          {count}
        </span>
      )}
    </button>
);
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:h-16 h-26 gap-2 md:gap-none">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="text-white" size={18} />
            </div>
            <h1 className="text-xl py-2 md:py-0 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InternHub Portal
            </h1>
          </div>

          <div className="flex items-center justify-evenly md:items-start md:justify-start space-x-1">
            <NavButton view="home" icon={Home} label="Home" />
            <NavButton view="registration" icon={UserPlus} label="Apply" />
            <NavButton view="admin" icon={Users} label="Admin" count={applicantCount} />
          </div>
        </div>
      </div>
    </nav>
  );
}