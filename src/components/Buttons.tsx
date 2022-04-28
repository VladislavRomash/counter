import React from 'react';

export type ButtonsNameType = 'red' | 'res' | 'inc'

type ButtonsPropsType = {
    callback: (name: ButtonsNameType) => void
}

export const Buttons = ({callback}: ButtonsPropsType) => {

    const onClickHandler = (name: ButtonsNameType) => {
        callback(name)
    }

    return (
        <div>
            <span style={{paddingRight: '10px'}}>
                <button onClick={() => onClickHandler('red')}>red</button>
            </span>
            <span style={{paddingRight: '10px'}}>
                <button onClick={() => onClickHandler('res')}>res</button></span>
            <span>
                <button onClick={() => onClickHandler('inc')}>inc</button>
            </span>
        </div>
    );
};