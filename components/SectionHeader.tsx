interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-white/70">{subtitle}</p> : null}
    </div>
  );
}
