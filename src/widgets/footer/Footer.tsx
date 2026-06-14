import { Heart, Code2 } from 'lucide-react';
import { cvData } from '../../shared/config/cv-data';

export const Footer = () => {
  const { personal } = cvData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <Code2 size={16} className="text-primary-500" />
            <span>
              © {year}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-300">{personal.name}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
            <span>Сделано с</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>на</span>
            <span className="font-semibold text-primary-600 dark:text-primary-400">React + Vite + Tailwind</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            <span>FSD архитектура</span>
          </div>
        </div>
      </div>
    </footer>
  );
};