import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import './global.css'
// renderizar => mostrar em tela

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      {/* <Tweet user="Diego" content="Meu primeiro Tweet"/>
      <Tweet user="Carla" content="Hello World"/> */}
      <Tweet user="Guilherme" likes={15}> 
        TestandoOOOOOoo
      </Tweet>
      <Tweet user="Diego2" likes={10}>
        Conteúdo 4
      </Tweet>
    </div>
  </React.StrictMode>,
)
