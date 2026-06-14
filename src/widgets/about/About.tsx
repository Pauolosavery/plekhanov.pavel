import { User } from 'lucide-react';
import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';

export const About = () => {
  const { about, personal } = cvData;

  return (
    <SectionWrapper id="about">
      <SectionHeader subtitle="О себе" title="Немного обо мне" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Text */}
        <div className="md:col-span-2 card">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Привет! Я {personal.name.split(' ')[0]} 👋</h3>
          </div>
          <div className="space-y-3">
            {about.split('\n').map((line, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="space-y-4">
          {[
            { emoji: '💼', label: 'Опыт', value: `${personal.yearsOfExperience}+ лет` },
            { emoji: '🚀', label: 'Проектов', value: `${personal.projectsCount}+` },
            { emoji: '🏢', label: 'Компаний', value: personal.companiesCount.toString() },
            { emoji: '📍', label: 'Город', value: personal.location.split(',')[0] },
            { emoji: '🎯', label: 'Формат', value: 'Remote / Hybrid' },
          ].map(({ emoji, label, value }) => (
            <div
              key={label}
              className="card card-hover flex items-center gap-4 p-4"
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};