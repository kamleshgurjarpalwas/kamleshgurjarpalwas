export default function ContactPage() {
  return (
    <section className="px-4 py-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Me
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
        Feel free to reach out to me for collaborations, freelance work, or just
        a friendly hello! I&apos;ll get back to you as soon as I can.
      </p>

      <form className="w-full max-w-md space-y-4 text-left">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Your message..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
