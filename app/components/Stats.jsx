import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, BookOpen, Award, Building } from "lucide-react";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState({
    students: 0,
    projects: 0,
    lectures: 0,
    partners: 0,
  });

  const finalCounts = {
    students: 1150,
    projects: 2500,
    lectures: 300,
    partners: 50,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const incrementCounts = (step) => {
        const progress = Math.min(step / steps, 1);

        setCounts({
          students: Math.floor(finalCounts.students * progress),
          projects: Math.floor(finalCounts.projects * progress),
          lectures: Math.floor(finalCounts.lectures * progress),
          partners: Math.floor(finalCounts.partners * progress),
        });

        if (step < steps) {
          setTimeout(() => incrementCounts(step + 1), stepDuration);
        }
      };

      incrementCounts(0);
    }
  }, [inView]);

  const stats = [
    {
      number: counts.students,
      suffix: "+",
      label: "Students Enrolled",
      description: "Aspiring developers trained",
      icon: Users,
      gradient: "from-[#2196F3] to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      number: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Real-world applications built",
      icon: BookOpen,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      number: counts.lectures,
      suffix: "+",
      label: "Expert Lectures Delivered",
      description: "Hours of premium content",
      icon: Award,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      number: counts.partners,
      suffix: "+",
      label: "Industry Partners",
      description: "Companies hiring our students",
      icon: Building,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that showcase our commitment to student success and the
            growing community of tech professionals we've helped create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <motion.span
                    className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number.toLocaleString()}
                    {stat.suffix}
                  </motion.span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{stat.description}</p>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-white/50 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r ${stat.gradient} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/90">Placement Rate</div>
              <div className="text-sm text-white/70 mt-1">
                Students successfully placed in tech companies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-white/90">Student Rating</div>
              <div className="text-sm text-white/70 mt-1">
                Average satisfaction score from alumni
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/90">Free Programs</div>
              <div className="text-sm text-white/70 mt-1">
                No hidden costs or fees ever
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            "Top Rated Internship Program",
            "Best Student Placement Record",
            "Industry Recognition Award",
            "Excellence in Tech Education",
          ].map((badge, index) => (
            <div
              key={badge}
              className="bg-white rounded-full px-6 py-3 shadow-lg border-2 border-[#BBDEFB] hover:border-blue-300 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[#2196F3]" />
                <span className="text-sm font-medium text-gray-800">
                  {badge}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
