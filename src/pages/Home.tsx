import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon, ClockIcon, GiftIcon } from '@heroicons/react/24/solid';
import heroImage from '@/assets/hero-restaurant.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Luxe Dining
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience culinary excellence with our premium dishes, crafted by world-class chefs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button className="hero-button text-lg px-8 py-6">
                Explore Menu
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Luxe Dining?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional culinary experiences with premium ingredients and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glow-card text-center">
              <CardHeader>
                <StarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>
                  Only the finest ingredients sourced from around the world
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our chefs hand-select every ingredient to ensure exceptional taste and quality in every dish.
                </p>
              </CardContent>
            </Card>

            <Card className="glow-card text-center">
              <CardHeader>
                <ClockIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>
                  Fresh meals delivered at your preferred time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schedule your delivery for the perfect dining moment, prepared fresh to order.
                </p>
              </CardContent>
            </Card>

            <Card className="glow-card text-center">
              <CardHeader>
                <GiftIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Bonus Rewards</CardTitle>
                <CardDescription>
                  Earn points with every order as a member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join our loyalty program and earn 1 point for every dollar spent on delicious meals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glow-card">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Culinary Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of satisfied customers and experience fine dining at home
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="hero-button text-lg px-8 py-4">
                    Create Account
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button variant="outline" className="text-lg px-8 py-4">
                    Browse Menu
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;