'use client';

import React from 'react';
import { Music, Trophy, MapPin, Zap, Users, Target, Crown, Sparkles, Shirt } from 'lucide-react';
import TierCard from '@/components/TierCard';

const tiers = [
  { 
    title: 'Street Supporter', 
    price: 100, 
    priceId: 'price_1QZmockSupporterPack75',
    description: 'Join the crew with exclusive limited edition gear',
    gradient: 'from-cyan-500 to-blue-600',
    icon: Users
  },
  { 
    title: 'Team Canada Elite', 
    price: 200, 
    priceId: 'price_1QZmockTeamCanadaPack150',
    description: 'Represent the maple leaf with championship spirit',
    gradient: 'from-purple-500 to-pink-600',
    icon: Crown
  },
  { 
    title: 'World Champion Tier', 
    price: 300, 
    priceId: 'price_1QZmockChampionSpiritPack220',
    description: 'Ultimate support for a world-class journey',
    gradient: 'from-yellow-400 to-orange-500',
    icon: Trophy
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-100 font-medium">Representing Canada</span>
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8 leading-tight gradient-shift">
              EMMA'S
              <span className="block text-white">WORLD STAGE</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              From the streets to the world stage. Support Emma as she brings Canadian hip-hop culture 
              to the <span className="text-cyan-400 font-semibold">IDO World Dance Championship</span>. 
              Get exclusive gear and be part of her legendary journey.
            </p>

            {/* Stats/Features - REMOVED */}
            {/* <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium">World Championship</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium">Hip-Hop Culture</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium">Limited Edition</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Divider for contrast */}
      <div className="relative z-10 -mt-4 mb-[-2px]">
        <div className="h-8 w-full bg-gradient-to-b from-transparent to-purple-900/80 opacity-80"></div>
      </div>

      {/* T-Shirt Showcase Section */}
      <div className="relative py-24 bg-gradient-to-br from-purple-900/80 via-slate-800/80 to-cyan-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center pulse-glow">
                <Shirt className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Limited Edition</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get your hands on the exclusive "HIP HOP IS THE MOVEMENT" Crewneck Sweater. 
              This isn't just merch—it's a statement piece that represents the culture and Emma's championship journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* T-Shirt Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 overflow-hidden">
                <img 
                  src="/IMG_0085.PNG" 
                  alt="HIP HOP IS THE MOVEMENT Long Sleeve Crewneck Sweater - Front and Back View"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Decorative glow effects */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* T-Shirt Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  "HIP HOP IS THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">MOVEMENT"</span>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    This exclusive long sleeve design captures the essence of hip-hop culture with bold, 
                    street-inspired typography that makes a statement wherever you go.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                      <div className="text-cyan-400 font-semibold mb-1">Material</div>
                      <div className="text-gray-300 text-sm">Premium Cotton Blend</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
                      <div className="text-purple-400 font-semibold mb-1">Color</div>
                      <div className="text-gray-300 text-sm">Classic Black</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4">
                      <div className="text-pink-400 font-semibold mb-1">Design</div>
                      <div className="text-gray-300 text-sm">Front & Back Print</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                      <div className="text-yellow-400 font-semibold mb-1">Delivery</div>
                      <div className="text-gray-300 text-sm">In-Person Only</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                  <h4 className="text-xl font-bold text-white">Limited Edition</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This design is exclusive to Emma's championship campaign and will never be reproduced. 
                  When they're gone, they're gone forever. Own a piece of Canadian hip-hop history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emma's Story Section */}
      <div className="relative py-24 bg-gradient-to-r from-slate-900/80 to-purple-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Journey</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Emma's path to the IDO World Dance Championship represents more than just competition—it's about 
                  bringing the raw energy and authentic spirit of Canadian hip-hop to the global stage.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From countless hours in the studio to mastering complex choreography, Emma has dedicated her life 
                  to perfecting her craft. Now, she's ready to showcase what Canadian dance culture brings to the world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300">Years Training</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1st</div>
                  <div className="text-gray-300">Canadian Rep</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl border-2 border-white/20 shadow-xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
                <img 
                  src="/emma-action.jpg" 
                  alt="Emma showing her medal at a street dance competition" 
                  className="object-contain max-h-full max-w-full w-auto h-auto rounded-3xl" 
                />
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Level</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              All tiers include the same exclusive limited-edition gear. The price reflects your level of support 
              for Emma's world championship journey. Delivered in person—no shipping required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <TierCard key={index} {...tier} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center pulse-glow">
              <Music className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Thank you for supporting Emma's journey
          </h3>
          <p className="text-gray-300 mb-2">
            Representing Canada at the IDO World Dance Championship
          </p>
          <p className="text-gray-400 text-sm">
            Bringing Canadian hip-hop culture to the world stage
          </p>
        </div>
      </footer>
    </main>
  );
}