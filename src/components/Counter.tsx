import React from 'react';
import {Header} from './Header';
import {Count} from './Count';
import {Buttons, ButtonsNameType} from './Buttons';
import {ScoreType} from '../App';

type CounterPropsType = {
    score: ScoreType
    onclickButton: (name: ButtonsNameType) => void
}

export const Counter = ({score, onclickButton}: CounterPropsType) => {

    const onclickHandler = (name: ButtonsNameType) => {
        onclickButton(name)
    }

    return (
        <div>
            <h1>
                <Header title={score.title}/>
            </h1>
            <h2>
                <Count score={score.currentScore <= score.maxScore ? score.currentScore : 'Enter correct start value'}
                       maxScore={score.maxScore}/>
            </h2>
            <div>
                <Buttons callback={onclickHandler} score={score.currentScore} maxScore={score.maxScore}/>
            </div>
        </div>
    );
};