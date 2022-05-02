import React, {ChangeEvent, useState} from 'react';
import s from './css.module/Settings.module.css'
import {ScoreType} from '../App';

type SettingsPropsType = {
    score: ScoreType
    callback: (value: number, valueMax: number) => void
}

export const Settings = ({score, callback}: SettingsPropsType) => {

    const [value, setValue] = useState<any>(score.currentScore)
    const [maxValue, setMaxValue] = useState<any>(score.maxScore)

    const onClickHandler = () => {
        callback(value, maxValue)
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    return (
        <div className={s.settings}>
            <div className={s.start}>
                start value: <input type={'number'}
                                    value={value}
                                    onChange={onChangeHandlerStart}/>
            </div>
            <div className={s.max}>
                max value: <input type={'number'}
                                  value={maxValue}
                                  onChange={onChangeHandlerMax}/>
            </div>
            <div className={s.button}>
                <button onClick={onClickHandler}>set</button>
            </div>
        </div>
    );
};