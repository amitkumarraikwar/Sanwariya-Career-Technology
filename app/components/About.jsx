import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      year: "2021",
      title: "Foundation",
      description:
        "Started with a vision to bridge the gap between academic learning and industry requirements.",
      icon: Target,
      color: "blue",
    },
    {
      year: "2022",
      title: "First Batch",
      description:
        "Successfully trained our first batch of 50 students in web development and digital marketing.",
      icon: Users,
      color: "mint",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Expanded to include AI/ML, blockchain, and mobile app development programs.",
      icon: Lightbulb,
      color: "blush",
    },
    {
      year: "2024",
      title: "Milestone",
      description:
        "Reached 1,150+ students trained with 95% placement rate and industry recognition.",
      icon: Trophy,
      color: "blue",
    },
  ];

  const stats = [
    { number: "1150+", label: "Students Trained", color: "blue" },
    { number: "300+", label: "Expert Lectures", color: "mint" },
    { number: "95%", label: "Placement Rate", color: "blush" },
    { number: "50+", label: "Industry Partners", color: "blue" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
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
            About{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#3EB489] bg-clip-text text-transparent">
              Sanwariya Career Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through
            comprehensive, hands-on internship programs that combine real-world
            projects with expert mentorship.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  stat.color === "blue"
                    ? "bg-[#BBDEFB]"
                    : stat.color === "mint"
                    ? "bg-[#3EB489]"
                    : "bg-pink-100"
                }`}
              >
                <motion.span
                  className={`text-2xl font-bold ${
                    stat.color === "blue"
                      ? "text-[#1976D2]"
                      : stat.color === "mint"
                      ? "text-white"
                      : "text-pink-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h3>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-[#3EB489] hidden lg:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          item.color === "blue"
                            ? "bg-[#BBDEFB]"
                            : item.color === "mint"
                            ? "bg-[#C8E6C9]"
                            : "bg-[#FFECB3]"
                        }`}
                      >
                        <item.icon
                          className={`w-6 h-6 ${
                            item.color === "blue"
                              ? "text-[#1976D2]"
                              : item.color === "mint"
                              ? "text-[#4CAF50]"
                              : "text-pink-500"
                          }`}
                        />
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          item.color === "blue"
                            ? "text-[#1976D2]"
                            : item.color === "mint"
                            ? "text-[#4CAF50]"
                            : "text-pink-500"
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-white border-4 border-[#2196F3] rounded-full z-10" />

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-3xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            To democratize quality tech education by providing free,
            industry-relevant internships that transform students into job-ready
            professionals. We believe every student deserves the opportunity to
            build a successful career in technology, regardless of their
            financial background.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
