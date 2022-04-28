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
        if (name === 'red' && count > 0) {
            setCount(count - 1)
        }
        if (name === 'res') {
            setCount(0)
        }
    }


    return (
        <div className="App">
            <Header title={'This is my Counter'}/>
            <Count value={count}/>
            <Buttons callback={onclickButton}/>
        </div>
    )
}