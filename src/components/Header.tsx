import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = ({title}: HeaderPropsType) => {
    return (
        <h1>
            {title}
        </h1>
    );
};