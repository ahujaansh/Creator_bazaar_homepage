import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./contexts/CartContext";
import CartDrawer from "./components/ui/CartDrawer";

function App() {
  return (
    <CartProvider>
      <Routes />
      <CartDrawer />
    </CartProvider>
  );
}

export default App;
