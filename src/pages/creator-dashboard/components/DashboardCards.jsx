import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const DashboardCards = ({ currentLanguage }) => {
  const navigate = useNavigate();

  const dashboardTasks = [
    {
      id: 'welcome',
      title: currentLanguage === 'hi' ? 'Welcome Aboard' : 'Welcome Aboard',
      description: currentLanguage === 'hi' ? 'Complete your profile setup' : 'Complete your profile setup',
      icon: 'UserCheck',
      color: 'bg-blue-500',
      textColor: 'text-white',
      progress: 75,
      status: currentLanguage === 'hi' ? 'प्रगति में' : 'In Progress',
      action: () => navigate('/dashboard/settings')
    },
    {
      id: 'impression',
      title: currentLanguage === 'hi' ? 'Make an Impression' : 'Make an Impression',
      description: currentLanguage === 'hi' ? 'Upload your first product' : 'Upload your first product',
      icon: 'Upload',
      color: 'bg-emerald-500',
      textColor: 'text-white',
      progress: 0,
      status: currentLanguage === 'hi' ? 'शुरू करें' : 'Get Started',
      action: () => navigate('/product-upload')
    },
    {
      id: 'showtime',
      title: currentLanguage === 'hi' ? 'Showtime' : 'Showtime',
      description: currentLanguage === 'hi' ? 'Publish your product' : 'Publish your product',
      icon: 'Eye',
      color: 'bg-purple-500',
      textColor: 'text-white',
      progress: 0,
      status: currentLanguage === 'hi' ? 'शुरू करें' : 'Get Started',
      action: () => navigate('/dashboard/products')
    },
    {
      id: 'tribe',
      title: currentLanguage === 'hi' ? 'Build Your Tribe' : 'Build Your Tribe',
      description: currentLanguage === 'hi' ? 'Share on social media' : 'Share on social media',
      icon: 'Users',
      color: 'bg-orange-500',
      textColor: 'text-white',
      progress: 0,
      status: currentLanguage === 'hi' ? 'शुरू करें' : 'Get Started',
      action: () => navigate('/dashboard/emails')
    },
    {
      id: 'cha-ching',
      title: currentLanguage === 'hi' ? 'Cha-ching' : 'Cha-ching',
      description: currentLanguage === 'hi' ? 'Make your first sale' : 'Make your first sale',
      icon: 'DollarSign',
      color: 'bg-yellow-500',
      textColor: 'text-white',
      progress: 0,
      status: currentLanguage === 'hi' ? 'शुरू करें' : 'Get Started',
      action: () => navigate('/dashboard/sales')
    },
    {
      id: 'money-inbound',
      title: currentLanguage === 'hi' ? 'Money Inbound' : 'Money Inbound',
      description: currentLanguage === 'hi' ? 'Set up UPI payments' : 'Set up UPI payments',
      icon: 'CreditCard',
      color: 'bg-green-600',
      textColor: 'text-white',
      progress: 50,
      status: currentLanguage === 'hi' ? 'प्रगति में' : 'In Progress',
      action: () => navigate('/dashboard/settings')
    },
    {
      id: 'waves',
      title: currentLanguage === 'hi' ? 'Making Waves' : 'Making Waves',
      description: currentLanguage === 'hi' ? 'Check your analytics' : 'Check your analytics',
      icon: 'TrendingUp',
      color: 'bg-teal-500',
      textColor: 'text-white',
      progress: 25,
      status: currentLanguage === 'hi' ? 'प्रगति में' : 'In Progress',
      action: () => navigate('/dashboard/analytics')
    },
    {
      id: 'smart-move',
      title: currentLanguage === 'hi' ? 'Smart Move' : 'Smart Move',
      description: currentLanguage === 'hi' ? 'Optimize your earnings' : 'Optimize your earnings',
      icon: 'Target',
      color: 'bg-indigo-500',
      textColor: 'text-white',
      progress: 10,
      status: currentLanguage === 'hi' ? 'शुरू करें' : 'Get Started',
      action: () => navigate('/dashboard/analytics')
    }
  ];

  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          {currentLanguage === 'hi' ? 'अपनी सफलता की यात्रा पूरी करें' : 'Complete your journey to success'}
        </h2>
        <p className="text-text-secondary">
          {currentLanguage === 'hi' ? 'इन कार्यों को पूरा करके अपने व्यवसाय को बढ़ाएं' : 'Complete these tasks to grow your business'}
        </p>
      </motion.div>

      <div 
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}
      >
        {dashboardTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={task.action}
          >
            <div 
              className={`${task.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[200px] flex flex-col justify-between relative overflow-hidden`}
              style={{ background: `rgba(0, 0, 0, 0.8)` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                    <Icon name={task.icon} size={24} className={task.textColor} strokeWidth={2} />
                  </div>
                  {task.progress > 0 && (
                    <div className="text-right">
                      <div className={`text-xs ${task.textColor} opacity-80 mb-1`}>
                        {task.progress}%
                      </div>
                      <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-white"
                          initial={{ width: 0 }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className={`text-lg font-bold ${task.textColor} mb-2 line-clamp-1`}>
                  {task.title}
                </h3>
                
                <p className={`text-sm ${task.textColor} opacity-90 line-clamp-2 mb-4`}>
                  {task.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className={`text-xs ${task.textColor} opacity-70 font-medium px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm`}>
                  {task.status}
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="ArrowRight" size={16} className={`${task.textColor} opacity-70`} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;