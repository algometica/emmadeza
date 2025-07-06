'use client';

import React, { useState } from 'react';
import { Loader2, DivideIcon as LucideIcon } from 'lucide-react';

interface TierCardProps {
  title: string;
  price: number;
  priceId: string;
  description: string;
  gradient: string;
  icon: typeof LucideIcon;
}

const stripeLinks: Record<string, string> = {
  'price_1QZmockSupporterPack75': 'https://buy.stripe.com/3cI8wO85ddoe88S5aq6Na00',
  'price_1QZmockTeamCanadaPack150': 'https://buy.stripe.com/5kQ14mbhp83U74OauK6Na01',
  'price_1QZmockChampionSpiritPack220': 'https://buy.stripe.com/7sY8wO85desibl46eu6Na02',
};

export default function TierCard({ title, price, priceId, description, gradient, icon: Icon }: TierCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
      {/* Card */}
      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 text-center hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-10 w-10 text-white" />
          </div>
        </div>
        {/* Content */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
        {/* Price */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-2">
            <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>${price}</span>
          </div>
          <p className="text-gray-400 text-sm">One-time support</p>
        </div>
        {/* Features */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-sm">Limited Edition Crewneck Sweater</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm">Exclusive Design</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span className="text-sm">In-Person Delivery</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm">Direct Championship Support</span>
          </div>
        </div>
        {/* Button */}
        <a
          href={stripeLinks[priceId]}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r ${gradient} text-white hover:shadow-2xl hover:scale-105`}
        >
          <span>Support Emma's Journey</span>
        </a>
      </div>
    </div>
  );
}