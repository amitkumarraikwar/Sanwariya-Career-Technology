import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Smartphone,
  Brain,
  Users,
  TrendingUp,
  Blocks,
  ArrowRight,
} from "lucide-react";

const InternshipCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Web Development",
      description:
        "Master frontend and backend technologies including React, Node.js, and modern frameworks.",
      icon: Code,
      gradient: "from-[#2196F3] to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      duration: "3 months",
      projects: "5+ Real Projects",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "App Development",
      description:
        "Build native and cross-platform mobile applications using React Native and Flutter.",
      icon: Smartphone,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      duration: "3 months",
      projects: "4+ Mobile Apps",
      skills: ["React Native", "Flutter", "Firebase", "API Integration"],
    },
    {
      title: "AI/ML",
      description:
        "Dive into artificial intelligence and machine learning with Python, TensorFlow, and real datasets.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      duration: "4 months",
      projects: "3+ ML Models",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
    },
    {
      title: "Blockchain",
      description:
        "Explore decentralized technologies, smart contracts, and cryptocurrency development.",
      icon: Blocks,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      duration: "3 months",
      projects: "2+ DApps",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    },
    {
      title: "Human Resources",
      description:
        "Learn modern HR practices, talent acquisition, and employee engagement strategies.",
      icon: Users,
      gradient: "from-indigo-500 to-[#1976D2]",
      bgGradient: "from-indigo-50 to-blue-50",
      duration: "2 months",
      projects: "3+ HR Projects",
      skills: [
        "Recruitment",
        "Performance Management",
        "HR Analytics",
        "Employee Relations",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Master SEO, social media marketing, content strategy, and digital advertising.",
      icon: TrendingUp,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      duration: "2 months",
      projects: "4+ Campaigns",
      skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Internship{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of internship programs designed
            to give you hands-on experience in cutting-edge technologies and
            industry practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/20`}
              >
                {/* Icon and Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">{category.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Project Info */}
                <div className="bg-white/60 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-800">
                      Projects
                    </span>
                    <span className="text-sm text-gray-600">
                      {category.projects}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className={`bg-gradient-to-r ${category.gradient} text-white rounded-lg p-4 flex items-center justify-between group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  <a
                    href="https://forms.gle/DkKA6MrGV3z184Va6"
                    className="font-semibold"
                  >
                    Apply Now
                  </a>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Our career counselors will help you choose the perfect internship
              based on your interests and goals.
            </p>
            <motion.button
              className="bg-white text-[#1976D2] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open("https://forms.gle/DkKA6MrGV3z184Va6", "_blank");
              }}
            >
              Get Free Career Counseling
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipCategories;
