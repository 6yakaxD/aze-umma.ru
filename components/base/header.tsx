import React from 'react';
import Navbar from "@/components/base/navbar";
import styles from './header.module.scss';

export default function Header(): React.ReactElement {
    return (
        <>
            <div className={styles['org-banner']}>
                <img src="/umma.png" alt="УММА" style={{height: '260px'}}/>
            </div>
            <div className={styles['org-name']}>
                <h1>
                    АЗЕРБАЙДЖАНСКОЕ
                    <br/> КУЛЬТУРНО-ПРОСВЕТИТЕЛЬСКОЕ
                    <br/> ОБЪЕДИНЕНИЕ УММА
                </h1>
            </div>
            <Navbar></Navbar>
        </>
    );
};

