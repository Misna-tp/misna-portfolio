"use client";
import Image from "next/image";
import { motion } from "framer-motion";


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
        I build modern applications with Flutter,
        Node.js and web technologies.
      </motion.p>


    </section>

  );
}