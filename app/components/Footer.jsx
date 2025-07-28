import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sanwariya</h3>
                <p className="text-sm text-gray-300">Career Technology</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering the next generation of tech professionals through
              comprehensive, hands-on internship programs that bridge the gap
              between academic learning and industry requirements.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Apply Now
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Programs */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Internship Programs
            </motion.h4>
            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  AI/ML
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Blockchain
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Human Resources
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Digital Marketing
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Info
            </motion.h4>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123, Tech Park, Scheme No. 74C,
                    <br />
                    Vijay Nagar, Indore, MP 452010
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@sanwariya.tech"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@sanwariya.tech
                </a>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="mt-6 p-4 bg-gray-800 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="text-sm font-semibold text-primary-400 mb-2">
                Business Hours
              </h5>
              <p className="text-sm text-gray-300">
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 2:00 PM
                <br />
                Sun: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 Sanwariya Career Technology. All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
