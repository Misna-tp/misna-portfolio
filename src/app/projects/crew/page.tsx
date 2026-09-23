import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalleryCard from "@/components/GalleryCard";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew | Fathima Misna",
 description:
  "A cross-platform Flutter application developed for event and staff management workflows.",
};
// const gallery = [
//   {
//     title: "Login",
//     image: "/images/crew/login.png",
//   },
//   {
//     title: "Dashboard",
//     image: "/images/crew/dashboard.png",
//   },
//   {
//     title: "Staff List",
//     image: "/images/crew/staff-list.png",
//   },
//   {
//     title: "Shift Management",
//     image: "/images/crew/shift.png",
//   },
//   {
//     title: "Organization Profile",
//     image: "/images/crew/organization-profile.png",
//   },
//   {
//     title: "Organizers",
//     image: "/images/crew/organizers.png",
//   },
//   {
//     title: "Earnings",
//     image: "/images/crew/earning.png",
//   },
// ];
const technologies = [
  "Flutter",
  "Dart",
  "Riverpod",
  "GoRouter",
  "Google Maps",
  "Geolocator",
  "Razorpay",
  "Mobile Scanner",
  "QR Flutter",
  "Flutter Secure Storage",
  "Shared Preferences",
];
export default function CrewProjectPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6 pt-8">
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
    >
      <ArrowLeft size={18} />
      Back to Projects
    </Link>
  </div>
<div className="max-w-6xl mx-auto px-6 py-20">
<h1 className="text-5xl font-bold text-gray-900 dark:text-white">
 Crew
</h1>
<p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
  Crew is a cross-platform Flutter application developed for
event and staff management workflows.
</p>
<div className="mt-12 flex justify-center">
  <div className="w-[220px] h-[300px] rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-900 flex flex-col items-center justify-center text-center px-6 shadow-xl">
    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
      CREW
    </span>

    <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
      Confidential Project
    </span>
  </div>
</div>
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
  Crew
  </h2>

<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
Crew is a Flutter-based application developed to support
event and staff management workflows through a centralized mobile platform.
</p>
  
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    My Role
  </h2>

<div className="mt-8 space-y-4 text-lg text-gray-600 dark:text-gray-300">
  <p>• Developed Flutter UI screens for the application.</p>

  <p>• Implemented responsive interfaces for different user workflows.</p>

  <p>• Integrated REST APIs and application services.</p>

  <p>• Worked with Riverpod for application state management.</p>

  <p>• Implemented event, staff, and equipment management interfaces.</p>

  {/* <p>• Worked with QR scanning, maps, notifications, and payment-related features.</p> */}
</div>
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />

  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Technologies Used
  </h2>

  <div className="mt-8 flex flex-wrap gap-3">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="
          px-4
          py-2
          rounded-full
          bg-blue-100
          text-blue-700
          dark:bg-blue-900/30
          dark:text-blue-300
          font-medium
        "
      >
        {tech}
      </span>
    ))}
  </div>

<hr className="my-20 border-gray-200 dark:border-gray-700" />

<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Project Highlights
  </h2>

  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-8">
    Due to project confidentiality, source code, screenshots, repositories,
    and proprietary project materials are not publicly displayed.
  </p>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Flutter Development
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Developed responsive Flutter interfaces for multiple application workflows.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        API Integration
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Integrated REST APIs and application services provided by the backend team.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        State Management
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Worked with Riverpod to manage application state and data-driven workflows.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Responsive UI
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Implemented responsive interfaces for different application workflows and screen sizes.
      </p>
    </div>

  </div>
</section>
{/* <hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Application Gallery
  </h2>

  <p className="mt-4 text-gray-600 dark:text-gray-300">
    Screens from the Flutter application demonstrating key features and user interface design.
  </p>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{gallery.map((screen) => (
  <GalleryCard
    key={screen.title}
    image={screen.image}
    title={screen.title}
  />
))}

</div> */}

{/* </section> */}
</div>
    </main>
  );
}
