import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
    //Estado
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState(
        [
            'Concordo',
            'Olha faz sentido',
            'Parabéns pelo progresso'
        ]
    )

    const createNewAnswer = (event: FormEvent) => {
        event.preventDefault()

        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    const handleHotKeySubmit = (event: KeyboardEvent) =>{
        if (event.key === 'Enter' && event.ctrlKey || event.metaKey){
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
            <Header title={"Tweet"} />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam blanditiis obcaecati nulla, aliquid a quisquam? Repellendus enim molestias ducimus numquam quo sapiente eligendi sit quos nesciunt, vitae quod temporibus? " />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/guuisouza.png" alt="Guilherme Dilio" />
                    <textarea 
                        id="tweet" 
                        placeholder="Tweet your answer" 
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {setNewAnswer(event.target.value)}}
                    />
                </label>
                <button type="submit">
                    <PaperPlaneRight/>
                    <span>Answer</span>
                </button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}

        </main>
    )
}