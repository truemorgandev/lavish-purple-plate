import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import CartItem from '@/components/Cart/CartItem';
import OrderForm from '@/components/Cart/OrderForm';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Cart: React.FC = () => {
  const { items, total } = useCart();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/menu">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
            <Link to="/menu">
              <Button className="hero-button">Browse Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Items ({items.length})</h2>
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              
              <div className="glow-card p-6">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="lg:col-span-1">
              <OrderForm />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;