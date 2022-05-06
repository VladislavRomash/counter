import React, {ChangeEvent} from 'react';
import s from './css.module/Settings.module.css'
import {changeCurrentValue, counterSettingAC} from '../redux/reducer';
import {useDispatch} from 'react-redux';

type SettingsPropsType = {
    setStart: (value: number) => void
    start: number
    setMax: (value: number) => void
    max: number
}

export const Settings = ({setStart, start, setMax, max}: SettingsPropsType) => {

    const dispatch = useDispatch()

    const onSetValue = (startValue: number, maxValue: number) => {
        dispatch(counterSettingAC(startValue, maxValue))
        dispatch(changeCurrentValue())
    }

    const onClickHandler = () => {
        onSetValue(start, max)
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }

    const startStyle = start < 0 || start >= max ? s.error : ''
    const maxStyle = start >= max ? s.error : ''
    const disabledButtonStyle = start < 0 || start >= max

    return (
        <div className={s.settings}>
            <div className={s.start}>
                start value: <input type={'number'}
                                    value={start}
                                    onChange={onChangeHandlerStart}
                                    className={startStyle}
            />
            </div>
            <div className={s.max}>
                max value: <input type={'number'}
                                  value={max}
                                  onChange={onChangeHandlerMax}
                                  className={maxStyle}/>
            </div>
            <div className={s.button}>
                <button onClick={onClickHandler}
                        disabled={disabledButtonStyle}>set
                </button>
            </div>
        </div>
    );
};