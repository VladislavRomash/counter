import React, {ChangeEvent} from 'react';
import s from './css.module/Settings.module.css'
import {changeMaxValue, changeStartValue, counterSettingAC} from '../redux/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {ScoreType} from '../App';


export const Settings = () => {

    let score = useSelector<AppRootStateType, ScoreType>(state => state.score)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(counterSettingAC())
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValue(e.currentTarget.value))
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValue(e.currentTarget.value))
    }

    return (
        <div className={s.settings}>
            <div className={s.start}>
                start value: <input type={'number'}
                                    value={score.startScore}
                                    onChange={onChangeHandlerStart}
                                    className={score.startScore < 0 || score.startScore >= score.maxScore ? s.error : ''}/>
            </div>
            <div className={s.max}>
                max value: <input type={'number'}
                                  value={score.maxScore}
                                  onChange={onChangeHandlerMax}
                                  className={score.startScore >= score.maxScore ? s.error : ''}/>
            </div>
            <div className={s.button}>
                <button onClick={onClickHandler}
                        disabled={score.startScore < 0 || score.startScore >= score.maxScore}>set
                </button>
            </div>
        </div>
    );
};