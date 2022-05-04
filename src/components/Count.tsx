import React from 'react';
import s from './css.module/Count.module.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';

type CountPropsType = {
    score: number | string
}

export const Count = ({score}: CountPropsType) => {

    let maxScore = useSelector<AppRootStateType, number>(state => state.score.maxScore)

    return (
        <div className={score < maxScore ? s.count : s.error}>
            {score}
        </div>
    );
};