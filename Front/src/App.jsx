import './App.css'
import { ContactMe } from './contactMe/pages';
import { Home } from './home/pages/Home';
import { Projects } from './projects/pages';
import { QrUI } from './ui/QrUI';

export const App = () => {
  return (
    <QrUI>
      <div className="content">
        <Home />
        <Projects />
        <ContactMe />
      </div>
    </QrUI>
  )
}
