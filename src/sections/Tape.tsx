import StarIcon from "@/assets/icons/star.svg";

const skills = [
  "React.Js",
  "Next.Js",
  "TailwindCSS",
  "Node.Js",
  "Express.Js",
  "MongoDB",
  "Firebase",
  "REST API",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "GitLab",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:liniear-gradient(to_right,transparent, black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {skills.map((skill) => (
              <div key={skill} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {skill}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
