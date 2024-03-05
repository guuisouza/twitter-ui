import { Sparkle } from 'phosphor-react'

import './Header.css'

interface  HeaderProps {
    title: String; /* Recebe a prop title, que muda se será Home ou Tweet */
}

export function Header(props: HeaderProps){
    return(
        <div className="timeline-header">
            {props.title}
        <Sparkle />
      </div>
    )
}