'use client'
import React, {useEffect} from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import styles from './news_slider.module.scss';


export default function NewsSlider(): React.ReactElement {

    useEffect(() => {
        let splide: Splide;
        splide = new Splide('.splide', {
            type: 'slide',
            heightRatio: 0.5,
            // @ts-ignore
            pagination: {
                type: 'progress',
                clickable: true
            },
            arrows: true,
        });

        splide.mount();

        return () => {
            splide.destroy();
        };
    }, []);

    return (
        <>
            <div className={styles.mainNewsPost}>
                <div className="splide">
                    <div className="splide__track">
                        <ul className="splide__list">

                            {/* Слайды */}
                            <li className="splide__slide">
                                <div>
                                    <a href="/news-detail/example">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                    <p>01.01.2001</p>
                                </div>
                            </li>

                            {/* Слайды */}
                            <li className="splide__slide">
                                <div>
                                    <a href="/news-detail/example">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                    <p>01.01.2001</p>
                                </div>
                            </li>

                            {/* Слайды */}
                            <li className="splide__slide">
                                <div>
                                    <a href="/news-detail/example">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                    <p>01.01.2001</p>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}