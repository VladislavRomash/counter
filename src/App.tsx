import React, {useState} from 'react';
import './App.css';
import {ButtonsNameType} from './components/Buttons';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

export type ScoreType = {
    title: string
    currentScore: number
    startScore: number
    maxScore: number
}

export const App = () => {

    const [score, setScore] = useState<ScoreType[]>([
        {title: 'This is my Counter', currentScore: 0, startScore: 0, maxScore: 5}
    ])
    console.log(score)

    const onclickButton = (name: ButtonsNameType) => {
        if (name === 'inc') {
            setScore(score.map(m => {
                return ({...m, currentScore: m.currentScore += 1})
            }))
        }
        if (name === 'res') {
            setScore(score.map(m => {
                return ({...m, currentScore: m.startScore})
            }))
        }
    }

    const onClickSet = (value: number, valueMax: number) => {
        setScore(score.map(m => {
            return ({...m, startScore: Number(value), maxScore: Number(valueMax), currentScore: m.startScore})
        }))
    }

    return (
        <div className="App">
            {
                score.map((m, i) => {
                    return (
                        <Counter key={i}
                                 score={m}
                                 onclickButton={onclickButton}/>
                    )
                })
            }
            {
                score.map((m, i) => {
                    return (
                        <Settings key={i}
                                  score={m}
                                  callback={onClickSet}/>
                    )
                })
            }
        </div>
    )
}