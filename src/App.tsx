import React from 'react';
import './App.css';
import {ButtonsNameType} from './components/Buttons';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';
import {counterIncAC, counterResAC} from './redux/reducer';
import {useDispatch} from 'react-redux';

export type ScoreType = {
    title: string
    currentScore: number
    startScore: number
    maxScore: number
}

export const App = () => {

    const dispatch = useDispatch()

    const onclickButton = (name: ButtonsNameType) => {
        if (name === 'inc') {
            dispatch(counterIncAC())
        }
        if (name === 'res') {
            dispatch(counterResAC())
        }
    }

    return (
        <div className="App">
            <Counter onclickButton={onclickButton}/>
            <Settings/>
        </div>
    )
}