import React, {ReactNode} from 'react';
import style from './news_wrapper.module.scss';

export default function NewsWrapper({LeftContent, RightContent}: {
    LeftContent: ReactNode;
    RightContent: ReactNode;
}): React.ReactElement {
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
}