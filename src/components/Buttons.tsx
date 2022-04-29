import React from 'react';
import s from './css.module/Buttons.module.css'

export type ButtonsNameType = 'set' | 'res' | 'inc'

type ButtonsPropsType = {
    callback: (name: ButtonsNameType) => void
    value: number
}

export const Buttons = ({callback, value}: ButtonsPropsType) => {

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
                        disabled={value === 5}>inc</button>
            </span>
            <span className={s.buttons}>
                <button onClick={() => onClickHandler('set')}
                        disabled={true}>set</button>
            </span>
        </div>
    );
};