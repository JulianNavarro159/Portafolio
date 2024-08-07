import './App.css'
import { Home } from './home/pages/Home';
import { Projects } from './projects/pages';

export const App = () => {
  return (
    <div>
      <div className="content">
        <Home />
        <Projects />
      </div>
    </div>
  )
}
