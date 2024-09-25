interface InfoPageProps {
    title: string;
    description: string;
}

export function InfoPage({description, title}: InfoPageProps) {
    return (
      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-Ubuntu-Bold)] text-3xl">
          {title}
        </h2>
        <p className="text-zinc-400">
          {description}
        </p>
      </div>
    );
}