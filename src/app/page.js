import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import MainNewsPostSlider from "@/components/mainNewsPostSlider/mainNewsPostSlider";
import RightMainPageContent from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/rightMainPageContent/rightMainPageContent";
import LeftMainPageContent from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/leftMainPageContent/leftMainPageContent";
import MainContent from "@/components/mainContentWrapper/mainContent";
import NewsAnnouncementWrapper from "@/components/leftRightNewsAnnouncementsWrapper/newsAnnouncementWrapper";

export default function Home() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <MainContent>
                <MainNewsPostSlider/>

                <NewsAnnouncementWrapper
                    LeftContent={<LeftMainPageContent/>}
                    RightContent={<RightMainPageContent/>}
                />
            </MainContent>

            <Footer/>
        </>
    )
}
