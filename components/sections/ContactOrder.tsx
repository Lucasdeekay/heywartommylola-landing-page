'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, Instagram, Music2, Facebook } from 'lucide-react';

export default function ContactOrder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+234 810 482 6527',
      link: 'https://wa.me/2348104826527',
      color: 'emerald',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '0811 744 7563',
      link: 'tel:08117447563',
      color: 'teal',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@heywartommylola',
      link: 'https://instagram.com/heywartommylola',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Music2,
      label: 'TikTok',
      handle: '@heywartommy',
      link: 'https://tiktok.com/@heywartommy',
      color: 'from-black to-teal-400',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      handle: 'Adesewa Mustapha',
      link: 'https://facebook.com',
      color: 'from-blue-600 to-blue-400',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #059669 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-emerald-600">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to place an order or have questions? We're here to help. Reach out through any of our channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${method.color}-100 flex items-center justify-center group-hover:bg-${method.color}-200 transition-colors`}>
                    <method.icon className={`w-8 h-8 text-${method.color}-600`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{method.label}</div>
                    <div className="text-xl font-bold text-gray-900">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow Us on Social Media</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className={`bg-gradient-to-br ${social.color} rounded-2xl p-6 text-white text-center overflow-hidden`}>
                      <div className="relative z-10">
                        <social.icon className="w-8 h-8 mx-auto mb-3" />
                        <div className="font-semibold text-sm mb-1">{social.label}</div>
                        <div className="text-xs opacity-90">{social.handle}</div>
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ y: '100%' }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/customer-support.jpg"
                alt="Friendly customer support team ready to assist with product orders and inquiries"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAP/2Q=="
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent"></div>
            </motion.div>

            {/* CTA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-sm text-gray-600 mb-2">Quick Response</div>
              <div className="text-2xl font-bold text-emerald-600">Available 24/7</div>
            </motion.div>

            {/* Decorative Circle */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM27.03 0l-9.9 9.9 1.414 1.414L28.443 0h-1.414zM0 5.373l6.485 6.486 1.415-1.415L0 2.546v2.827zm0 5.656l9.9 9.9 1.415-1.415L0 8.2v2.83zm0 5.656l13.314 13.314 1.414-1.414L0 13.857v2.828zm0 5.657l16.728 16.728 1.414-1.414L0 19.514v2.828zm0 5.657l20.142 20.142 1.414-1.414L0 25.17v2.83zm0 5.656l23.556 23.556 1.414-1.414L0 30.828v2.83zm0 5.657L27.07 60.97l1.415-1.414L0 36.485v2.828zm0 5.657L30.485 60.97l1.414-1.414L0 42.143v2.828zm0 5.657L33.9 60.97 35.314 59.556 0 47.8v2.828zm0 2.828L36.728 60.97l1.414-1.414L0 53.143v-2.828z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Get in touch today and experience the quality that sets us apart.
            </p>
            <a
              href="https://wa.me/2348104826527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
