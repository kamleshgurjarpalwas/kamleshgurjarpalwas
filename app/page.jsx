export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Hi, I&apos;m{" "}
        <span className="text-blue-600 dark:text-blue-400">Kamlesh</span>
      </h1>

      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        A passionate full-stack web developer with experience in building modern
        web applications using
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          React
        </span>
        ,
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          Next.js
        </span>
        , and
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          Tailwind CSS
        </span>
        .
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/projects"
          className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 rounded-md border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
