import React from 'react';

type CountPropsType = {
    value: number
}

export const Count = ({value}: CountPropsType) => {
    return (
        <h3>
            {value}
        </h3>
    );
};