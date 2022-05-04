import React from 'react';
import s from './css.module/Buttons.module.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {ScoreType} from '../App';

export type ButtonsNameType = 'set' | 'res' | 'inc'

type ButtonsPropsType = {
    callback: (name: ButtonsNameType) => void
    start: number
    max: number
}

export const Buttons = ({callback, start, max}: ButtonsPropsType) => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)

    const onClickHandler = (name: ButtonsNameType) => {
        callback(name)
    }

    return (
        <div className={s.styleComponents}>
            <span className={s.buttons}>
                <button onClick={() => onClickHandler('res')}
                        disabled={start >= max || start < 0}>res</button>
            </span>
            <span className={s.buttons}>
                <button onClick={() => onClickHandler('inc')}
                        disabled={score.currentScore >= score.maxScore || start >= max || start < 0}>inc</button>
            </span>
        </div>
    );
};