import React from 'react';
import { Users } from 'lucide-react';
export default function Admin({ applicants }) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800'>Admin Dashboard</h2>
            <p className='text-gray-600 mt-2'>Manage and review all internship applications</p>
          </div>
          <div className='bg-blue-100 px-4 py-2 rounded-xl'>
            <span className='text-blue-800 font-semibold'>{applicants.length} Applications</span>
          </div>
        </div>

        {applicants.length === 0 ? (
          <div className='text-center py-16'>
            <Users className='mx-auto mb-4 text-gray-400' size={64} />
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No Applications Yet</h3>
            <p className='text-gray-500 mt-2'>Once applicants start applying, you will see their details here.</p>
          </div>
        ) : (<div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-gray-200'>
                <th className='px-4 py-4 text-left font-semibold text-gray-700'>Name</th>
                <th className='px-4 py-4 text-left font-semibold text-gray-700'>Email</th>
                <th className='px-4 py-4 text-left font-semibold text-gray-700'>Phone</th>
                <th className='px-4 py-4 text-left font-semibold text-gray-700'>Role</th>
                <th className='px-4 py-4 text-left font-semibold text-gray-700'>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr
                  key={applicant.id}
                  className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white/30'
                    }`}
                >
                  <td className='px-4 py-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                        <span className='text-white font-medium text-sm'>
                          {applicant.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-4'>{applicant.email}</td>
                  <td className='px-4 py-4'>{applicant.phone}</td>
                  <td className="py-4 px-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {applicant.role}
                    </span>
                  </td>
                  <td className='px-4 py-4 text-gray-600'>
                    {new Date(applicant.submittedAt).toLocaleDateString()} at{' '}
                    {new Date(applicant.submittedAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    {/* for simpler format, use: {new Date(applicant.submittedAt).toLocaleString()} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>)}
      </div>
    </div>
  );
}