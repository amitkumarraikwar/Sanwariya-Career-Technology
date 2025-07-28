"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#E8F3F8] to-[#EAF5E7] overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-70"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-10 w-20 h-20 bg-mint-200 rounded-full opacity-50 bg-pink-200"
          animate={{ y: [0, 25, 0], x: [0, -10, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 left-10 w-16 h-16 rounded-full opacity-60 bg-green-200"
          animate={{ y: [0, -20, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-200 rounded-full opacity-80"
          animate={{ y: [0, -20, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Real Internships. </span>
                  <span className="text-[#1976D2]">Real Skills. </span>
                  <span className="text-green-500">Zero Cost.</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join India's leading free internship program and gain hands-on
                experience with real projects. Build your career with expert
                mentorship and industry-recognized certifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1976D2] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1565C0] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Apply Now - It's Free
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#1976D2] text-[#1976D2] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-12 pt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#BBDEFB] rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-[#1976D2] text-xl">👥</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">1150+</div>
                  <div className="text-gray-600">Students</div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-green-600 text-xl">📚</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">300+</div>
                  <div className="text-gray-600">Expert Lectures</div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-pink-600 text-xl">🎯</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-600">Free</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Community Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:flex justify-center"
            >
              <div className="bg-gradient-to-br from-[#BBDEFB] to-green-100 p-8 rounded-3xl shadow-xl max-w-md">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-3xl">👥</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Join Our Community
                    </h3>
                    <p className="text-gray-600">Learn. Build. Grow.</p>
                  </div>

                  <div className="bg-white px-4 py-2 rounded-full inline-flex items-center mr-2 gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-700">
                      Available
                    </span>
                  </div>

                  <div className="bg-white px-4 py-2 rounded-full inline-flex items-center gap-2">
                    <span className="text-[#1976D2]">🏆</span>
                    <span className="text-sm font-medium text-gray-700">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
