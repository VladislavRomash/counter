import React, {ChangeEvent} from 'react';
import s from './css.module/Settings.module.css'

type SettingsPropsType = {
    onSetValue: (startValue: number, maxValue: number) => void
    setStart: (value: number) => void
    start: number
    setMax: (value: number) => void
    max: number
}

export const Settings = ({onSetValue, setStart, start, setMax, max}: SettingsPropsType) => {

    const onClickHandler = () => {
        onSetValue(start, max)
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }

    return (
        <div className={s.settings}>
            <div className={s.start}>
                start value: <input type={'number'}
                                    value={start}
                                    onChange={onChangeHandlerStart}
                                    className={(start < 0 || start >= max) ? s.error : ''}
            />
            </div>
            <div className={s.max}>
                max value: <input type={'number'}
                                  value={max}
                                  onChange={onChangeHandlerMax}
                                  className={start >= max ? s.error : ''}/>
            </div>
            <div className={s.button}>
                <button onClick={onClickHandler}
                        disabled={start < 0 || start >= max}>set
                </button>
            </div>
        </div>
    );
};