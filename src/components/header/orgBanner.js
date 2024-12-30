import styles from './orgBanner.module.scss';

export default function OrgBanner() {
    return (
        <>
            <div className={styles['org-banner']}>
                <img src="/umma.png" alt="УММА" height={250} />
            </div>
            <div className={styles['org-name']}>
                <h1>
                    АЗЕРБАЙДЖАНСКОЕ
                    <br /> КУЛЬТУРНО-ПРОСВЕТИТЕЛЬСКОЕ
                    <br /> ОБЪЕДИНЕНИЕ УММА
                </h1>
            </div>
        </>
    );
}