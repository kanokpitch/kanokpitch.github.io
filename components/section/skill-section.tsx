import Section from "./section";
import dotenv from "dotenv";

dotenv.config();

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>
          <span>:</span>
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.PROGRAMMING}
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Frameworks</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.FRAMEWORK}
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">CSS Frameworks</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.CSS_FRAMEWORK}
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Databases</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.DATABASE}
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">DevOps & Cloud</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.DEVOPSCLOUD}
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Tools</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.TOOLS}
        </div>
      </div>
      {/* <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Techniques</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {process.env.TECHNIQUE}
        </div>
      </div> */}
    </Section>
  );
}
