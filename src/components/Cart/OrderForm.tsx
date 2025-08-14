import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const OrderForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { placeOrder, total, items } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  React.useEffect(() => {
    if (isAuthenticated && user) {
      setName(user.name);
    }
  }, [isAuthenticated, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Empty cart",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const order = placeOrder(name, phone, deliveryTime);
      
      toast({
        title: "Order placed successfully!",
        description: `Your order #${order.id} has been confirmed. ${isAuthenticated ? `You earned ${Math.floor(total)} bonus points!` : ''}`,
      });

      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <Card className="glow-card">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">Your cart is empty</p>
          <Button 
            onClick={() => navigate('/menu')} 
            className="hero-button mt-4"
          >
            Browse Menu
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glow-card">
      <CardHeader>
        <CardTitle>Place Your Order</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deliveryTime">Preferred Delivery Time</Label>
            <Input
              id="deliveryTime"
              type="datetime-local"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              required
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total: ${total.toFixed(2)}</span>
              {isAuthenticated && (
                <span className="text-sm text-primary">
                  +{Math.floor(total)} bonus points
                </span>
              )}
            </div>
          </div>

          <Button 
            type="submit" 
            className="hero-button w-full" 
            disabled={isLoading}
          >
            {isLoading ? 'Placing Order...' : 'Place Order'}
          </Button>
        </form>

        {!isAuthenticated && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-center">
              <span className="text-primary font-medium">Sign up</span> to earn bonus points with every order!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderForm;