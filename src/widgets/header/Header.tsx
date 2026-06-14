import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from '../../features/theme-toggle/ThemeToggle';

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Образование', href: '#education' },
  { label: 'Контакты', href: '#contacts' },
];

export const Header = ({ isDark, onToggleTheme }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-sm">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-sm">Плеханов.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === href.slice(1)
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            {/* Burger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
                bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-400 transition-all active:scale-90"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Меню"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-slate-200/50 dark:border-slate-700/50 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === href.slice(1)
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};