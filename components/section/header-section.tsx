import Link from "next/link";
import dotenv from "dotenv";

dotenv.config();

type Props = {
  usage: "live" | "pdf";
};

export default function HeaderSection({ usage }: Props) {
  const fullName = process.env.FULL_NAME || 'Kanokpit Yowaratch';
  const email = process.env.EMAIL || 'kanokpit.y@gmail.com';
  const tel = process.env.TEL || '0989552690';
  const telAlt = process.env.TEL_ALT || '098-9552690';
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4 mt-0">Full Stack Developer</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 gap-y-1 text-sm">
        <span className="font-semibold">{fullName}</span>
        <Link
          href={"mailto:" + email}
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          {email}
        </Link>
        <Link
          href={`tel:+66${tel}`}
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          (+66) {telAlt}
        </Link>
      </div>
    </section>
  );
}
