import styles from './news_element.module.scss';
import React from "react";

export default function NewsElement(): React.ReactElement{
    return (
        <>
            <div className={styles.newsCardFromList}>
                <div className={styles.cardFromListImgDiv}>
                    <a href="/news-detail/example">
                        <img src="/1.jpg" className={styles.hoverZoomImage} />
                    </a>
                </div>
                <div className={styles.cardFromListTitleDiv}>
                    <a href="/news-detail/example">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure corporis unde nam
                            labore ad provident qui sequi sit nihil. Sit, a. Dolorum maxime labore, facilis nam sunt
                            quis amet.
                        </h2>
                    </a>
                    <p>111 Просмотров · 01.01.2001</p>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid recusandae accusantium,
                        itaque nemo porro odit at eum laboriosam, illum iusto quo quidem! Sunt, dolorem veritatis!
                        Laborum illo quasi quibusdam.
                    </h4>
                </div>
            </div>
        </>
    );
}

