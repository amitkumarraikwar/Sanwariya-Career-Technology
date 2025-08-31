import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Clock, CheckCircle, ArrowRight } from "lucide-react";

const ApplicationForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formFeatures = [
    {
      icon: FileText,
      title: "Simple Application",
      description: "Easy-to-fill form with basic details",
    },
    {
      icon: Clock,
      title: "5 Minutes",
      description: "Quick application process",
    },
    {
      icon: CheckCircle,
      title: "Instant Confirmation",
      description: "Get confirmation immediately",
    },
  ];

  return (
    <section
      id="apply"
      className="py-20 bg-gradient-to-br from-blue-50 to-[#C8E6C9]"
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
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#1976D2] to-[#4CAF50] bg-clip-text text-transparent">
              Kickstart Your Career?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards building your dream career in
            technology. Apply now for our free internship programs and transform
            your future.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {formFeatures.map((feature, index) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2196F3] to-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#2196F3] to-[#4CAF50] p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Application Form</h3>
              <p className="text-[#BBDEFB]">
                Fill out the form below to apply for our internship programs
              </p>
            </div>

            {/* Embedded Google Form */}
            <div className="p-8">
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <FileText className="w-6 h-6 mr-3" />
                  <span className="text-lg font-medium">
                    Internship Application Form
                  </span>
                </div>

                {/* Google Form Iframe Placeholder */}
                <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
                  <p className="text-gray-600 mb-4">
                    Google Form will be embedded here. Replace the src URL below
                    with your actual Google Form embed URL.
                  </p>

                  {/* Replace this with your actual Google Form embed code */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSekMUNkP0atGsSzN5LnuR3qHGeDx8yZD1VFnIhz5czm2OydXA/viewform?embedded=true"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                    title="Internship Application Form"
                  >
                    Loading form...
                  </iframe>

                  {/* Fallback Link */}
                  <div className="mt-6">
                    <a
                      href="https://forms.gle/Mya85RsLQEqtGbVH6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white px-8 py-3 rounded-full font-semibold hover:from-[#1976D2] hover:to-[#1565C0] transition-all duration-300"
                    >
                      Open Application Form
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">
                  Application Instructions:
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] mr-3 mt-0.5 flex-shrink-0" />
                    Fill out all required fields in the form above
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] mr-3 mt-0.5 flex-shrink-0" />
                    Choose your preferred internship program
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] mr-3 mt-0.5 flex-shrink-0" />
                    Upload your resume and any relevant documents
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] mr-3 mt-0.5 flex-shrink-0" />
                    Submit the form and wait for our response within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative Application Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Application?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to assist you with the application process. Reach
              out to us through any of these channels:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="mailto:bharatmolwa2000@gmail.com"
                className="flex items-center justify-center bg-blue-50 hover:bg-[#BBDEFB] rounded-lg p-4 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#1565C0]">
                    Email
                  </span>
                </div>
              </a>

              <a
                href="tel:+918966851168"
                className="flex items-center justify-center bg-[#C8E6C9] hover:bg-[#C8E6C9] rounded-lg p-4 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green-700">
                    Call
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/+918966851168"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-50 hover:bg-green-100 rounded-lg p-4 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.789-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green-700">
                    WhatsApp
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationForm;
