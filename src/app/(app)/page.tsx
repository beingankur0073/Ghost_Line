'use client';

import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay'
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-16 bg-slate-300 text-slate-50">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-violet-500 drop-shadow-lg">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            <span className="text-blue-800 font-semibold">Ghost Line</span> – Where your identity remains a secret.
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 2500 })]}
          className="w-full max-w-lg md:max-w-2xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl hover:border-violet-500 transition">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0 text-violet-500" />
                    <div>
                      <p className="text-slate-200">{message.content}</p>
                      <p className="text-xs text-slate-500">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-slate-900 text-slate-400 border-t border-slate-700">
        © 2025 <span className="text-violet-500 font-semibold">Ghost Line</span>. All rights reserved.
      </footer>
    </>
  );
}
