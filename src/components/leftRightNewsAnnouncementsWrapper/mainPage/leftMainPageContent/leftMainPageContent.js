import styles from './leftMainPageContent.module.scss';
import NewsElement from "@/components/leftRightNewsAnnouncementsWrapper/newsElementsDetails/newsElement";

export default function LeftMainPageContent() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <h2 style={{ fontFamily: 'Neris-Light', fontSize: '20px' }}>Новости</h2>
                <a href="/news">
                    <p className={styles.showMoreNewsBtn}>show more</p>
                </a>
            </div>

            <div style={{ border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px' }}></div>

            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>

            <div style={{ border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px' }}></div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="/news" className={styles.allNewsBtn}>
                    Все Новости
                </a>
            </div>
        </>
    );
}