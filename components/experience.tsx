export default function Experience({
  company,
  head1,
  head2,
  head3,
  head4,
  bulletPoints,
}: ExperienceProps) {
  return (
    <section className="mb-3">
      <div className="md:flex justify-between flex-wrap">
        <div className="font-bold">{company}</div>
        <div className="text-sm font-semibold">{head4}</div>
      </div>

      <div className="font-bold text-semiblack">{head1}</div>

      {/* <div className="text-sm font-semibold md:flex justify-between flex-wrap text-zinc-700 dark:text-zinc-300">
        <div className="flex gap-x-4 flex-wrap">
          <div className="font-bold text-black dark:text-white">{head1}</div>
          <div>{head2}</div>
          <div>{head3}</div>
        </div>
      </div> */}

      <ul className="text-sm list-disc ml-4 text-zinc-600 dark:text-zinc-400">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
