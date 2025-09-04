import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Associate Consultant",
      company: "Infosys",
      period: "Feb 2025 – Present",
      description:
        "Developed and maintained risk assessment and data management tools for major banking clients, ensuring compliance, security, and efficiency. Built scalable microservices and secure REST APIs with React, TypeScript, and Spring Boot, gained good exposure to CI/CD pipelines, containerization, and code quality practices to deliver high-performance solutions.",
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      period: "July 2021 – Jan 2025",
      description:
        "Implemented 20+ production-grade REST APIs, optimized performance with caching and database tuning, and integrated multiple payment gateways. I also built responsive React + Redux interfaces, deployed cloud solutions on AWS, and ensured quality through automated testing and CI/CD pipelines.",
    },
    {
      role: "Intern",
      company: "CargoFL",
      period: "Jan 2021 – July 2021",
      description:
        "Contributed to frontend modules, assisted in debugging, and gained hands-on experience in real-world logistics solutions.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Experiences</h2>
        <div className="relative border-l-2 border-gray-200 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full ring-8 ring-white">
                <Briefcase className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}
              </h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
