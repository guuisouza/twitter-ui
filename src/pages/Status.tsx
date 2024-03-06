import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
    'Concordo',
    'Olha faz sentido',
    'Parabéns pelo progresso'
]

export function Status(){
    return(
        <main className="status">
            <Header title={"Tweet"} />
            
            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam blanditiis obcaecati nulla, aliquid a quisquam? Repellendus enim molestias ducimus numquam quo sapiente eligendi sit quos nesciunt, vitae quod temporibus? "/>

            <Separator />

            <form className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/guuisouza.png" alt="Guilherme Dilio" />
                    <textarea id="tweet" placeholder="Tweet your answer" />
                </label>
                <button type="submit">Answer</button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}

        </main>
    )
}