import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './components/Counter.jsx'
import NameInput from './components/NameInput.jsx'
import CounterApp from './components/CounterApp.jsx'
import Project from './components/Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    // <Welcome /> */}
    {/* <Counter /> */}
    {/*<NameInput />*/}
   {/* <CounterApp /> */}
   <Project/>

  </StrictMode>,
)
