import GalleryCard from "@/components/GalleryCard";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Management App| Fathima Misna",
  description:
    "A Flutter application developed to help users organize and manage their personal book collection. The app includes secure authentication, book management, and REST API integration using the MVC architecture.",
};
const gallery = [
  {
    title: "Login Screen",
    image: "/images/book-management/login.png",
  },
  {
    title: "Register Screen",
    image: "/images/book-management/register.png",
  },
  {
    title: "Book List",
    image: "/images/book-management/book-list.png",
  },
  {
    title: "Add Book",
    image: "/images/book-management/add-book.png",
  },
  {
    title: "Edit Book",
    image: "/images/book-management/edit-book.png",
  },
  {
    title: "Delete Book",
    image: "/images/book-management/delete-book.png",
  },
];
const technologies = [
  "Flutter",
  "Dart",
  "Provider",
  "REST API",
  "Node.js",
  "MySQL",
  "Git",
];
export default function BookManagementProjectPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
<div className="max-w-6xl mx-auto px-6 py-20">
<h1 className="text-5xl font-bold text-gray-900 dark:text-white">
  Book Management App
</h1>
<p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
  A Flutter application designed to manage books through secure authentication and CRUD operations. The application provides an intuitive interface for users to add, update, delete, and organize books while communicating with a backend using REST APIs.
</p>
<div className="mt-12 flex justify-center">
  <Image
    src="/images/book-management/login.png"
    alt="Book Management App - Login"
    width={220}
    height={450}
    className="rounded-2xl shadow-xl max-h-[450px] w-auto"
  />
</div>
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    Project Overview
  </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
    Book Management App is a Flutter application developed to simplify book management. Users can securely log in, maintain their personal book collection, and perform CRUD operations through a clean and responsive user interface. The application communicates with backend REST APIs to store and retrieve data efficiently.
  </p>
  
</section>
<hr className="my-20 border-gray-200 dark:border-gray-700" />
<section className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
    My Role
  </h2>

<div className="mt-8 space-y-4 text-lg text-gray-600 dark:text-gray-300">
  <p>• Developed the Flutter frontend for the application.</p>

  <p>• Built responsive UI screens for login, registration, and book management.</p>

  <p>• Integrated REST APIs for authentication and CRUD operations.</p>

  <p>• Implemented book creation, update, deletion, and listing features.</p>

  <p>• Worked with Provider for state management.</p>
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
      Secure login and user authentication using backend REST APIs.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
      User Registration
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      New users can create accounts through a responsive registration screen.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
      Book Management
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Add, edit, delete, and browse books through an intuitive Flutter interface.
    </p>
  </div>

  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
      REST API Integration
    </h3>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Connected Flutter screens with backend APIs to manage book data efficiently.
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