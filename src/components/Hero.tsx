"use client";

import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section
      className="
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
        Hi, I'm Misna 👋
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
        Full Stack Developer
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