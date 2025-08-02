# React

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Shopping Cart System** - Complete cart functionality with persistent storage
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/         # UI components including CartIcon, CartDrawer
│   ├── contexts/       # React contexts including CartContext
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 🛒 Shopping Cart System

The application includes a complete shopping cart system with the following features:

### Cart Components
- **CartContext** - Global state management for cart functionality
- **CartIcon** - Cart icon with item count badge in the header
- **CartDrawer** - Slide-in cart panel with item management
- **AddToCartButton** - Reusable button component for adding products

### Features
- ✅ Add/remove items from cart
- ✅ Update item quantities
- ✅ Persistent storage (localStorage)
- ✅ Cart total calculation
- ✅ Mobile responsive design
- ✅ Smooth animations and transitions
- ✅ Indian Rupee (INR) price formatting

### Usage
1. Navigate to `/cart-demo` to see the cart functionality in action
2. Add products to cart using "Add to Cart" buttons
3. Click the cart icon in the header to view/manage cart items
4. Cart items persist across page refreshes

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [CreatorBazaar](https://CreatorBazaar)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on CreatorBazaar
