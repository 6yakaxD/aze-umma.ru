import React from 'react';
import style from './right_announcement_main.module.scss';
import AnnouncementElement from "@/components/news_wrapper/elements/announcement_element";

export default function RightMainPageContent(): React.ReactElement {
    return (
        <>
            <div className="flex justify-between items-end">
                <h2 className={style.titleBlock}>Объявления</h2>
            </div>

            {/* AnnouncementElement */}
            <AnnouncementElement></AnnouncementElement>
            <AnnouncementElement></AnnouncementElement>
            <AnnouncementElement></AnnouncementElement>
        </>
    );
}
