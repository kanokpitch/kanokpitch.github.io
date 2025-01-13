export default function Project({
  head1,
  head2,
  head3,
  bulletPoints,
}: ProjectProps) {
  return (
    <section className="mb-4">
      <div className="text-sm font-semibold md:flex justify-between flex-wrap text-zinc-700 dark:text-zinc-300">
        <div className="flex gap-x-4 flex-wrap">
          <div className="font-bold text-black">{head1}</div>
          <div>{head2}</div>
        </div>
      </div>
      <div className="text-sm font-semibold md:flex justify-between flex-wrap text-zinc-700 dark:text-zinc-300">
        <div className="font-bold">{head3}</div>
      </div>
      <ul className="text-sm list-disc ml-4 text-zinc-600 dark:text-zinc-400">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
