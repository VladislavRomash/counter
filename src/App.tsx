import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';
import {ScoreType} from './redux/reducer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';


export const App = () => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)

    const [start, setStart] = useState<number>(score.startScore)
    const [max, setMax] = useState<number>(score.maxScore)

    return (
        <div className="App">
            <Counter start={start}
                     max={max}
            />
            <Settings start={start}
                      setStart={setStart}
                      max={max}
                      setMax={setMax}
            />
        </div>
    )
}