

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
export default function Navbar() {
const [activeSection, setActiveSection] = useState("home");
const pathname = usePathname();
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);
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
       
      </h1>


      <div className="flex gap-6">

 <a
  href="#home"
  onClick={() => setActiveSection("home")}
  className={activeSection === "home" ? "text-blue-500" : ""}
>
  Home
</a>

  <a
  href="#about"
  onClick={() => setActiveSection("about")}
  className={activeSection === "about" ? "text-blue-500" : ""}
>
  About
</a>
<a
  href="#skills"
  onClick={() => setActiveSection("skills")}
  className={activeSection === "skills" ? "text-blue-500" : ""}
>
  Skills
</a>

        <a
  href="#projects"
  onClick={() => setActiveSection("projects")}
  className={
    activeSection === "projects" ||
    pathname.startsWith("/projects")
      ? "text-blue-500"
      : ""
  }
>
  Projects
</a>

        <a
  href="#blog"
  onClick={() => setActiveSection("blog")}
  className={activeSection === "blog" ? "text-blue-500" : ""}
>
  Blog
</a>

       <a
  href="#contact"
  onClick={() => setActiveSection("contact")}
  className={activeSection === "contact" ? "text-blue-500" : ""}
>
  Contact
</a>

<ThemeToggle />

      </div>


   </motion.nav>

  );

}