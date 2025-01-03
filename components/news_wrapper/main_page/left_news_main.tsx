import React from 'react';
import styles from './left_news_main.module.scss';
import NewsElement from "@/components/news_wrapper/elements/news_element";

export default function LeftMainPageContent(): React.ReactElement {
    return (
        <>
            <div className="flex justify-between items-end ">
                <h2 className={styles.titleBlock}>Новости</h2>
                <a href="/news">
                    <p className={styles.showMoreNewsBtn}>show more</p>
                </a>
            </div>

            <div className="border border-black/10 my-4"></div>

            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>

            <div className="border border-black/10 my-4"></div>

            <div className="flex justify-center items-center">
                <a href="/news" className={styles.allNewsBtn}>
                    Все Новости
                </a>
            </div>
        </>
    );
}
