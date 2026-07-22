

"use client";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {

  return (
<motion.nav

initial={{
  y: -100,
  opacity: 0
}}

animate={{
  y: 0,
  opacity: 1
}}

transition={{
  duration: 0.6
}}

className="
fixed 
top-0 
left-0 
w-full 
p-6 
flex 
justify-between 
items-center
bg-white
text-black
dark:bg-black
dark:text-white
"
>

      <h1 className="text-2xl font-bold">
        Misna
      </h1>


      <div className="flex gap-6">

        <a href="#">
          Home
        </a>

        <a href="#">
          About
        </a>

        <a href="#">
          Projects
        </a>

        <a href="#">
          Blog
        </a>

        <a href="#">
          Contact
        </a>

<ThemeToggle />

      </div>


   </motion.nav>

  );

}