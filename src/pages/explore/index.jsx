import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import AddToCartButton from '../../components/ui/AddToCartButton';


const ExplorePage = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Sample products data
  const sampleProducts = [
    {
      id: "1",
      name: "Complete Digital Marketing Course 2024",
      price: 1999,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "courses",
      description: "Master digital marketing with comprehensive strategies for Indian market.",
      views: 15420,
      rating: 4.8,
      creator: "Priya Sharma"
    },
    {
      id: "2",
      name: "Notion Productivity Templates Bundle",
      price: 499,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "templates",
      description: "50+ professional Notion templates for productivity and organization.",
      views: 3200,
      rating: 4.6,
      creator: "Rahul Gupta"
    },
    {
      id: "3",
      name: "Social Media Content Calendar 2024",
      price: 799,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      category: "templates",
      description: "Complete content calendar with 365 days of content ideas.",
      views: 2100,
      rating: 4.7,
      creator: "Sneha Patel"
    },
    {
      id: "4",
      name: "Email Marketing Automation Guide",
      price: 1299,
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
      category: "ebooks",
      description: "Complete guide to email marketing automation for businesses.",
      views: 5600,
      rating: 4.9,
      creator: "Amit Kumar"
    },
    {
      id: "5",
      name: "Logo Design Toolkit",
      price: 899,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "graphics",
      description: "Professional logo design templates and resources.",
      views: 4300,
      rating: 4.5,
      creator: "Kavya Singh"
    },
    {
      id: "6",
      name: "SEO Audit Checklist",
      price: 399,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "tools",
      description: "Comprehensive SEO audit checklist for website optimization.",
      views: 1800,
      rating: 4.4,
      creator: "Arjun Mehta"
    },
    {
      id: "7",
      name: "Video Editing Masterclass",
      price: 2499,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      category: "courses",
      description: "Learn professional video editing from scratch to advanced techniques.",
      views: 8900,
      rating: 4.9,
      creator: "Vikram Singh"
    },
    {
      id: "8",
      name: "Business Plan Template Pack",
      price: 699,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "templates",
      description: "Complete business plan templates for startups and entrepreneurs.",
      views: 2700,
      rating: 4.6,
      creator: "Neha Sharma"
    }
  ];

  // Filter and sort products
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.uploadDate || '2024-01-01') - new Date(a.uploadDate || '2024-01-01');
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
      default:
        return b.views - a.views;
    }
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleProductClick = (productId) => {
    navigate(`/product-detail-page/${productId}`);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);

    const handleLanguageChange = (event) => {
      setCurrentLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const categories = [
    { id: 'all', label: currentLanguage === 'hi' ? 'सभी' : 'All', icon: 'Grid3x3' },
    { id: 'courses', label: currentLanguage === 'hi' ? 'कोर्स' : 'Courses', icon: 'BookOpen' },
    { id: 'templates', label: currentLanguage === 'hi' ? 'टेम्प्लेट्स' : 'Templates', icon: 'Layout' },
    { id: 'ebooks', label: currentLanguage === 'hi' ? 'ई-बुक्स' : 'E-books', icon: 'FileText' },
    { id: 'tools', label: currentLanguage === 'hi' ? 'टूल्स' : 'Tools', icon: 'Wrench' },
    { id: 'graphics', label: currentLanguage === 'hi' ? 'ग्राफिक्स' : 'Graphics', icon: 'Image' },
  ];

  const sortOptions = [
    { value: 'popular', label: currentLanguage === 'hi' ? 'लोकप्रिय' : 'Popular' },
    { value: 'recent', label: currentLanguage === 'hi' ? 'नवीनतम' : 'Recent' },
    { value: 'price-low', label: currentLanguage === 'hi' ? 'कम कीमत' : 'Price: Low to High' },
    { value: 'price-high', label: currentLanguage === 'hi' ? 'अधिक कीमत' : 'Price: High to Low' },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      
      <main className="pt-20 pb-0">
        <div className="container-responsive">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {currentLanguage === 'hi' ? 'उत्पाद एक्सप्लोर करें' : 'Explore Products'}
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                {currentLanguage === 'hi' 
                  ? 'भारतीय रचनाकारों द्वारा बनाए गए बेहतरीन डिजिटल उत्पादों की खोज करें'
                  : 'Discover amazing digital products created by Indian creators'
                }
              </p>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-surface rounded-xl border border-border p-6 shadow-sm transition-colors duration-300">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Icon 
                    name="Search" 
                    size={20} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                  />
                  <Input
                    type="search"
                    placeholder={currentLanguage === 'hi' ? 'उत्पाद खोजें...' : 'Search products...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Sort */}
                <div className="lg:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-surface border border-border rounded-lg px-4 py-3 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-surface text-text-secondary hover:text-primary hover:bg-primary-50 border border-border'
                  }`}
                >
                  <Icon name={category.icon} size={16} />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-text-secondary">
                {currentLanguage === 'hi' 
                  ? `${sortedProducts.length} उत्पाद मिले` 
                  : `${sortedProducts.length} products found`
                }
              </p>
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Search" size={48} className="text-text-tertiary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {currentLanguage === 'hi' ? 'कोई उत्पाद नहीं मिला' : 'No products found'}
                </h3>
                <p className="text-text-secondary">
                  {currentLanguage === 'hi' 
                    ? 'अपनी खोज को बदलने का प्रयास करें' 
                    : 'Try changing your search criteria'
                  }
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-surface rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {/* Product Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <div className="p-4">
                      <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 text-xs text-text-tertiary">
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={12} />
                            <span>{product.views.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={12} className="text-warning fill-current" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-text-secondary">
                          by {product.creator}
                        </p>
                        
                        <AddToCartButton
                          product={product}
                          variant="outline"
                          size="sm"
                          className="text-xs px-3 py-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {currentLanguage === 'hi' ? 'कार्ट' : 'Cart'}
                        </AddToCartButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;