import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';
import { useIntersection } from '../../shared/lib/useIntersection';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar = ({ name, level, delay = 0 }: SkillBarProps) => {
  const { ref, isVisible } = useIntersection(0.1);
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDuration: '1000ms',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
  <div className="card">
    <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((s, i) => (
        <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 100} />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const { skills } = cvData;
  return (
    <SectionWrapper id="skills" className="bg-slate-50/50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Технологии"
        title="Стек и навыки"
        description="Инструменты и технологии, с которыми я работаю ежедневно"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SkillGroup title="Основной стек" skills={skills.core} />
        <SkillGroup title="State Management" skills={skills.state} />
        <SkillGroup title="UI / Стили" skills={skills.ui} />
        <SkillGroup title="Инструменты" skills={skills.tools} />
      </div>
    </SectionWrapper>
  );
};