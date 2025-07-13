import {Link} from 'react-router-dom';
import './router/routes/Routes'
import AppRoutes from "./router/routes/Routes.tsx";
import './App.scss'

function App() {
  const headerItems: { id: number, name: string, link: string }[] = [
    {id: 0, name: 'Home', link: ''},
    {id: 1, name: 'Counter', link: 'counter'},
    {id: 2, name: 'Todo', link: 'todo'},
  ]

  return (
    <div className="container">
      <nav className="container__header">
        {headerItems.map((it) => (
          <div className="container__header__item" key={it.id}>
            <Link to={'/' + it.link}>{it.name}</Link>
          </div>
        ))}
      </nav>

      <main>
        <AppRoutes/>
      </main>
    </div>
  )
}

export default App
