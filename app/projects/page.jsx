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
    <section className="px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-md shadow-md p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
