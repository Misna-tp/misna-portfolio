"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
type ProjectCardProps = {
     image: string;
  title: string;
  technologies: string[];
  description: string;
};

export default function ProjectCard({
     image,
  title,
  technologies,
  description,
}: ProjectCardProps) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="
    rounded-2xl
    border
    border-gray-200
    dark:border-gray-700
    bg-white
    dark:bg-zinc-900
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-2
    transition-all
    duration-300
    p-6
  "
>
   <div className="flex gap-10 items-start">
<div className="w-1/4 flex justify-center">
  <Image
    src={image}
    alt={title}
    width={180}
    height={360}
    className="rounded-xl"
  />
</div>  
<div className="w-3/4">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

    <div className="mt-4 flex flex-wrap gap-2">
  {technologies.map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
    >
      {tech}
    </span>
  ))}
</div>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          {description}
        </p>
      <div className="mt-6">
  <button
    className="
      inline-flex
      items-center
      gap-2
      px-5
      py-2
      rounded-lg
      bg-blue-600
      text-white
      font-medium
      hover:bg-blue-700
      hover:scale-105
      transition-all
      duration-300
    "
  >
    View Details
    <ArrowRight size={18} />
  </button>
</div>
</div>    

</div>
 
        
    </motion.div>
    
  );
}