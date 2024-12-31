import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import MainNewsPostSlider from "@/components/mainNewsPostSlider/mainNewsPostSlider";
import RightMainPageContent from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/rightMainPageContent/rightMainPageContent";
import LeftMainPageContent from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/leftMainPageContent/leftMainPageContent";
import AllContent from "@/components/allContentWrapper/allContent";
import NewsAnnouncementWrapper from "@/components/leftRightNewsAnnouncementsWrapper/newsAnnouncementWrapper";

export default function Home() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <AllContent>
                <MainNewsPostSlider/>

                <div style={{marginTop: "25px"}}>
                    <NewsAnnouncementWrapper
                        LeftContent={<LeftMainPageContent/>}
                        RightContent={<RightMainPageContent/>}
                    />
                </div>
            </AllContent>

            <Footer/>
        </>
    )
}
