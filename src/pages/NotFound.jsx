import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from '../components/AppIcon';
import Header from '../components/ui/Header';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 flex flex-col items-center justify-center p-4 min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-text-primary mb-2">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist. Let's get you back!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>

            <Button
              variant="outline"
              iconName="Home"
              iconPosition="left"
              onClick={handleGoHome}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
