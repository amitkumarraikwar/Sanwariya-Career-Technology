import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Award,
  Briefcase,
  DollarSign,
  BookOpen,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";

const Perks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const perks = [
    {
      title: "Expert Mentorship",
      description:
        "Get personalized guidance from industry professionals with 10+ years of experience.",
      icon: Users,
      gradient: "from-[#2196F3] to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      features: [
        "1-on-1 Sessions",
        "Code Reviews",
        "Career Guidance",
        "Industry Insights",
      ],
    },
    {
      title: "Industry Certification",
      description:
        "Receive globally recognized certificates that add value to your professional profile.",
      icon: Award,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      features: [
        "Digital Certificates",
        "LinkedIn Verification",
        "Industry Recognition",
        "Portfolio Enhancement",
      ],
    },
    {
      title: "Real-world Projects",
      description:
        "Work on actual client projects and build a portfolio that impresses employers.",
      icon: Briefcase,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      features: [
        "Client Projects",
        "Portfolio Building",
        "Live Deployments",
        "Production Experience",
      ],
    },
    {
      title: "Performance Rewards",
      description:
        "Earn stipends and bonuses based on your project performance and dedication.",
      icon: DollarSign,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        "Performance Stipends",
        "Completion Bonuses",
        "Achievement Rewards",
        "Merit Recognition",
      ],
    },
    {
      title: "Flexible Learning",
      description:
        "Learn at your own pace with flexible schedules that fit your academic commitments.",
      icon: BookOpen,
      gradient: "from-indigo-500 to-[#1976D2]",
      bgGradient: "from-indigo-50 to-blue-50",
      features: [
        "Self-paced Learning",
        "Weekend Options",
        "Recorded Sessions",
        "Flexible Deadlines",
      ],
    },
    {
      title: "24/7 Support",
      description:
        "Get round-the-clock support through our dedicated community and help channels.",
      icon: Headphones,
      gradient: "from-cyan-500 to-teal-600",
      bgGradient: "from-cyan-50 to-teal-50",
      features: [
        "Community Forum",
        "Live Chat Support",
        "Peer Learning",
        "Quick Resolution",
      ],
    },
    {
      title: "Global Exposure",
      description:
        "Connect with international clients and work on projects with global impact.",
      icon: Globe,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      features: [
        "International Projects",
        "Global Standards",
        "Cross-cultural Teams",
        "Remote Work Skills",
      ],
    },
    {
      title: "Fast-track Career",
      description:
        "Accelerate your career growth with direct placement assistance and job referrals.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      features: [
        "Job Placement",
        "Interview Prep",
        "Resume Building",
        "Company Referrals",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Our Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive benefits and support systems designed to
            ensure your success throughout the internship and beyond into your
            professional career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${perk.bgGradient} rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${perk.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {perk.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {perk.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {perk.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + featureIndex * 0.1,
                      }}
                      className="flex items-center text-sm"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${perk.gradient} mr-3 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${perk.gradient} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Complete Career Transformation
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our comprehensive approach ensures you're not just completing an
              internship, but building a foundation for a successful tech
              career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Learn</h4>
              <p className="text-white/90">
                Master cutting-edge technologies with hands-on projects and
                expert guidance.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Build</h4>
              <p className="text-white/90">
                Create impressive portfolio projects that showcase your skills
                to employers.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Grow</h4>
              <p className="text-white/90">
                Launch your career with job placement assistance and industry
                connections.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Success Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-8 py-4 border-2 border-green-200">
            <Award className="w-6 h-6 text-green-600 mr-3" />
            <span className="text-green-800 font-semibold">
              95% Placement Guarantee or Your Money Back*
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *Terms and conditions apply. See our placement policy for details.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Perks;
