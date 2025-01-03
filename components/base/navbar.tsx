import React from 'react';
import styles from './navbar.module.scss';
import Link from "next/link";

export default function Navbar(): React.ReactElement {

    return (
        <>
            <div className={styles.navbar} >
                <a href="/" >ГЛАВНАЯ</a>
                <a href="/about">ОБ ОРГАНИЗАЦИИ</a>

                <div className={styles.dropdown}>
                    <a href="/structure" className={styles.dropbtn}>
                        СТРУКТУРА
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <div className={styles.dropdownContent}>
                        <Link href="/structure#accordions">
                            Председатель
                        </Link>
                        <Link href="/structure#accordions">
                            Отдел образования
                        </Link>
                        <Link href="/structure#accordions">
                            Отдел Старейшин
                        </Link>
                        <Link href="/structure#accordions">
                            Отдел Спорта и туризма
                        </Link>
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
