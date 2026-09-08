import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-black"
    >
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
  My Projects
</h2>
<p className="text-center text-gray-600 dark:text-gray-400 mb-12">
  A selection of projects that showcase my Flutter development skills and experience.
</p>
<div className="space-y-12">

  <ProjectCard
    // image="/images/boutique-dashboard.png"
    title="Boutique Management System"
    technologies={[
      "Flutter",
      "Dart",
      "Riverpod",
      "REST API",
    ]}
    description="Developed the Flutter frontend for a boutique management application..."
    href="/projects/boutique-management-system"
  />

  <ProjectCard
    image="/images/book-management/login.png"
    title="Book Management App"
    technologies={[
      "Flutter",
      "Dart",
      "Provider",
      "Node.js",
      "REST API",
    ]}
    description="A Flutter application that allows users to securely manage their book collection with authentication, CRUD operations, and REST API integration."
    href="/projects/book-management-app"
  />
<ProjectCard
  image="/images/taskflow/dashboard.png"
  title="TaskFlow"
  technologies={[
    "Flutter",
    "Riverpod",
    "Dio",
    "Hive",
    "Flutter ScreenUtil",
  ]}
  description="A modern Flutter application for task and project management featuring authentication, team collaboration, notifications, and responsive UI."
  href="/projects/taskflow"
/>
<ProjectCard
  // image="/images/crew/dashboard.png"
  title="Crew"
  technologies={[
    "Flutter",
    "Dart",
    "Riverpod",
    "GoRouter",
    "Google Maps",
    "Razorpay",
  ]}
  description="A cross-platform event and staff management application for organizing events, allocating staff and equipment, managing check-ins, invoicing, and payments."
  href="/projects/crew"
/>
</div>
</div>
    </section>
  );
}