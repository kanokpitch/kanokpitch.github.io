import Section from "./section";

const education: EducationProps[] = [
  {
    title: "Bachelor of Engineering, Computer Engineering",
    gpa: "GPA: 3.10",
    university: "Suranaree University of Technolog",
    time: "2006 - 2009",
  },
];

function Education({ title, gpa, university, time }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className="md:block">
        <div className="text-sm font-semibold flex flex-wrap justify-between text-zinc-700 dark:text-zinc-300">
          <div className="flex gap-x-4 flex-wrap">
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
            {gpa}
          </div>
          <span>{time}</span>
        </div>
        {university}
      </div>
    </section>
  );
}

export default function EducationSection() {
  return (
    <Section title="EDUCATION">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
