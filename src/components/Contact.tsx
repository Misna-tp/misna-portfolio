
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <p className="mt-6 text-center text-lg text-gray-600 dark:text-gray-300">
          Interested in working together? Feel free to reach out through the information below.
        </p>

      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

  {/* Left Side */}

<div>
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
    Let's Connect
  </h3>

  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
    I'm always interested in discussing Flutter development,
    full-stack application development, and exciting new opportunities.
    Feel free to reach out!
  </p>

  <div className="mt-10 space-y-6">

    {/* Email */}

    <div className="flex items-center gap-4">
      <Mail className="text-blue-600" />

      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Email
        </h4>

        <a
  href="mailto:fathimamisnatp@gmail.com"
  className="text-blue-600 hover:underline"
>
  fathimamisnatp@gmail.com
</a>
      </div>
    </div>

    {/* Location */}

    <div className="flex items-center gap-4">
      <MapPin className="text-blue-600" />

      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Location
        </h4>

        <a
  href="https://maps.google.com/?q=Malappuram,Kerala"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Malappuram, Kerala, India
</a>
      </div>
    </div>

    {/* GitHub */}

    <div className="flex items-center gap-4">
      <FaGithub className="text-blue-600 text-xl" />

      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          GitHub
        </h4>

       <a
  href="https://github.com/Misna-tp"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  github.com/Misna-tp
</a>
      </div>
    </div>

    {/* LinkedIn */}

    <div className="flex items-center gap-4">
      <FaLinkedin className="text-blue-600 text-xl" />

      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          LinkedIn
        </h4>

       <a
  href="https://www.linkedin.com/in/fathima-misnatp"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  linkedin.com/in/fathima-misnatp
</a>
      </div>
    </div>

  </div>
</div>

  {/* Right Side */}

<div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">

  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
    Send Me a Message
  </h3>

  <form className="mt-8 space-y-6">

    <div>
      <label className="block mb-2 text-gray-700 dark:text-gray-300">
        Name
      </label>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block mb-2 text-gray-700 dark:text-gray-300">
        Email
      </label>

      <input
        type="email"
        placeholder="your@email.com"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block mb-2 text-gray-700 dark:text-gray-300">
        Message
      </label>

      <textarea
        rows={5}
        placeholder="Write your message..."
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
    >
      Send Message
    </button>

  </form>

</div>

</div>
    </section>
  );
}