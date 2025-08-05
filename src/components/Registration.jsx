import React, { useState } from 'react';
import { Mail, UserPlus, Phone, User } from 'lucide-react';

export default function Registration({ onSubmit, count }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'intern',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      prev => ({
        ...prev,
        [name]: value
      })
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    /*
    //FOR LOCAL STATE UPDATE
    const newApplicant = {
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date()
    };

    onSubmit(newApplicant);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'intern',
    });
    setErrors({}); */
    try {
      const response = await fetch("http://localhost:8080/api/registration",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        //const savedApplicant = await response.json();
        //onSubmit({...savedApplicant,submittedAt:new Date(savedApplicant.submittedAt)});
        onSubmit();
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: 'intern',
        });
        setErrors({});
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again later.');     
    }
  }
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Join Our Team</h2>
          <p className='text-gray-600 text-lg'>Fill out the form below to start your internship journey with us.</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name <span className='text-red-600'>*</span>
            </label>
            <div className='relative'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white/50'
                  }`}
                placeholder='Enter your full name'
              />
            </div>
            {errors.name && <p className='text-red-600 text-sm mt-1'>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address <span className='text-red-600'>*</span>
            </label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white/50'
                  }`}
                placeholder='Enter your email address'
              />
            </div>
            {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
              Phone Number <span className='text-red-600'>*</span>
            </label>
            <div className='relative'>
              <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white/50'
                  }`}
                placeholder='Enter your phone number'
              />
            </div>
            {errors.phone && <p className='text-red-600 text-sm mt-1'>{errors.phone}</p>}
          </div>

          <input type='hidden' name='role' value="intern" />

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2'
          >
            <UserPlus size={20}/>
            <span>Submit Application</span>
          </button>
        </form>
      </div>
    </div>
  );
}