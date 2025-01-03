import React from 'react';

import styles from './footer.module.scss';

export default function Footer(): React.ReactElement {
    return (
        <>
            <div className={styles.footerWrapp}>
                <section className={styles.footer}>
                    <div className={styles.footerRow}>
                        <div className={styles.footerCol}>
                            <img src="/logo_umma.png" alt="UMMA" style={{height:'220px'}}/>
                        </div>

                        <div className={styles.footerCol}>
                            <a href="/about">
                                <h4>ОБ ОРГАНИЗАЦИИ</h4>
                            </a>
                            <a href="/news">
                                <h4 style={{marginTop: '15px'}}>НОВОСТИ</h4>
                            </a>
                            <a href="/contacts">
                                <h4 style={{marginTop: '15px'}}>КОНТАКТЫ</h4>
                            </a>
                            <a href="#">
                                <h4 style={{marginTop: '15px'}}>СОТРУДНИЧЕСТВО</h4>
                            </a>
                            <a href="#">
                                <h4 style={{marginTop: '15px'}}>АЗЕРБАЙДЖАН</h4>
                            </a>
                        </div>

                        <div className={styles.footerCol}>
                            <a href="/structure">
                                <h4>СТРУКТУРА</h4>
                            </a>
                            <ul className={styles.links}>
                                <li><a href="/structure">Председатель</a></li>
                                <li><a href="/structure">Отдел Образования</a></li>
                                <li><a href="/structure">Отдел Старейшин</a></li>
                                <li><a href="/structure">Отдел Спорта и туризма</a></li>
                            </ul>
                        </div>

                        <div className={styles.footerCol}>
                            <h4>Рассылка Новостей</h4>
                            <p>
                                Подпишитесь на нашу рассылку, чтобы получать регулярные новости и объявления.
                            </p>
                            <form action="#">
                                <input type="text" placeholder="Ваша почта" required/>
                                <button type="submit">Подписаться</button>
                            </form>
                            <div className={styles.icons}>
                                <i className="fa fa-telegram fa-lg"></i>
                                <i className="fa fa-instagram fa-lg"></i>
                                <i className="fa fa-youtube fa-lg"></i>
                                <i className="fa fa-facebook fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.footerCopyright}>
                    © РРОО УММА, 2024
                </div>
            </div>
        </>
    );
}
