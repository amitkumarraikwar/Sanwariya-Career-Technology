import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail, Users } from "lucide-react";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      title: "Founder & CEO",
      bio: "Former Google engineer with 10+ years of experience in tech education and mentorship.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "rajesh@sanwariya.tech",
      expertise: ["Leadership", "Strategy", "Mentorship"],
      funFact: "Has mentored 500+ developers",
    },
    {
      name: "Priya Patel",
      title: "Head of Programs",
      bio: "Expert in curriculum design and student development with MBA from IIM Ahmedabad.",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "priya@sanwariya.tech",
      expertise: ["Curriculum Design", "Program Management", "Student Success"],
      funFact: "Designed 50+ learning modules",
    },
    {
      name: "Amit Kumar",
      title: "Technical Lead",
      bio: "Full-stack developer and AI/ML specialist with expertise in modern web technologies.",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "amit@sanwariya.tech",
      expertise: ["Web Development", "AI/ML", "System Design"],
      funFact: "Built 20+ production applications",
    },
    {
      name: "Sneha Gupta",
      title: "Marketing Director",
      bio: "Digital marketing expert with proven track record in brand building and student acquisition.",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "sneha@sanwariya.tech",
      expertise: ["Digital Marketing", "Brand Strategy", "Analytics"],
      funFact: "Grew student base by 300%",
    },
    {
      name: "Vikash Singh",
      title: "Operations Manager",
      bio: "Operations specialist ensuring smooth program delivery and student satisfaction.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "vikash@sanwariya.tech",
      expertise: ["Operations", "Process Optimization", "Quality Assurance"],
      funFact: "Manages 100+ projects simultaneously",
    },
    {
      name: "Kavya Reddy",
      title: "Student Success Manager",
      bio: "Dedicated to student welfare and career guidance with psychology background.",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "kavya@sanwariya.tech",
      expertise: ["Student Counseling", "Career Guidance", "Psychology"],
      funFact: "Helped 800+ students find jobs",
    },
  ];

  return (
    <section
      id="team"
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of industry experts, educators, and mentors are
            dedicated to helping you succeed in your tech career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                {/* Member Image */}
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#BBDEFB] to-[#C8E6C9]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <motion.a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5 text-[#1976D2]" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-5 h-5 text-[#1976D2]" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#1976D2] font-semibold mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-[#1976D2] rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-to-r from-blue-50 to-[#C8E6C9] rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Fun Fact:</span>{" "}
                    {member.funFact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-white/90">Years Combined Experience</div>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Students Mentored</div>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/90">Industry Partnerships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
