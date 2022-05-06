import React from 'react';
import {Header} from './Header';
import {Count} from './Count';
import {Buttons, ButtonsNameType} from './Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {counterIncAC, counterResAC, ScoreType} from '../redux/reducer';

type CounterPropsType = {
    start: number
    max: number
}

export const Counter = ({start, max}: CounterPropsType) => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)
    const dispatch = useDispatch()

    const onclickHandler = (name: ButtonsNameType) => {
        if (name === 'inc') {
            dispatch(counterIncAC())
        }
        if (name === 'res') {
            dispatch(counterResAC())
        }
    }

    const conditionScore = score.currentScore <= score.maxScore && start >= 0 && start < max
        ? score.currentScore
        : 'Incorrect value!'

    return (
        <div>
            <h1>
                <Header title={score.title}/>
            </h1>
            <h2>
                <Count
                    score={conditionScore}
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