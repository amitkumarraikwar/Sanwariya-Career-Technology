import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Web Developer at TCS",
      program: "Web Development Internship",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The internship at Sanwariya Career Technology completely transformed my career. The hands-on projects and mentorship helped me land my dream job at TCS. The learning environment was incredibly supportive and practical.",
      rating: 5,
      outcome: "Placed at TCS with 6.5 LPA package",
    },
    {
      name: "Rohit Patel",
      role: "Mobile App Developer at Flipkart",
      program: "App Development Internship",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "I came with zero coding experience and left with a full-time offer from Flipkart. The structured learning path and real-world projects gave me the confidence to excel in technical interviews.",
      rating: 5,
      outcome: "Placed at Flipkart with 8.2 LPA package",
    },
    {
      name: "Priya Singh",
      role: "AI/ML Engineer at Microsoft",
      program: "AI/ML Internship",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The AI/ML program exceeded my expectations. Working on real datasets and getting mentorship from industry experts prepared me for the challenges at Microsoft. Highly recommend to anyone serious about ML.",
      rating: 5,
      outcome: "Placed at Microsoft with 12 LPA package",
    },
    {
      name: "Arjun Kumar",
      role: "Blockchain Developer at Polygon",
      program: "Blockchain Internship",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The blockchain internship opened up a completely new career path for me. The practical approach to smart contract development and DApp creation was exactly what I needed to break into Web3.",
      rating: 5,
      outcome: "Placed at Polygon with 10 LPA package",
    },
    {
      name: "Kavya Reddy",
      role: "Digital Marketing Manager at Zomato",
      program: "Digital Marketing Internship",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "From understanding SEO basics to running successful ad campaigns, this internship covered everything. The practical assignments and campaign analysis skills helped me secure a marketing role at Zomato.",
      rating: 5,
      outcome: "Placed at Zomato with 7 LPA package",
    },
    {
      name: "Vikash Jain",
      role: "HR Business Partner at Infosys",
      program: "HR Internship",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The HR internship gave me insights into modern HR practices and people management. The mentorship on talent acquisition and employee engagement strategies was invaluable for my career growth at Infosys.",
      rating: 5,
      outcome: "Placed at Infosys with 6 LPA package",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
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
            Student{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our alumni who have successfully transitioned
            from students to industry professionals with the help of our
            internship programs.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 lg:h-80 overflow-hidden rounded-3xl bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8 h-full">
                  {/* Student Photo */}
                  <div className="lg:col-span-1 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#1976D2] font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonials[currentIndex].program}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Outcome */}
                    <div className="bg-gradient-to-r from-blue-50 to-[#C8E6C9] rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-gray-800">
                          Outcome: {testimonials[currentIndex].outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#2196F3] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={`grid-${index}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.quote.substring(0, 120)}...
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
