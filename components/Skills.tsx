import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    category: "Tools & Others",
    items: ["Git & GitHub", "Postman / Thunder Client", "JWT Authentication", "Python (ML Basics)"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" subtitle="Skills" title="What I Use">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="border rounded-xl bg-white shadow-sm p-5">
            <h3 className="font-semibold text-sm text-slate-800">{group.category}</h3>
            <ul className="mt-3 text-sm text-slate-600 space-y-1.5">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
