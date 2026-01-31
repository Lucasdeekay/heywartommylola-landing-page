'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Truck, CheckCircle2 } from 'lucide-react';

export default function LocationsDelivery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const locations = [
    { city: 'Calabar', state: 'Cross River' },
    { city: 'Igboora', state: 'Oyo' },
    { city: 'Abeokuta', state: 'Ogun' },
    { city: 'Ibadan', state: 'Oyo' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nigeria-delivery.jpg"
                alt="Nationwide delivery service across Nigeria with logistics network"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAP/2Q=="
              />
              
              {/* Nigeria Map Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-600/80 to-teal-700/80">
                <svg
                  viewBox="0 0 200 200"
                  className="w-64 h-64 opacity-30"
                  fill="white"
                >
                  <path d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z" />
                </svg>
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Serving <span className="text-emerald-600">Nigeria</span> with Pride
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              With strategic locations across key cities and a robust delivery network, we ensure your products reach you fresh and on time, anywhere in Nigeria.
            </p>

            {/* Locations Grid */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Our Locations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="font-bold text-gray-900">{location.city}</div>
                    <div className="text-sm text-gray-600">{location.state} State</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Nationwide Delivery Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <motion.div
                className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Nationwide Delivery</h3>
                </div>
                
                <p className="text-emerald-50 leading-relaxed mb-4">
                  No matter where you are in Nigeria, we deliver quality products right to your doorstep with reliable logistics partners.
                </p>

                <div className="flex items-center gap-2 text-emerald-100">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Fast & Reliable Shipping</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
