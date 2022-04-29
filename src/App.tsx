import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Count} from './components/Count';
import {Buttons, ButtonsNameType} from './components/Buttons';

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const onclickButton = (name: ButtonsNameType) => {
        if (name === 'inc') {
            setCount(count + 1)
        }
        if (name === 'res') {
            setCount(0)
        }
        if (name === 'set') {
            setCount(count)
        }
    }

    const maxValue = 5

    return (
        <div className="App">
            <h1>
                <Header title={'This is my Counter'}/>
            </h1>
            <h3>
                <Count value={count <= 5 ? count : maxValue}/>
            </h3>
            <div>
                <Buttons callback={onclickButton} value={count}/>
            </div>
        </div>
    )
}