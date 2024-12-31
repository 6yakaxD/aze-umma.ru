import React from 'react';
import style from './allContent.module.scss';

export default function AllContent({ children }) {
    return (
        <div className={style.mainContentDiv}>
            {children}
        </div>
    );
};

