import React, { createContext, useContext, useState } from 'react';
import { CartItem, MenuItem, Order } from '@/types/menu';
import { useAuth } from './AuthContext';

interface CartContextType {
  items: CartItem[];
  total: number;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (customerName: string, phone: string, deliveryTime: string) => Order;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { addBonusPoints, isAuthenticated } = useAuth();

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const addItem = (item: MenuItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return currentItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const placeOrder = (customerName: string, phone: string, deliveryTime: string): Order => {
    const order: Order = {
      id: Date.now().toString(),
      items: [...items],
      total,
      customerName,
      phone,
      deliveryTime,
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
    };

    // Add bonus points for authenticated users (1 point per currency unit)
    if (isAuthenticated && total > 0) {
      addBonusPoints(Math.floor(total));
    }

    // Store order in localStorage (in real app, this would be an API call)
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    clearCart();
    return order;
  };

  return (
    <CartContext.Provider value={{
      items,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      placeOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
};