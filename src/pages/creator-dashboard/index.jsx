import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SecureDashboardLayout from '../../components/layout/SecureDashboardLayout';
import DashboardCards from './components/DashboardCards';
import Icon from '../../components/AppIcon';
import { authService } from '../../services/authService';

const CreatorDashboard = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);

    const handleLanguageChange = (event) => {
      setCurrentLanguage(event.detail);
    };

    // Get current user
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    
    // Redirect to /dashboard if accessed via /creator-dashboard
    if (window.location.pathname === '/creator-dashboard') {
      navigate('/dashboard', { replace: true });
    }

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, [navigate]);

  return (
    <SecureDashboardLayout currentPage="home">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Sparkles" size={32} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    {currentLanguage === 'hi' ? 'स्वागत है!' : 'Welcome!'}
                  </h1>
                  <p className="text-white/80 text-lg">
                    {user?.phoneNumber ? 
                      `${currentLanguage === 'hi' ? 'फोन:' : 'Phone:'} ${user.phoneNumber}` :
                      (currentLanguage === 'hi' ? 'CreatorBazaar में आपका स्वागत है' : 'Welcome to CreatorBazaar')
                    }
                  </p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg max-w-2xl">
                {currentLanguage === 'hi' 
                  ? 'आपका डिजिटल उत्पाद बेचने का सफर यहाँ से शुरू होता है। नीचे दिए गए कार्यों को पूरा करके अपने व्यवसाय को बढ़ाएं।'
                  : 'Your journey to selling digital products starts here. Complete the tasks below to grow your business.'
                }
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Cards */}
        <DashboardCards currentLanguage={currentLanguage} />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-gray-600 text-sm">{currentLanguage === 'hi' ? 'उत्पाद' : 'Products'}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">₹0</p>
                <p className="text-gray-600 text-sm">{currentLanguage === 'hi' ? 'कमाई' : 'Earnings'}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-gray-600 text-sm">{currentLanguage === 'hi' ? 'ग्राहक' : 'Customers'}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Beta Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 bg-gradient-to-r from-warning-50 to-accent-50 border border-warning-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-warning to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-semibold text-warning-700 mb-2">
                {currentLanguage === 'hi' ? 'बीटा लॉन्च स्पेशल!' : 'Beta Launch Special!'}
              </h3>
              <p className="text-warning-600 mb-3">
                {currentLanguage === 'hi' 
                  ? 'बीटा अवधि के दौरान 0% प्लेटफॉर्म फीस। आपकी पूरी कमाई आपकी!'
                  : '0% platform fee during beta period. Keep 100% of your earnings!'
                }
              </p>
              <div className="flex items-center space-x-4 text-sm text-warning-600">
                <div className="flex items-center space-x-1">
                  <Icon name="Check" size={16} />
                  <span>{currentLanguage === 'hi' ? 'तुरंत UPI भुगतान' : 'Instant UPI payments'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Check" size={16} />
                  <span>{currentLanguage === 'hi' ? 'असीमित अपलोड' : 'Unlimited uploads'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Check" size={16} />
                  <span>{currentLanguage === 'hi' ? '24/7 सहायता' : '24/7 support'}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SecureDashboardLayout>
  );
};

export default CreatorDashboard;