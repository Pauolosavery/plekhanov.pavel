import './index.css';
import { useTheme } from './shared/lib/useTheme';
import { Header } from './widgets/header/Header';
import { Hero } from './widgets/hero/Hero';
import { About } from './widgets/about/About';
import { Skills } from './widgets/skills/Skills';
import { Experience } from './widgets/experience/Experience';
import { Projects } from './widgets/projects/Projects';
import { Education } from './widgets/education/Education';
import { Contacts } from './widgets/contacts/Contacts';
import { Footer } from './widgets/footer/Footer';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
