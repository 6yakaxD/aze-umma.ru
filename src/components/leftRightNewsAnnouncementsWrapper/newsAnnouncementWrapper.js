import React from 'react';
import style from './newsAnnouncementWrapper.module.scss';

export default function NewsAnnouncementWrapper({LeftContent, RightContent}) {
    return (
        <div className={style.centerContent}>
            <div className={style.contentLeft}>
                {LeftContent}
            </div>
            <div className={style.contentRight}>
                {RightContent}
            </div>
        </div>
    );
};

