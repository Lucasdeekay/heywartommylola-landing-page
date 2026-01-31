'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'Liquid Soap',
      image: '/images/liquid-soap.jpeg',
      benefit: 'Gentle cleansing with lasting freshness',
      badge: 'Best Seller',
      color: 'emerald',
    },
    {
      name: 'Air Freshener',
      image: '/images/air-freshener.jpeg',
      benefit: 'Long-lasting fragrance for your space',
      badge: 'Popular',
      color: 'teal',
    },
    {
      name: 'Hypo',
      image: '/images/hypo.jpg',
      benefit: 'Powerful cleaning and disinfection',
      badge: null,
      color: 'cyan',
    },
    {
      name: 'Izal',
      image: '/images/izal.jpg',
      benefit: 'Professional-grade disinfectant',
      badge: 'Popular',
      color: 'emerald',
    },
    {
      name: 'Anti-Dandruff Shampoo',
      image: '/images/shampoo.jpg',
      benefit: 'Healthy scalp, confident you',
      badge: 'Best Seller',
      color: 'teal',
    },
    {
      name: 'Hair Cream',
      image: '/images/hair-cream.avif',
      benefit: 'Nourish and style with ease',
      badge: null,
      color: 'cyan',
    },
  ];

  return (
    <section id="products" ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Product Range</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Premium <span className="text-emerald-600">Quality Products</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted range of household and personal care solutions designed for the modern Nigerian home.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} - high-quality liquid product`}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAP/2Q=="
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.benefit}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400 transition-colors duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Decoration */}
              <motion.div
                className={`absolute -z-10 top-4 left-4 w-full h-full bg-${product.color}-100 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}
                whileHover={{ scale: 1.05 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need bulk quantities or custom packaging?
          </p>
          <a
            href="https://wa.me/2348104826527"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
