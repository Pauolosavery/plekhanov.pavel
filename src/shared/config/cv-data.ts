export const cvData = {
  personal: {
    name: 'Плеханов Дмитрий',
    role: 'Frontend Developer',
    tagline: 'Создаю быстрые, красивые и удобные веб-приложения',
    email: 'plekhanov.dev@gmail.com',
    phone: '+7 (999) 123-45-67',
    location: 'Москва, Россия',
    github: 'https://github.com/plekhanov-dev',
    linkedin: 'https://linkedin.com/in/plekhanov-dev',
    telegram: 'https://t.me/plekhanov_dev',
    avatarInitials: 'ДП',
    yearsOfExperience: 4,
    projectsCount: 30,
    companiesCount: 3,
  },

  about: `Frontend-разработчик с 4+ годами опыта создания высоконагруженных веб-приложений.
Специализируюсь на React-экосистеме, уделяю особое внимание производительности, доступности и качеству кода.
Люблю чистую архитектуру и делюсь знаниями с командой через код-ревью и внутренние митапы.`,

  skills: {
    core: [
      { name: 'React / React Native', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES2022+)', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
    state: [
      { name: 'Redux Toolkit / RTK Query', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'React Query (TanStack)', level: 78 },
      { name: 'Effector', level: 65 },
    ],
    ui: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'CSS Modules / SCSS', level: 88 },
      { name: 'Styled Components', level: 75 },
      { name: 'MUI / Ant Design', level: 80 },
    ],
    tools: [
      { name: 'Vite / Webpack', level: 82 },
      { name: 'Git / GitHub Actions', level: 85 },
      { name: 'Jest / Vitest / RTL', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'Docker (базово)', level: 55 },
    ],
  },

  experience: [
    {
      company: 'TechFlow Solutions',
      role: 'Senior Frontend Developer',
      period: 'Март 2023 — настоящее время',
      location: 'Москва (Гибрид)',
      description:
        'Разработка и поддержка корпоративной платформы управления проектами на React + TypeScript. Архитектурное проектирование фронтенда, менторинг команды из 3 джунов.',
      achievements: [
        'Ускорил первоначальную загрузку на 45% через code splitting и lazy loading',
        'Внедрил RTK Query, сократив количество дублирующего кода на 30%',
        'Разработал UI Kit из 40+ компонентов на Storybook',
        'Настроил CI/CD пайплайн с автоматическим тестированием',
      ],
      tags: ['React', 'TypeScript', 'RTK Query', 'Storybook', 'Jest'],
      current: true,
    },
    {
      company: 'Digital Agency «Bright»',
      role: 'Middle Frontend Developer',
      period: 'Июнь 2021 — Февраль 2023',
      location: 'Москва (Офис)',
      description:
        'Разработка лендингов, e-commerce площадок и корпоративных сайтов для клиентов из разных отраслей. Работа в команде по методологии Scrum.',
      achievements: [
        'Реализовал 15+ коммерческих проектов в срок и в рамках бюджета',
        'Оптимизировал LCP до < 2.5s на ключевых страницах клиентов',
        'Перевёл команду на TypeScript, сократив баги в продакшне на 20%',
        'Интегрировал платёжные системы: Stripe, ЮKassa',
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Stripe'],
      current: false,
    },
    {
      company: 'Freelance / Самозанятость',
      role: 'Frontend Developer',
      period: 'Январь 2020 — Май 2021',
      location: 'Удалённо',
      description:
        'Разработка веб-сайтов и веб-приложений для малого бизнеса. Полный цикл от макета до деплоя.',
      achievements: [
        'Выполнил 12+ проектов для клиентов из России и СНГ',
        'Разработал SaaS-инструмент для управления задачами',
        'Настроил автоматический деплой через Vercel и Netlify',
      ],
      tags: ['React', 'JavaScript', 'CSS Modules', 'Firebase'],
      current: false,
    },
  ],

  projects: [
    {
      name: 'ProjectFlow',
      description:
        'Корпоративная платформа управления проектами и задачами с real-time уведомлениями, аналитикой и Kanban-доской.',
      tags: ['React', 'TypeScript', 'Redux Toolkit', 'Socket.io', 'Vite'],
      link: 'https://github.com/plekhanov-dev/projectflow',
      demo: 'https://projectflow-demo.vercel.app',
      emoji: '🚀',
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'ShopVerse',
      description:
        'Полнофункциональный e-commerce с корзиной, фильтрацией, оплатой через Stripe и личным кабинетом.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
      link: 'https://github.com/plekhanov-dev/shopverse',
      demo: 'https://shopverse-demo.vercel.app',
      emoji: '🛒',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'DevNotes',
      description:
        'Приложение для заметок разработчика с поддержкой Markdown, тегами и полнотекстовым поиском.',
      tags: ['React', 'Zustand', 'React Query', 'MDX', 'Tailwind'],
      link: 'https://github.com/plekhanov-dev/devnotes',
      demo: 'https://devnotes-demo.vercel.app',
      emoji: '📝',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'WeatherNow',
      description:
        'Погодный виджет с геолокацией, 7-дневным прогнозом, анимациями и адаптивным дизайном.',
      tags: ['React', 'TypeScript', 'Framer Motion', 'OpenWeather API'],
      link: 'https://github.com/plekhanov-dev/weathernow',
      demo: 'https://weathernow-demo.vercel.app',
      emoji: '🌤️',
      color: 'from-orange-400 to-rose-500',
    },
  ],

  education: [
    {
      institution: 'МГТУ им. Баумана',
      degree: 'Бакалавр — Информатика и вычислительная техника',
      period: '2016 — 2020',
      description: 'Диплом с отличием. Курсовые проекты по алгоритмам, ОС и веб-разработке.',
    },
  ],

  courses: [
    { name: 'React: продвинутые паттерны', org: 'Udemy', year: '2023' },
    { name: 'TypeScript Deep Dive', org: 'Frontend Masters', year: '2022' },
    { name: 'Архитектура Frontend-приложений (FSD)', org: 'Hexlet', year: '2022' },
    { name: 'Testing JavaScript с Jest и Vitest', org: 'Udemy', year: '2023' },
  ],

  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B2 (Upper-Intermediate)' },
  ],

  interests: ['Open Source', 'UI/UX дизайн', 'Алгоритмы', 'Видеоигры', 'Велоспорт'],
};