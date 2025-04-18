"use client";

const projects = [
  {
    title: "College Counselling System",
    description:
      "A platform where students can register, select preferences, and get seat allotments based on merit.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio website built with Next.js, Tailwind CSS, and ShadCN.",
    link: "#",
  },
  {
    title: "Authentication App",
    description:
      "Secure login/signup app with JWT, MongoDB, and role-based access control.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        🚧 My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/60 dark:bg-gray-800/10 backdrop-blur-lg shadow-sm p-6 rounded-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
