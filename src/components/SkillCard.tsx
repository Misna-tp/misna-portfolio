
import { ReactNode } from "react";

type SkillCardProps = {
  name: string;
  icon: ReactNode;
};

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div
     className="
  w-36
  h-36
  rounded-xl
  border
  border-gray-300
  dark:border-gray-700
  bg-white
  dark:bg-zinc-900
  shadow-sm
  hover:shadow-xl
  hover:-translate-y-2
  transition-all
  duration-300
  flex
  flex-col
  items-center
  justify-center
"
    >
  <div className="text-6xl">
  {icon}
</div>

     <h4 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
  {name}
</h4>
    </div>
  );
}