import { GraduationCap, BookOpen, Globe, Heart } from 'lucide-react';
import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';

export const Education = () => {
  const { education, courses, languages, interests } = cvData;
  return (
    <SectionWrapper id="education">
      <SectionHeader
        subtitle="Образование"
        title="Образование и развитие"
        description="Академическая база и непрерывное самообразование"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education */}
        <div className="card">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <GraduationCap size={16} className="text-primary-500" />
            Высшее образование
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
                <p className="font-bold text-slate-900 dark:text-white text-sm">{edu.institution}</p>
                <p className="text-primary-600 dark:text-primary-400 text-xs font-medium mt-0.5">{edu.degree}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{edu.period}</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="card">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <BookOpen size={16} className="text-primary-500" />
            Курсы и сертификаты
          </h3>
          <div className="space-y-3">
            {courses.map((course, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{course.year.slice(-2)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{course.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{course.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="card">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <Globe size={16} className="text-primary-500" />
            Языки
          </h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{lang.name}</span>
                <span className="tag">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="card">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <Heart size={16} className="text-primary-500" />
            Интересы
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-100 dark:border-slate-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};