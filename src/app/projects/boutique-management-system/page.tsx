import GalleryCard from "@/components/GalleryCard";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boutique Management System | Fathima Misna",
  description:
    "Flutter frontend project featuring responsive UI, Riverpod state management, and REST API integration.",
};
// const gallery = [
//   {
//     title: "Login Screen",
//     image: "/images/login.png",
//   },
//   {
//     title: "Orders",
//     image: "/images/orders.png",
//   },
//   {
//     title: "Payroll",
//     image: "/images/payroll.png",
//   },
//   {
//     title: "Expense",
//     image: "/images/expense.png",
//   },
//   {
//     title: "Fabrics",
//     image: "/images/fabrics.png",
//   },
// ];
const technologies = [
  "Flutter",
  "Dart",
  "Riverpod",
  "REST API",
  "Git",
  "GitHub",
];
export default function BoutiqueProjectPage() {
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
  Boutique Management System
</h1>
<p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
  A Flutter-based boutique management application focused on customer management,
  order processing, payroll, expenses, invoice generation, and responsive user
  interfaces.
</p>
{/* <div className="mt-12 flex justify-center">
  <Image
    src="/images/boutique-dashboard.png"
    alt="Boutique Dashboard"
    width={220}
    height={450}
    className="rounded-2xl shadow-xl max-h-[450px] w-auto"
  />
</div> */}
<div className="mt-12 flex justify-center">
  <div className="w-[220px] h-[300px] rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-900 flex flex-col items-center justify-center text-center px-6 shadow-xl">
    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
      BOUTIQUE
    </span>

    <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
      Confidential Project
    </span>
  </div>
</div>
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Project Overview
  </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
    Boutique Management System is a Flutter application developed to simplify
    the daily operations of a boutique. The application helps manage customers,
    orders, payroll, expenses, and invoices through a clean and responsive user
    interface. It communicates with backend APIs to keep business data organized
    and up to date.
  </p>
  
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    My Role
  </h2>

  <div className="mt-8 space-y-4 text-lg text-gray-600 dark:text-gray-300">
    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
  As the Flutter Frontend Developer, I was responsible for developing responsive
  user interfaces, integrating REST APIs provided by the backend team, managing
  application state with Riverpod, and implementing features including
  authentication, dashboard, orders, payroll, expenses, invoices, and staff
  management. I collaborated with the backend team to deliver a smooth and
  consistent user experience.
</p>
  </div>
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
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
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Key Features
  </h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Authentication
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Secure login and authentication flow with API integration.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Dashboard
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Business overview with revenue, orders, and payment summaries.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Order Management
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Browse, search, and manage customer orders through responsive screens.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Payroll & Expenses
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Staff payroll and expense management integrated with backend APIs.
      </p>
    </div>
  </div>
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />

<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Project Highlights
  </h2>

  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-8">
    Due to project confidentiality, application screenshots cannot be
    publicly displayed. The project details below describe the functionality
    and technologies I worked with.
  </p>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Customer Management
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Developed interfaces for managing customer information and related
        business workflows.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Order Management
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Implemented order-related screens and workflows for viewing and
        managing customer orders.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Payroll & Expenses
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Built interfaces for payroll and expense management and integrated
        them with backend APIs.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        Invoice Management
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Implemented invoice-related functionality as part of the boutique
        management workflow.
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

</div>

</section> */}
</div>
    </main>
  );
}