import React from 'react';
import {CheckCircle } from 'lucide-react';

export default function SuccessMessage({show}) {
  if (!show) return null;
  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
        <div className='bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2'>
            <CheckCircle size={20} />
            <span className='font-medium'>Application submitted successfully!</span>
        </div>
    </div>
  );
}