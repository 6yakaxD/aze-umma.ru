'use client'
import {useEffect} from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import styles from './mainNewsPost.module.scss';

export default function MainNewsPost() {

    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'slide',
            heightRatio: 0.5,
            pagination: {
                type: 'progress',
                clickable: true
            },
            arrows: true,
        });

        splide.mount();

        const bar = splide.root.querySelector('.my-carousel-progress-bar');
        splide.on('mounted move', function () {
            const end = splide.Components.Controller.getEnd() + 1;
            const rate = Math.min((splide.index + 1) / end, 1);
            if (bar) bar.style.width = `${100 * rate}%`;
        });

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
                                    <a href="#">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                    <p>&#128336; 01.01.2001</p>
                                </div>
                            </li>

                            {/* Слайды */}
                            <li className="splide__slide">
                                <div style={{position: 'relative', width: '100%', height: '570px'}}>
                                    <a href="#">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>122223123123</h2>
                                    <p>&#128336; 01.01.2001</p>
                                </div>
                            </li>

                            {/* Слайды */}
                            <li className="splide__slide">
                                <div style={{position: 'relative', width: '100%', height: '570px'}}>
                                    <a href="#">
                                        <img src="/1.jpg" className={styles.mainNewsPostImg}/>
                                    </a>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h2>asdsdavdsfv adipisicing elit.</h2>
                                    <p>&#128336; 01.01.2001</p>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
