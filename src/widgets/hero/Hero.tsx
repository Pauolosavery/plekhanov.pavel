import { Computer as Github, Handshake as Linkedin, Send, MapPin, Download, ChevronDown } from 'lucide-react';
import { cvData } from '../../shared/config/cv-data';
import heroImg from '../../assets/hero.png';

export const Hero = () => {
  const { personal } = cvData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 dark:bg-primary-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-400/20 dark:bg-accent-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-300/10 dark:bg-primary-800/10 blur-3xl" />
      </div>

      <div className="section-container w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Открыт к новым предложениям
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              {personal.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personal.name.split(' ')[1]}</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
              {personal.role}
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              {personal.tagline}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-8">
              <MapPin size={14} className="text-primary-500" />
              {personal.location}
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 mb-8">
              {[
                { value: `${personal.yearsOfExperience}+`, label: 'лет опыта' },
                { value: `${personal.projectsCount}+`, label: 'проектов' },
                { value: `${personal.companiesCount}`, label: 'компании' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center md:text-left">
                  <div className="text-2xl font-extrabold gradient-text">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a href={`mailto:${personal.email}`} className="btn-primary">
                <Download size={16} />
                Скачать CV
              </a>
              <a href="#contacts" className="btn-outline">
                Связаться
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                { href: personal.github, icon: <Github size={18} />, label: 'GitHub' },
                { href: personal.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: personal.telegram, icon: <Send size={18} />, label: 'Telegram' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl
                    bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                    text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400
                    hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md
                    transition-all duration-200 active:scale-90"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 to-accent-500 blur-xl opacity-40 scale-95" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={heroImg}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const next = t.nextElementSibling as HTMLElement | null;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden w-full h-full gradient-bg items-center justify-center text-white text-5xl font-bold"
                >
                  {personal.avatarInitials}
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 rounded-2xl px-3 py-2 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                <span className="text-lg">⚛️</span>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">React</div>
                  <div className="text-[10px] text-slate-500">Expert</div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 bg-white dark:bg-slate-800 rounded-2xl px-3 py-2 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                <span className="text-lg">📘</span>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">TypeScript</div>
                  <div className="text-[10px] text-slate-500">Advanced</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors group"
          >
            <span className="text-xs font-medium">Прокрутите вниз</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};