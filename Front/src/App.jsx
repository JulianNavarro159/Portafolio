import './App.css';
import { ContactMe } from './contactMe/pages';
import { Home } from './home/pages/Home';
import { Projects } from './projects/pages';
import { QrUI } from './ui/QrUI';

export const App = () => {
  return (
    <QrUI>
      <div className="content">
        <section id="home"> {/* Cambia "home" a minúscula */}
          <Home />
        </section>
        <section id="projects"> {/* ID "projects" en minúscula */}
          <Projects />
        </section>
        <section id="contactme"> {/* Cambia "contact" a "contactme" */}
          <ContactMe />
        </section>
      </div>
    </QrUI>
  );
};
