"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {

  return (

   <section id="home" className="
      min-h-screen 
      flex 
      flex-col 
      justify-center 
      items-center 
      text-center
      bg-white 
      text-black
      dark:bg-black 
      dark:text-white
      "
    >
<Image
  src="/images/profile-new.jpg"
  alt="Misna profile picture"
  width={200}
  height={200}
  className="rounded-full object-cover mb-8"
/>
      <motion.h1
        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8
        }}

        className="text-5xl font-bold"
      >
        Hi, I'm  Fathima Misna TP 👋
      </motion.h1>


      <motion.p

        initial={{
          opacity: 0,
          y: 30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8,
          delay: 0.2
        }}

        className="mt-4 text-xl"
      >
        Full Stack Flutter Developer
      </motion.p>


      <motion.p

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 0.8,
          delay: 0.4
        }}

        className="mt-6 max-w-xl text-gray-600"
      >
        {/* I build modern applications with Flutter,
        Node.js and web technologies. */}
        I build responsive Flutter applications with clean UI,
REST API integration, and modern state management.
      </motion.p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-10 flex flex-col sm:flex-row gap-4"
>

  {/* View Projects */}

  <a
    href="#projects"
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      px-6
      py-3
      rounded-xl
      bg-blue-600
      text-white
      font-semibold
      hover:bg-blue-700
      transition-all
    "
  >
    View Projects
    <ArrowRight size={18} />
  </a>

  {/* Download Resume */}

  <a
    href="/resume/Fathima_Misna_Resume.pdf"
    download
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      px-6
      py-3
      rounded-xl
      border
      border-blue-600
      text-blue-600
      font-semibold
      hover:bg-blue-600
      hover:text-white
      transition-all
    "
  >
    Download Resume
    <Download size={18} />
  </a>

</motion.div>

    </section>

  );
}