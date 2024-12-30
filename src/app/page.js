import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import MainNewsPost from "@/components/mainNewsPost/mainNewsPost";
import RightMainContent from "@/components/mainNewsPost/rightMainContent/rightMainContent";
import LeftMainContent from "@/components/mainNewsPost/leftMainContent/leftMainContent";
import style from './page.module.scss'

export default function Home() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <div className={style.mainContentDiv}>

                <MainNewsPost/>

                <div className={style.centerContent}>
                    <div className={style.contentLeft}>
                        <LeftMainContent/>
                    </div>
                    <div className={style.contentRight}>
                        <RightMainContent/>
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    )
}
