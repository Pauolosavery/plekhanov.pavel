import { Mail, Phone, MapPin, Computer as Github, Handshake as Linkedin, Send } from 'lucide-react';
import { SectionWrapper } from '../../shared/ui/SectionWrapper';
import { SectionHeader } from '../../shared/ui/SectionHeader';
import { cvData } from '../../shared/config/cv-data';
import telegramQr from '../../assets/telegram_qr.jpg';

export const Contacts = () => {
  const { personal } = cvData;

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone size={20} />,
      label: 'Телефон',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Локация',
      value: personal.location,
      href: null,
      color: 'from-orange-500 to-rose-500',
    },
  ];

  const socials = [
    { icon: <Github size={20} />, label: 'GitHub', href: personal.github, color: 'hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: personal.linkedin, color: 'hover:bg-blue-600 hover:text-white' },
    { icon: <Send size={20} />, label: 'Telegram', href: personal.telegram, color: 'hover:bg-sky-500 hover:text-white' },
  ];

  return (
    <SectionWrapper id="contacts" className="bg-slate-50/50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Контакты"
        title="Свяжитесь со мной"
        description="Готов обсудить новые проекты и интересные задачи"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: contacts + socials */}
        <div className="space-y-5">
          <div className="space-y-4">
            {contacts.map(({ icon, label, value, href, color }) => (
              <div key={label} className="card card-hover flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social buttons */}
          <div className="card">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Социальные сети</p>
            <div className="flex gap-3">
              {socials.map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 font-medium text-sm transition-all duration-200 active:scale-95 ${color}`}
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: QR + availability */}
        <div className="space-y-5">
          <div className="card text-center">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Telegram QR</p>
            <div className="inline-block p-3 bg-white dark:bg-slate-700 rounded-2xl shadow-inner border border-slate-100 dark:border-slate-600">
              <img
                src={telegramQr}
                alt="Telegram QR код"
                className="w-40 h-40 rounded-xl object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                  const next = t.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div className="hidden w-40 h-40 rounded-xl bg-slate-100 dark:bg-slate-600 items-center justify-center text-4xl">
                📱
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Сканируйте для связи в Telegram</p>
          </div>

          <div className="card bg-gradient-to-br from-primary-50 to-accent-400/10 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-100 dark:border-primary-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">Доступен для работы</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Рассматриваю предложения о Full-time, Part-time и проектной занятости.
              Предпочтительно удалённый формат или гибрид (Москва).
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};