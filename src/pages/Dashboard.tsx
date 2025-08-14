import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import DashboardTabs from '@/components/Dashboard/DashboardTabs';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-xl text-muted-foreground">
            Manage your orders and track your bonus points
          </p>
        </div>
        
        <DashboardTabs />
      </main>
    </div>
  );
};

export default Dashboard;