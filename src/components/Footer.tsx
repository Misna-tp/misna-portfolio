import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left Side */}
          <div className="text-center md:text-left">
           <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Fathima Misna
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Flutter Full-Stack Developer
            </p>

            <p className="mt-4 text-sm text-gray-500">
              © 2026 Fathima Misna. All rights reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">

  <a
    href="https://github.com/Misna-tp"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FaGithub size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/fathima-misnatp"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FaLinkedin size={24} />
  </a>

  <a
    href="mailto:fathimamisnatp@gmail.com"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <Mail size={24} />
  </a>

</div>

        </div>

      </div>
    </footer>
  );
}