import Section from "./section";
import Experience from "@/components/experience";

const exp: ExperienceProps[] = [
  {
    // company: "Magma Tech Solution Co., Ltd",
    // head1: "Full Stack Developer (Contract)",
    company: "Freelance Remote, WFH",
    head1: "Full Stack Developer",
    head4: "Apr 2020 - Present",
    bulletPoints: [
      "Designed scalable RESTful APIs with NestJS, Node.js, Express.js",
      "Use Sequelize ORM for Ouery data and convert PL/SQL in Oracle to SQL programming",
      "Use Prisma ORM for Ouery data in PostgreSQL",
      "Use TypeORM for Ouery data in MySQL",
      "Design and implement database with MySQL, PostgreSQL, MongoDB",
      "Use Ant Design, Material UI, Tailwind CSS for UX/UI design",
      "Write unit testing for backend and shared libraries with Jest",
      "Use Joi as a main validation in Node.js and Express.js",
      "Use Yup as a main validation in Next.js and React",
      "Receive and analyze the feasibility of the requirement from user and estimate the end date",
      "Refactored legacy codebases to modern stacks, improving maintainability and performance",
      "Build CI/CD pipelines in development process and deploy to AWS EC2 and DigitalOcean",
      "Edit design in Photoshop and convert PSD to HTML",
    ],
  },
  {
    company: "LSEG (London Stock Exchange Group)",
    head1: "Software Engineer",
    head4: "Apr 2021 - Nov 2023",
    bulletPoints: [
      "Developed client-side application with Angular, Office JavaScript API",
      "Built unit testing for client-side application with Jasmine, Karma, Web Test Runner",
      "Give precedence to Code Quality and Clean Code concept in development",
      "Set targeted and improved unit test coverage application in each quarter",
      "Analyzed impact of code from SonarQube reported",
      "Developed CI/CD script on GitLab pipeline",
      "Used Agile technology as the main for development",
      "Communicate and collaborate with the designer team with Figma tool",
      // "Shared knowledge with team",
    ],
  },
  {
    company: "Skuberg Co.,Ltd.",
    head1: "Frontend Developer",
    head4: "Apr 2017 - Mar 2020",
    bulletPoints: [
      "Developed websites with Angular, WordPress, Laravel, HTML, CSS, SASS, JavaScript, jQuery",
      "Developed mobile application with Ionic",
      "Use Trello to manage tasks",
    ],
  },
  {
    company: "Thai Travel Info Service",
    head1: "IT Programmer",
    head4: "Sep 2014 - Sep 2016",
    bulletPoints: [
      "Developed websites by using PHP, Laravel, jQuery, CSS",
      "Design and query data from database by using SQL with MySQL",
      "Support and develop ERP system",
      // "Design HTML and website template according to user's requirement.",
      "Maintained and improved websites",
    ],
  },
  // {
  //   company: "Alpha Founders",
  //   head1: "Programmer",
  //   head4: "May 2013 - Apr 2014",
  //   bulletPoints: [
  //     "Created and developed websites with Laravel, WordPress.",
  //     "Designed database with MySQL.",
  //   ],
  // },
  {
    company: "Bizidea Ltd.,",
    head1: "Programmer",
    head4: "May 2012 - Jan 2013",
    bulletPoints: [
      "Created and developed websites with PHP, HTML, CSS, CodeIgniter, OpenCart CMS, WordPress, jQuery",
      "Use Ajax technology to help improve the functionality of the website",
      "Designed database with MySQL",
    ],
  },
  {
    company: "AAPICO Hitech Public Company Limited",
    head1: "IT Programmer",
    head4: "Jan 2011 - Apr 2012",
    bulletPoints: [
      "Support Intranet Application by using PHP",
      "Update and develop my website by using PHP, HTML, CSS, jQuery, JavaScript",
      "Designed database with MySQL",
    ],
  },
];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
