import React from 'react';
import style from './mainContent.module.scss';

export default function MainContent({ children }) {
    return (
        <div className={style.mainContentDiv}>
            {children}
        </div>
    );
};

