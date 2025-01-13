import Section from "./section";
import Project from "@/components/project";
import LabelWithGraphic from "@/components/label-with-graphic";
// import { Icons } from "@/components/icons";
import Link from "next/link";
import { type ImageProps } from "next/image";
import { headers } from "next/headers";

type ProjectTitleProps = {
  title: string;
  link: string;
};

function ProjectTitle({ title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic content={title} />
      {/* <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      /> */}
    </Link>
  );
}

export default async function ProjectSection() {
  const project: ProjectProps[] = [
    {
      head1: (
        <ProjectTitle
          title="RESTful APIs"
          link="https://kanokpit.com/"
        />
      ),
      head2: (
        <LabelWithGraphic content="NestJS" />
        // icon={Icons.Stack}
      ),
      head3: "Features",
      bulletPoints: [
        "E-Commerce API",
        "Blog API",
        "Webboard API",
        "Upload API",
        "Authenticate API",
      ],
    },
    {
      head1: (
        <ProjectTitle
          title="E-Commerce Client"
          link="https://free-api.asia/"
        />
      ),
      head2: (
        <LabelWithGraphic content="Next.js, TypeScript, Material UI" />
        // icon={Icons.Stack}
      ),
      head3: "Features",
      bulletPoints: [
        "Product list on home page, product detail page",
        "Search product",
        "Add to cart and Buy now on home page and product details page",
        "Add to cart, Buy now and Checkout for Logged in User level",
        "Support Cash on delivery payment method",
        "Back-end system to managing products carts orders and users for Admin and Store level",
        "Database structure and Data Dictionary",
      ],
    },
    // {
    //   head1: (
    //     <ProjectTitle
    //       title="Webboard"
    //       link="https://nextjs-webboard-client.vercel.app/"
    //     />
    //   ),
    //   head2: <LabelWithGraphic content="HTML, CSS" />,
    //   // icon={Icons.Stack}
    //   head3: "Features",
    //   bulletPoints: [
    //     "Supported user to create their resume with React, and easily export it as pdf (like this resume)",
    //     "Enhanced resume with React, featuring responsive/interactive design, dark mode, showing real-time API data, and even integrating GPT etc.",
    //   ],
    // },
    {
      head1: (
        <ProjectTitle
          title="Blog + Webboard"
          link="https://suaipisuai.com/"
        />
      ),
      head2: <LabelWithGraphic content="Next.js, Prisma, TypeScript, Tailwind CSS" />,
      // icon={Icons.Stack}
      head3: "Features",
      bulletPoints: [
        "Show post list 10 items on the home page",
        "Post detail page",
        "News page",
        "Webboard page",
        "Algorithm page",
      ],
    },
    // "Developed Inquiry system with Express.js and Next.js",
    {
      head1: (
        <ProjectTitle
          title="Image file storage system"
          link="https://nextjs-upload-file-five.vercel.app/file-manager"
        />
      ),
      head2: <LabelWithGraphic content="NestJS, Next.js, TypeScript, Material UI" />,
      // icon={Icons.Stack}
      head3: "Features",
      bulletPoints: [
        "Show and delete photo in public access level",
        "Upload photo",
      ],
    },
  ];

  return (
    <Section title="PROJECTS">
      <div className="flex flex-col gap-y-1">
        {project.map((e, index) => (
          <Project key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
