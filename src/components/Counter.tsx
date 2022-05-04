import React from 'react';
import {Header} from './Header';
import {Count} from './Count';
import {Buttons, ButtonsNameType} from './Buttons';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {ScoreType} from '../App';

type CounterPropsType = {
    onclickButton: (name: ButtonsNameType) => void
    start: number
    max: number
}

export const Counter = ({onclickButton, start, max}: CounterPropsType) => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)

    const onclickHandler = (name: ButtonsNameType) => {
        onclickButton(name)
    }

    return (
        <div>
            <h1>
                <Header title={score.title}/>
            </h1>
            <h2>
                <Count
                    score={score.currentScore <= score.maxScore
                    && start >= 0
                    && start < max ? score.currentScore : 'Incorrect value!'}
                />
            </h2>
            <div>
                <Buttons callback={onclickHandler}
                         start={start}
                         max={max}
                />
            </div>
        </div>
    );
};