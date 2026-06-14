interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ subtitle, title, description }: Props) => (
  <div className="mb-12 text-center">
    <p className="section-subtitle">{subtitle}</p>
    <h2 className="section-title">{title}</h2>
    {description && (
      <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
        {description}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
  </div>
);