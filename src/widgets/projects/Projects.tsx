
import { Computer as Github, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';

export const Projects = () => {
  const { projects } = cvData;
  return (
    <SectionWrapper id="projects" className="bg-slate-50/50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Портфолио"
        title="Проекты"
        description="Избранные работы из моего портфолио"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div key={project.name} className="card card-hover group flex flex-col">
            {/* Header */}
            <div className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-5`} />

            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.emoji}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};