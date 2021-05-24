import React, { ReactElement, useState } from 'react';


interface TitleProps {
    title: string
}

export const Titles: React.FC<TitleProps> = ({ title }) => {

    return (
        <div className="col-12 mb-3">
            <p>{title}</p>
        </div>
    )
}