import { MapPin, CheckCircle2 } from 'lucide-react';
import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';

export const Experience = () => {
  const { experience } = cvData;
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        subtitle="Карьера"
        title="Опыт работы"
        description="Мой профессиональный путь в разработке"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-transparent dark:from-primary-600 dark:via-primary-800 hidden sm:block" />

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div key={idx} className="relative sm:pl-16">
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-2xl gradient-bg items-center justify-center shadow-md z-10">
                <span className="text-white text-lg font-bold">{job.company[0]}</span>
              </div>

              <div className="card card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
                          Сейчас
                        </span>
                      )}
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium">{job.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={15} className="text-accent-500 mt-0.5 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};