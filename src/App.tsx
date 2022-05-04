import React, {useState} from 'react';
import './App.css';
import {ButtonsNameType} from './components/Buttons';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';
import {changeCurrentValue, counterIncAC, counterResAC, counterSettingAC} from './redux/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';

export type ScoreType = {
    title: string
    currentScore: number
    startScore: number
    maxScore: number
}

export const App = () => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)
    const dispatch = useDispatch()

    const [start, setStart] = useState<number>(score.startScore)
    const [max, setMax] = useState<number>(score.maxScore)

    const onSetValue = (startValue: number, maxValue: number) => {
        dispatch(counterSettingAC(startValue, maxValue))
        dispatch(changeCurrentValue())
    }

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
            <Counter onclickButton={onclickButton}
                     start={start}
                     max={max}
            />
            <Settings onSetValue={onSetValue}
                      start={start}
                      setStart={setStart}
                      max={max}
                      setMax={setMax}
            />
        </div>
    )
}