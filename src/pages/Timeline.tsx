import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'


export function Timeline() {
    //Estado
    const [newTeet, setNewTeet] =  useState('')
    const [tweets, setTweets] = useState(
        [
            'Meu primeiro tweet',
            'Teste',
            'Deu certo tweetar!'
        ]
    )

    const createNewTweet = (event: FormEvent) => {
        event.preventDefault()

        setTweets([newTeet ,...tweets])
        setNewTeet('')
    }

    const handleHotKeySubmit = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.ctrlKey || event.metaKey) {
            setTweets([newTeet ,...tweets])
            setNewTeet('')
        }
    }

    return (
        <main className="timeline">
            <Header title={"Home"} />

            <form onSubmit={createNewTweet}  className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/guuisouza.png" alt="Guilherme Dilio" />
                    <textarea 
                        id="tweet" 
                        placeholder="What's happening?"
                        value={newTeet}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event)=> setNewTeet(event.target.value)} 
                    />
                </label>
                <button type="submit">Tweet</button>
            </form>

            <Separator />

            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}
        </main>
    )
}