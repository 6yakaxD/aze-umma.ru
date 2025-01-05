"use client"

import React, {useState} from 'react';
import styles from './navbar.module.scss';
import Link from "next/link";

export default function Navbar(): React.ReactElement {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        const nav = document.getElementById("myNav");
        if (nav) {
            nav.style.width = "100%";
            setIsOpen(true);
            document.body.classList.add(styles.noScroll);
        }
    };

    const closeNav = () => {
        const nav = document.getElementById("myNav");
        if (nav) {
            nav.style.width = "0%";
            setIsOpen(false);
            document.body.classList.remove(styles.noScroll);
        }
    };

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


            <div className={styles.overlayWrapper}>
                <div id="myNav" className={styles.overlay}>
                    <a className={styles.closebtn} onClick={closeNav}>&times;</a>
                    <div className={styles.overlayContent}>
                        <a href="/">ГЛАВНАЯ</a>
                        <a href="/about">ОБ ОРГАНИЗАЦИИ</a>
                        <a href="/structure">СТРУКТУРА</a>
                        <a href="/news">НОВОСТИ</a>
                        <a href="/contacts">КОНТАКТЫ</a>
                        <a href="/cooperation">СОТРУДНИЧЕСТВО</a>
                        <a href="/azerbaijan">АЗЕРБАЙДЖАН</a>
                    </div>
                </div>

                <span className={`${isOpen ? styles.invertedBtn : styles.openNavButton}`}
                      onClick={openNav}>&#9776;</span>
            </div>
        </>
    );
}
