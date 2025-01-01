import React from 'react';

import styles from './navbar.module.scss';

export default function Navbar(): React.ReactElement {
    return (
        <>
            <div className={styles.navbar}>
                <a href="/">ГЛАВНАЯ</a>
                <a href="/about">ОБ ОРГАНИЗАЦИИ</a>

                <div className={styles.dropdown}>
                    <a href="/structure" className={styles.dropbtn}>
                        СТРУКТУРА
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <div className={styles.dropdownContent}>
                        <a href="/structure">Председатель</a>
                        <a href="/structure">Отдел образования</a>
                        <a href="/structure">Отдел Старейшин</a>
                        <a href="/structure">Отдел Спорта и туризма</a>
                    </div>
                </div>

                <a href="/news">НОВОСТИ</a>
                <a href="/contacts">КОНТАКТЫ</a>
                <a href="/cooperation">СОТРУДНИЧЕСТВО</a>
                <a href="/azerbaijan">АЗЕРБАЙДЖАН</a>
            </div>
        </>
    );
}
