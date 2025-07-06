'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Music, Trophy, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  useEffect(() => {
    // No backend session verification needed
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Success Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8">
            LEGENDARY!
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light">
            You're now officially part of Emma's championship crew! 
            <span className="block text-cyan-400 font-semibold mt-2">Your support means everything.</span>
          </p>

          {/* Success Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">✓</div>
              <div className="text-gray-300 text-sm">Payment Confirmed</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-1">✓</div>
              <div className="text-gray-300 text-sm">Gear Reserved</div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-pink-400 mb-1">✓</div>
              <div className="text-gray-300 text-sm">Crew Member</div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center space-x-3">
              <Music className="h-8 w-8 text-cyan-400" />
              <span>What's Next?</span>
            </h2>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Order Processing</h3>
                  <p className="text-gray-300 text-sm">We're preparing your exclusive limited-edition gear with championship-level quality</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Confirmation Email</h3>
                  <p className="text-gray-300 text-sm">Check your inbox for order details and delivery coordination</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Personal Delivery</h3>
                  <p className="text-gray-300 text-sm">We'll contact you to arrange in-person delivery of your exclusive gear</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Message */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Your Impact</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Your support directly fuels Emma's championship journey. Every contribution helps bring 
              Canadian hip-hop culture to the world stage and makes her championship dreams a reality. 
              <span className="text-cyan-400 font-semibold">You're not just buying gear—you're investing in greatness.</span>
            </p>
          </div>

          {/* Session ID (for debugging in development) */}
          {sessionId && process.env.NODE_ENV === 'development' && (
            <div className="text-xs text-gray-500 mb-8 font-mono bg-slate-800/50 rounded-lg p-3">
              Session ID: {sessionId}
            </div>
          )}

          {/* Back to Home */}
          <div className="flex justify-center mt-8">
            <Link href="/">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-gray-400 mt-8 text-sm">
          Questions about your order? We're here to help make this experience legendary.
        </p>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}