import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn, Calendar, MapPin } from "lucide-react";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState("");

  const galleryImages = [
    {
      id: 1,
      src: "/campus/campuss11.jpeg",
      // title: "Web Development Workshop",
      // date: "March 2024",
      // location: "Indore Campus",
      description:
        "Students learning React and modern web development frameworks in our hands-on workshop.",
    },
    {
      id: 2,
      src: "/campus/campuss12.jpeg",
      // title: "AI/ML Bootcamp",
      // date: "February 2024",
      // location: "Tech Center",
      description:
        "Intensive machine learning session covering TensorFlow and real-world applications.",
    },
    {
      id: 3,
      src: "/campus/campuss13.jpeg",
      // title: "Project Presentation Day",
      // date: "January 2024",
      // location: "Main Auditorium",
      description:
        "Students showcasing their final projects to industry experts and mentors.",
    },
    {
      id: 4,
      src: "/campus/campuss14.jpeg",
      // title: "Mobile App Development",
      // date: "February 2024",
      // location: "Lab 2",
      description:
        "Hands-on session on React Native and Flutter development with live coding.",
    },
    {
      id: 5,
      src: "/campus/campuss15.jpeg",
      // title: "Industry Expert Session",
      // date: "March 2024",
      // location: "Conference Room",
      description:
        "Guest lecture by senior developers from leading tech companies.",
    },
    {
      id: 6,
      src: "/campus/campuss16.jpeg",
      // title: "Team Collaboration",
      // date: "January 2024",
      // location: "Co-working Space",
      description:
        "Students working together on group projects and peer learning sessions.",
    },
    {
      id: 7,
      src: "/campus/campuss17.jpeg",
      // title: "Blockchain Workshop",
      // date: "December 2023",
      // location: "Innovation Lab",
      description:
        "Exploring smart contracts and decentralized applications development.",
    },
    {
      id: 8,
      src: "/campus/campuss18.jpeg",
      // title: "Graduation Ceremony",
      // date: "April 2024",
      // location: "Main Hall",
      description:
        "Celebrating successful completion of internship programs with certificates.",
    },
    {
      id: 6,
      src: "/campus/campuss19.jpeg",
      // title: "Team Collaboration",
      // date: "January 2024",
      // location: "Co-working Space",
      description:
        "Students working together on group projects and peer learning sessions.",
    },
    {
      id: 7,
      src: "/campus/campuss20.jpeg",
      // title: "Blockchain Workshop",
      // date: "December 2023",
      // location: "Innovation Lab",
      description:
        "Exploring smart contracts and decentralized applications development.",
    },
    // {
    //   id: 8,
    //   src: "/campus/campuss21.jpeg",
    //   // title: "Graduation Ceremony",
    //   // date: "April 2024",
    //   // location: "Main Hall",
    //   description:
    //     "Celebrating successful completion of internship programs with certificates.",
    // },
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleKeyPress = (e) => {
    if (selectedImage !== null) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

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
            Campus{" "}
            <span className="bg-gradient-to-r from-blue-600 to-[#4CAF50] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our vibrant learning environment, workshops, and
            the amazing moments shared by our student community.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-[#C8E6C9] aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {image.date}
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {image.location}
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </div>
              </div>
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
              Ready to Be Part of Our Story?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join our vibrant community and create your own success story with
              us.
            </p>
            <motion.button
              className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open("https://forms.gle/8RPiNjxboGcv6ous7", "_blank");
              }}
            >
              Apply for Internship
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
