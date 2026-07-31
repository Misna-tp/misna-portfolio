import SkillCard from "./SkillCard";
import { SiFlutter, SiDart, SiJavascript, SiMysql, SiExpress, SiNodedotjs, SiGit, SiGithub, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
export default function Skills() {
  return (
   <section
  id="skills"
  className="min-h-screen py-20 bg-white dark:bg-black"
>
  <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
        My Skills
      </h2>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-16 mb-8">
  Frontend Development
</h3>
 <div className="flex flex-wrap gap-6">
  <SkillCard
  name="Flutter"
  icon={<SiFlutter className="text-sky-500" />}
/>

<SkillCard
  name="Dart"
  icon={<SiDart className="text-sky-500" />}
/>
<SkillCard
  name="JavaScript"
   icon={<SiJavascript className="text-yellow-400" />}
/>

  </div>
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-16 mb-8">
  Backend Development
</h3>
<div className="flex flex-wrap gap-6">
  <SkillCard
    name="Node.js"
    icon={<SiNodedotjs className="text-green-600" />}
  />

  <SkillCard
    name="Express.js"
    icon={
    <SiExpress className="text-gray-800 dark:text-gray-200" />
  }
  />

  <SkillCard
    name="MySQL"
     icon={<SiMysql className="text-blue-700" />}
  />
</div>
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-16 mb-8">
  Tools & Technologies
</h3>
<div className="flex flex-wrap gap-6">
    <SkillCard
  name="Git"
icon={<SiGit className="text-orange-600" />}

/>
<SkillCard
  name="GitHub"
   icon={
    <SiGithub className="text-black dark:text-white" />
  }
/>
<SkillCard
  name="Postman"
    icon={<SiPostman className="text-orange-500" />}
/>
<SkillCard
  name="VS Code"
  icon={<VscVscode className="text-blue-500" />}
/>
</div>
</div>
    </section>
  );
}