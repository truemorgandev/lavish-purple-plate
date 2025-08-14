import React from 'react';
import Header from '@/components/Layout/Header';
import MenuGrid from '@/components/Menu/MenuGrid';

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Exquisite Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium dishes, each crafted with passion and the finest ingredients
          </p>
        </div>
        <MenuGrid />
      </main>
    </div>
  );
};

export default Menu;