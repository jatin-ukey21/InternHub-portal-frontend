import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Registration from './components/Registration';
import Admin from './components/Admin';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [applicants, setApplicants] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (currentView === 'admin') {
      fetch("http://localhost:8080/api/applicants")
        .then(response => response.json())
        .then(data => setApplicants(data))
        .catch(error => console.error('Error fetching applicants:', error));
    }
  }, [currentView]);
  const handleApplyNow = () => {
    setCurrentView('registration');
  }

  const handleApplicationSubmit = () => {
    try {
      setCount(count);
      //setApplicants((prev) => [...prev,applicant]); for local state update
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again later.');
    }
  }

  const handleViewChange = (view) => {
    setCurrentView(view);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      <Navigation
        currentView={currentView}
        onViewChange={handleViewChange}
        applicantCount={applicants.length}
      />

      <SuccessMessage show={showSuccess} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'home' && <Home onApplyNow={handleApplyNow} />}

        {currentView === 'registration' && (
          <Registration onSubmit={handleApplicationSubmit} count={count} />
        )}

        {currentView === 'admin' && <Admin applicants={applicants} />}
      </main>
    </div>
  )
}

export default App;
