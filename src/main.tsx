import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

// renderizar => mostrar em tela

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Diego" content="Meu primeiro Tweet"/><br></br>
      <Tweet user="Carla" content="Hello World"/><br></br>
      <Tweet user="Guilherme" content="Testando"/><br></br>
    </div>
  </React.StrictMode>,
)
