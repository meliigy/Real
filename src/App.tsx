import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PlatformShowcase } from './components/PlatformShowcase';
import { Statistics } from './components/Statistics';
import { ServicesTabs } from './components/ServicesTabs';
import { MarketingCTA } from './components/MarketingCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col selection:bg-[#d66043] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow matching Figma Landing Page */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Features with interactive meters and charts */}
        <Features />

        {/* 3. Platform & Live Transactions Showcase */}
        <PlatformShowcase />

        {/* 4. Statistics based on real data */}
        <Statistics />

        {/* 5. Services and Interactive Map Exploration */}
        <ServicesTabs />

        {/* 6. AI-powered Marketing and conversion CTA */}
        <MarketingCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
