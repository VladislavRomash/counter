import React from 'react';
import s from './css.module/Count.module.css'

type CountPropsType = {
    score: number | string
    maxScore: number
}

export const Count = ({score, maxScore}: CountPropsType) => {

    return (
        <div className={score < maxScore ? s.count : s.error}>
            {score}
        </div>
    );
};