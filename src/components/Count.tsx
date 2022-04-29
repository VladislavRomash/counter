import React from 'react';
import s from './css.module/Count.module.css'

type CountPropsType = {
    value: number
}

export const Count = ({value}: CountPropsType) => {

    return (
        <div className={value < 5 ? s.count : s.error}>
            {value}
        </div>
    );
};