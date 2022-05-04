import React from 'react';
import {Header} from './Header';
import {Count} from './Count';
import {Buttons, ButtonsNameType} from './Buttons';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {ScoreType} from '../App';

type CounterPropsType = {
    onclickButton: (name: ButtonsNameType) => void
}

export const Counter = ({onclickButton}: CounterPropsType) => {

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
                    && score.startScore >= 0
                    && score.startScore < score.maxScore ? score.currentScore : 'Incorrect value!'}
                    maxScore={score.maxScore}/>
            </h2>
            <div>
                <Buttons callback={onclickHandler} score={score.currentScore} maxScore={score.maxScore}/>
            </div>
        </div>
    );
};