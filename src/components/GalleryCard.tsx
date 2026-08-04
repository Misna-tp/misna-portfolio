import Image from "next/image";

type GalleryCardProps = {
  image: string;
  title: string;
};

export default function GalleryCard({
  image,
  title,
}: GalleryCardProps) {
  return (
    <div
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
cursor-pointer
transition-all
duration-300
p-4
"
>
     <div className="flex justify-center pt-6">
  <Image
    src={image}
    alt={title}
    width={170}
    height={340}
    className="rounded-xl"
  />
</div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}