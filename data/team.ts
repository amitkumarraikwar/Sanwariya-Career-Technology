export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  skills: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Bharat Molwa",
    role: "Founder",
    bio: "Visionary founder with a background in curriculum design and student success strategies.",
    image: "/expert/experts2.png",
    linkedin: "https://www.linkedin.com/in/bharatmolwa/",
    skills: ["Curriculum Design", "Program Management", "Student Success"],
  },
  {
    name: "Praphull Pandey",
    role: "Co-Founder",
    bio: "Co-Founder with 3+ years in tech and education, passionate about mentoring future leaders.",
    image: "/expert/experts1.png",
    linkedin: "https://www.linkedin.com/in/praphullpandey/",
    skills: ["Leadership", "Strategy", "Mentorship"],
  },
  {
    name: "Himanshu Agnihotri",
    role: "Manager",
    bio: "Operations manager with strong organizational skills and a focus on process efficiency.",
    image: "/expert/experts.jpeg",
    linkedin: "https://www.linkedin.com/",
    skills: ["Operations", "Team Management", "Process Optimization"],
  },
  {
    name: "Ritik Verma",
    role: "CTO",
    bio: "CTO with 5+ years in software engineering and a deep passion for scalable architecture.",
    image: "/expert/ritikverma.jpeg",
    linkedin: "https://www.linkedin.com/in/ritikverma/",
    skills: ["Software Architecture", "Full-Stack Dev", "System Design"],
  },
  {
    name: "Rahul Chaurasiya",
    role: "Operations Associate",
    bio: "Operations associate with a knack for process optimization and quality assurance.",
    image: "/expert/rahul.jpg",
    linkedin: "https://www.linkedin.com/in/rahulchaurasiya/",
    skills: ["Operations", "Process Optimization", "Quality Assurance"],
  },
  {
    name: "Manas Chouhan",
    role: "Full-Stack Developer",
    bio: "Full-stack developer passionate about creating innovative web apps and platforms.",
    image: "/expert/manas.jpg",
    linkedin: "https://www.linkedin.com/in/manaschouhan/",
    skills: ["Web Development", "UI/UX Design", "App Development"],
  },
];
