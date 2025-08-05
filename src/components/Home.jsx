import React from 'react';
import { Users, UserPlus, CheckCircle } from 'lucide-react';

export default function Home({onApplyNow}) {
  return (
    <div className="text-center space-y-12 animate-in fade-in duration-500">
        <div className='space-y-6'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight'>
                Launch Your Career
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Join our innovative internship program and gain hands-on experience with cutting-edge technologies while working alongside industry experts.
            </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto'>
                    <UserPlus className='text-blue-600' size={24} />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Easy Application</h3>
                <p className='text-gray-600'>
                    Simple, streamlined application process that takes just minutes to complete.
                </p>
            </div>

            <div className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1'>
                <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto'>
                    <Users className='text-purple-600' size={24} />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Expert Mentorship</h3>
                <p className='text-gray-600'>
                    Work directly with experienced professionals who are invested in your growth.
                </p>
            </div>
            <div className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-1'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto'>
                    <CheckCircle className='text-green-600' size={24} />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Real Impact</h3>
                <p className='text-gray-600'>
                    Contribute to meaningful projects that make a difference in the industry.
                </p>
            </div>
        </div>

        <button
            onClick={onApplyNow}
            className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 justify-center mx-auto mt-8'
        >
            <UserPlus size={20}/>
            <span>Apply Now</span>
        </button>
    </div>
  );
}