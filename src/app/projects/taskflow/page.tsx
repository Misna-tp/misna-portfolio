import GalleryCard from "@/components/GalleryCard";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskFlow| Fathima Misna",
  description:
    "TaskFlow is a modern, responsive, and robust task and project management application built with Flutter. It helps users organize projects, manage tasks, collaborate with teams, and stay productive through an intuitive and responsive interface.",
};
const gallery = [
  {
    title: "Login Screen",
    image: "/images/taskflow/login.png",
  },
  {
    title: "Dashboard",
    image: "/images/taskflow/dashboard.png",
  },
  {
    title: "Project List",
    image: "/images/taskflow/project-list.png",
  },
  {
    title: "Task List",
    image: "/images/taskflow/task-list.png",
  },
  {
    title: "Create Task",
    image: "/images/taskflow/create-task.png",
  },
  {
    title: "Users List",
    image: "/images/taskflow/users-list.png",
  },
  {
    title: "Create User",
    image: "/images/taskflow/create-user.png",
  },
];
const technologies = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Dio",
  "Hive",
  "Flutter Secure Storage",
  "Flutter ScreenUtil",
  "App Links",
];
export default function TaskFlowProjectPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
<div className="max-w-6xl mx-auto px-6 py-20">
<h1 className="text-5xl font-bold text-gray-900 dark:text-white">
 Taskflow
</h1>
<p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
  A Flutter application designed to manage tasks and projects through secure authentication and CRUD operations. The application provides an intuitive interface for users to add, update, delete, and organize tasks while communicating with a backend using REST APIs.
</p>
<div className="mt-12 flex justify-center">
  <Image
    src="/images/taskflow/login.png"
    alt="TaskFlow - Login"
    width={220}
    height={450}
    className="rounded-2xl shadow-xl max-h-[450px] w-auto"
  />
</div>
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    TaskFlow
  </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
TaskFlow is a modern, responsive, and robust task and project management application built with Flutter. It helps users organize projects, manage tasks, collaborate with teams, and stay productive through an intuitive and responsive interface.
  </p>
  
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    My Role
  </h2>

<div className="mt-8 space-y-4 text-lg text-gray-600 dark:text-gray-300">
  <p>• Developed the Flutter frontend for the application.</p>

  <p>• Built responsive UI screens for projects, tasks, notifications, profile, and settings.</p>

  <p>• Integrated REST APIs using Dio.</p>

  <p>• Implemented Riverpod for scalable state management.</p>

  <p>• Developed authentication and password recovery flows.</p>
  
  <p>• Implemented responsive layouts using Flutter ScreenUtil.</p>
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
      User Authentication
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
Secure login and password recovery with deep linking support.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
      Responsive UI & Dark Mode
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
Responsive layouts with light and dark themes that adapt across devices.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
   Task & Project Management
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
    Create, organize, and manage projects and tasks from a centralized dashboard.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
    Team Collaboration
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
  Manage users, assign work, and collaborate efficiently across projects.
    </p>
  </div>

</div>
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
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

</section>
</div>
    </main>
  );
}
