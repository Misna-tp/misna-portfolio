// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// type ProjectCardProps = {
//   image?: string;
//   title: string;
//   technologies: string[];
//   description: string;
//   href: string;
// };

// export default function ProjectCard({
//      image,
//   title,
//   technologies,
//   description,
//   href,
// }: ProjectCardProps) {
//   return (
//     <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true }}
//   className="
//     rounded-2xl
//     border
//     border-gray-200
//     dark:border-gray-700
//     bg-white
//     dark:bg-zinc-900
//     shadow-sm
//     hover:shadow-xl
//     hover:-translate-y-2
//     transition-all
//     duration-300
//     p-6
//   "
// >
//    <div className="flex gap-10 items-start">
// <div className="w-1/4 flex justify-center">
//   {image ? (
//     <Image
//       src={image}
//       alt={title}
//       width={180}
//       height={360}
//       className="rounded-xl"
//     />
//   ) : (
//  <div className="w-[180px] h-[180px] rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 flex flex-col items-center justify-center text-center px-4">
//   <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
//     {title === "Boutique Management System" ? "BOUTIQUE" : "CREW"}
//   </span>

//   <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//     Confidential Project
//   </span>
// </div>
//   )}
// </div>
// <div className="w-3/4">
// <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//           {title}
//         </h3>

//     <div className="mt-4 flex flex-wrap gap-2">
//   {technologies.map((tech) => (
//     <span
//       key={tech}
//       className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
//     >
//       {tech}
//     </span>
//   ))}
// </div>

//         <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
//           {description}
//         </p>
//       <div className="mt-6">
//   <Link
//   href={href}
//   className="
//     mt-6
//     inline-flex
//     items-center
//     gap-2
//     px-5
//     py-2
//     rounded-lg
//     bg-blue-600
//     text-white
//     font-medium
//     hover:bg-blue-700
//     hover:scale-105
//     transition-all
//     duration-300
//   "
// >
//   View Details
//   <ArrowRight size={18} />
// </Link>
// </div>
// </div>    

// </div>
 
        
//     </motion.div>
    
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  image?: string;
  title: string;
  technologies: string[];
  description: string;
  href: string;
};

export default function ProjectCard({
  image,
  title,
  technologies,
  description,
  href,
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
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
        
        {/* Project Image */}
        <div className="w-full md:w-1/4 flex justify-center shrink-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={180}
              height={360}
              className="rounded-xl w-auto max-w-full"
            />
          ) : (
            <div className="w-[180px] h-[180px] rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 flex flex-col items-center justify-center text-center px-4">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {title === "Boutique Management System"
                  ? "BOUTIQUE"
                  : "CREW"}
              </span>

              <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Confidential Project
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="w-full md:w-3/4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  text-sm
                  font-medium
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            {description}
          </p>

          <div className="mt-6">
            <Link
              href={href}
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
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}