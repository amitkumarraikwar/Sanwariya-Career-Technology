import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  UserCheck,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Fill out our simple application form with your academic details and program preferences.",
      icon: FileText,
      color: "from-[#2196F3] to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
      details: [
        "Online application",
        "Choose your track",
        "5 minutes to complete",
      ],
    },
    {
      number: "02",
      title: "Shortlisting",
      description:
        "Our team reviews applications and selects candidates based on enthusiasm and commitment.",
      icon: UserCheck,
      color: "from-green-500 to-teal-600",
      bgColor: "from-green-50 to-teal-50",
      details: [
        "Review process",
        "Merit-based selection",
        "Results in 48 hours",
      ],
    },
    {
      number: "03",
      title: "Project Assignment",
      description:
        "Get assigned to real-world projects with dedicated mentors and structured learning paths.",
      icon: Briefcase,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      details: ["Real projects", "Expert mentorship", "Flexible schedule"],
    },
    {
      number: "04",
      title: "Completion & Rewards",
      description:
        "Complete projects, receive industry-recognized certificates, and earn performance-based stipends.",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      details: ["Certification", "Stipend rewards", "Portfolio building"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
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
            How It{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get from application to
            internship completion with clear guidance and support at every step.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          {/* <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-orange-200 to-purple-200 rounded-full" /> */}

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Circle */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative z-10 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300`}
                >
                  <div
                    className={`text-sm font-bold text-transparent bg-gradient-to-r ${step.color} bg-clip-text mb-2`}
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center justify-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                {/* Step Circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Step Content */}
                <div
                  className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 flex-1`}
                >
                  <div
                    className={`text-sm font-bold text-transparent bg-gradient-to-r ${step.color} bg-clip-text mb-2`}
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="ml-8 mt-4 mb-4">
                  <div className="w-1 h-8 bg-gray-200 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of students who have kickstarted their careers with
              us.
            </p>
            <motion.a
              href="#apply"
              className="inline-flex items-center bg-white text-[#1976D2] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
