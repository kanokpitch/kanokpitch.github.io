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
          {/* {process.env.PROGRAMMING} */}
          JavaScript, PHP, HTML, CSS, SQL, PL/SQL
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Frameworks</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {/* {process.env.FRAMEWORK} */}
          Node.js, Express.js, NestJS, Next.js, React, Angular, Laravel
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">CSS Frameworks</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {/* {process.env.CSS_FRAMEWORK} */}
          Material UI, Tailwind CSS, Ant Design, Bootstrap
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Databases</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {/* {process.env.DATABASE} */}
          MySQL, PostgreSQL, MongoDB, Oracle, Firebase
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">DevOps & Cloud</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {/* {process.env.DEVOPSCLOUD} */}
          Gitlab CI/CD, Linux cmd, Docker, NGINX, AWS EC2, DigitalOcean
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Tools</span>:
        </div>
        <div className="ml-4 text-zinc-700 dark:text-zinc-300">
          {/* {process.env.TOOLS} */}
          JIRA, Postman, Docker, Git, Figma, Draw.io
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
