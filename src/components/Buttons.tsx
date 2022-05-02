import React from 'react';
import s from './css.module/Buttons.module.css'

export type ButtonsNameType = 'set' | 'res' | 'inc'

type ButtonsPropsType = {
    callback: (name: ButtonsNameType) => void
    score: number
    maxScore: number
}

export const Buttons = ({callback, score, maxScore}: ButtonsPropsType) => {

    const onClickHandler = (name: ButtonsNameType) => {
        callback(name)
    }

    return (
        <div className={s.styleComponents}>
            <span className={s.buttons}>
                <button onClick={() => onClickHandler('res')}>res</button>
            </span>
            <span className={s.buttons}>
                <button onClick={() => onClickHandler('inc')}
                        disabled={score >= maxScore}>inc</button>
            </span>
        </div>
    );
};