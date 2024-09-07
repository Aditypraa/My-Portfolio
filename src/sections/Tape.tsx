import StarIcon from "@/assets/icons/star.svg";

const roles = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Software Engineering",
  "Software Development",
  "Cloud Computing",
  "IT Support Specialist",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:liniear-gradient(to_right,transparent, black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {roles.map((role) => (
              <div key={role} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {role}
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
