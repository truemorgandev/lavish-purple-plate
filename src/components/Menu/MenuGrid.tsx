import React, { useState } from 'react';
import { MenuItem } from '@/types/menu';
import MenuCard from './MenuCard';
import { Button } from '@/components/ui/button';

// Sample menu data with generated images
import steakImage from '@/assets/steak.jpg';
import pastaImage from '@/assets/pasta.jpg';
import seafoodImage from '@/assets/seafood.jpg';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Wagyu Beef Steak',
    description: 'Premium grade A5 Wagyu beef, grilled to perfection with seasonal vegetables',
    price: 85,
    image: steakImage,
    category: 'Main Course'
  },
  {
    id: '2',
    name: 'Black Truffle Pasta',
    description: 'Handmade pasta with black truffle shavings, parmesan, and purple microgreens',
    price: 42,
    image: pastaImage,
    category: 'Main Course'
  },
  {
    id: '3',
    name: 'Lobster Thermidor',
    description: 'Fresh Atlantic lobster with creamy thermidor sauce and purple garnish',
    price: 68,
    image: seafoodImage,
    category: 'Seafood'
  },
  {
    id: '4',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry reduction and roasted root vegetables',
    price: 38,
    image: steakImage,
    category: 'Main Course'
  },
  {
    id: '5',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée and pancetta crisps',
    price: 32,
    image: seafoodImage,
    category: 'Seafood'
  },
  {
    id: '6',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
    price: 28,
    image: pastaImage,
    category: 'Vegetarian'
  }
];

const categories = ['All', 'Main Course', 'Seafood', 'Vegetarian'];

const MenuGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "hero-button" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;