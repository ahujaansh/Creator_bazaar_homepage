import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AddToCartButton from '../../components/ui/AddToCartButton';
import Icon from '../../components/AppIcon';

const CartDemoPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);

    const handleLanguageChange = (event) => {
      setCurrentLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  // Sample products for demo
  const demoProducts = [
    {
      id: "1",
      name: "Complete Digital Marketing Course 2024",
      price: 1999,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Courses",
      description: "Master digital marketing with comprehensive strategies for Indian market."
    },
    {
      id: "2",
      name: "Notion Productivity Templates Bundle",
      price: 499,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Templates",
      description: "50+ professional Notion templates for productivity and organization."
    },
    {
      id: "3",
      name: "Social Media Content Calendar 2024",
      price: 799,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      category: "Templates",
      description: "Complete content calendar with 365 days of content ideas."
    },
    {
      id: "4",
      name: "Email Marketing Automation Guide",
      price: 1299,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
      category: "E-books",
      description: "Complete guide to email marketing automation for businesses."
    },
    {
      id: "5",
      name: "Logo Design Toolkit",
      price: 899,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "Graphics",
      description: "Professional logo design templates and resources."
    },
    {
      id: "6",
      name: "SEO Audit Checklist",
      price: 399,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Tools",
      description: "Comprehensive SEO audit checklist for website optimization."
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>Cart Demo - CreatorBazaar</title>
        <meta name="description" content="Demo page showcasing the cart functionality of CreatorBazaar" />
      </Helmet>

      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {currentLanguage === 'hi' ? 'कार्ट डेमो' : 'Cart Demo'}
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                {currentLanguage === 'hi' 
                  ? 'कार्ट फंक्शनैलिटी का प्रदर्शन करें। उत्पादों को कार्ट में जोड़ें और कार्ट आइकन पर क्लिक करें।'
                  : 'Demonstrate the cart functionality. Add products to cart and click the cart icon.'
                }
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-primary-50 rounded-xl p-6 mb-8 border border-primary-200">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    {currentLanguage === 'hi' ? 'कैसे उपयोग करें' : 'How to Use'}
                  </h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• {currentLanguage === 'hi' ? 'नीचे दिए गए उत्पादों में से किसी को कार्ट में जोड़ें' : 'Add any product below to your cart'}</li>
                    <li>• {currentLanguage === 'hi' ? 'शीर्ष दाएं कोने में कार्ट आइकन पर क्लिक करें' : 'Click the cart icon in the top right corner'}</li>
                    <li>• {currentLanguage === 'hi' ? 'कार्ट में आइटम देखें और प्रबंधित करें' : 'View and manage items in your cart'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoProducts.map((product) => (
                <div key={product.id} className="bg-surface rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Product Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      
                      <AddToCartButton
                        product={product}
                        variant="primary"
                        size="sm"
                        className="spring-transition"
                      >
                        {currentLanguage === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}
                      </AddToCartButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'ShoppingCart',
                  title: currentLanguage === 'hi' ? 'कार्ट प्रबंधन' : 'Cart Management',
                  description: currentLanguage === 'hi' ? 'आइटम जोड़ें, हटाएं और मात्रा बदलें' : 'Add, remove, and update quantities'
                },
                {
                  icon: 'Save',
                  title: currentLanguage === 'hi' ? 'स्थायी भंडारण' : 'Persistent Storage',
                  description: currentLanguage === 'hi' ? 'कार्ट आइटम पेज रिफ्रेश के बाद भी बने रहते हैं' : 'Cart items persist after page refresh'
                },
                {
                  icon: 'Smartphone',
                  title: currentLanguage === 'hi' ? 'मोबाइल अनुकूल' : 'Mobile Friendly',
                  description: currentLanguage === 'hi' ? 'सभी डिवाइस पर सही काम करता है' : 'Works perfectly on all devices'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-surface rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CartDemoPage; 