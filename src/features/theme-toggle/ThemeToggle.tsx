import { Sun, Moon } from 'lucide-react';

interface Props {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: Props) => (
  <button
    onClick={onToggle}
    aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
    className="relative w-10 h-10 flex items-center justify-center rounded-xl
      bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700
      border border-slate-200 dark:border-slate-700
      text-slate-600 dark:text-slate-400
      transition-all duration-200 active:scale-90 shadow-sm"
  >
    <span
      className={`absolute transition-all duration-300 ${
        isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
      }`}
    >
      <Sun size={18} />
    </span>
    <span
      className={`absolute transition-all duration-300 ${
        isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
      }`}
    >
      <Moon size={18} />
    </span>
  </button>
);