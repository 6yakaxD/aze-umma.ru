import styles from './leftMainContent.module.scss';

export default function LeftMainContent() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <h2 style={{ fontFamily: 'Neris-Light', fontSize: '20px' }}>НОВОСТИ</h2>
                <a href="/news">
                    <p className={styles.showMoreNewsBtn}>show more</p>
                </a>
            </div>

            <div style={{ border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px' }}></div>

            {/* Карточка новостей */}
            <div className={styles.newsCardFromList}>
                <div className={styles.cardFromListImgDiv}>
                    <a href="#">
                        <img src="/1.jpg" height="200px" className={styles.hoverZoomImage} />
                    </a>
                </div>
                <div className={styles.cardFromListTitleDiv}>
                    <a href="#">
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
            {/* Карточка новостей */}

            <div style={{ border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px' }}></div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="/news" className={styles.allNewsBtn}>
                    Все Новости
                </a>
            </div>
        </>
    );
}