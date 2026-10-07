export type Testimonial = {
  name: string;
  role: string;
  program: string;
  initials: string;
  quote: string;
  rating: number;
  outcome: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Web Developer at TCS",
    program: "Web Development Internship",
    initials: "AS",
    quote:
      "The internship at Sanwariya Career Technology completely transformed my career. The hands-on projects and mentorship helped me land my dream job at TCS.",
    rating: 5,
    outcome: "Placed at TCS",
  },
  {
    name: "Rohit Patel",
    role: "Mobile App Developer at Flipkart",
    program: "App Development Internship",
    initials: "RP",
    quote:
      "I came with zero coding experience and left with a full-time offer. The structured learning path and real-world projects gave me confidence to excel.",
    rating: 5,
    outcome: "Placed at Flipkart",
  },
  {
    name: "Priya Singh",
    role: "AI/ML Engineer at Infosys",
    program: "AI/ML Internship",
    initials: "PS",
    quote:
      "The AI/ML program exceeded my expectations. Working on real datasets and getting mentorship from industry experts prepared me for challenges ahead.",
    rating: 5,
    outcome: "Placed at Infosys",
  },
  {
    name: "Arjun Kumar",
    role: "Blockchain Developer",
    program: "Blockchain Internship",
    initials: "AK",
    quote:
      "The blockchain internship opened up a completely new career path for me. The practical approach to smart contract development was exactly what I needed.",
    rating: 5,
    outcome: "Freelance Blockchain Dev",
  },
  {
    name: "Kavya Reddy",
    role: "Digital Marketing Executive at Zomato",
    program: "Digital Marketing Internship",
    initials: "KR",
    quote:
      "From understanding SEO basics to running successful ad campaigns, this internship covered everything. The practical skills helped me secure my role.",
    rating: 5,
    outcome: "Placed at Zomato",
  },
  {
    name: "Vikash Jain",
    role: "HR Associate at Infosys",
    program: "HR Internship",
    initials: "VJ",
    quote:
      "The HR internship gave me insights into modern HR practices and people management. The mentorship on talent acquisition was invaluable.",
    rating: 5,
    outcome: "Placed at Infosys",
  },
];
