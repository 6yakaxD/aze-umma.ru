import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import MainNewsPostSlider from "@/components/mainNewsPost/mainNewsPostSlider";
import RightMainContent from "@/components/mainNewsPost/rightMainContent/rightMainContent";
import LeftMainContent from "@/components/mainNewsPost/leftMainContent/leftMainContent";
import MainContent from "@/components/mainContent/mainContentWrapper/mainContent";
import NewsAnnouncementWrapper from "@/components/mainContent/leftRightNewsAnnouncements/newsAnnouncementWrapper";

export default function Home() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <MainContent>
                <MainNewsPostSlider/>

                <NewsAnnouncementWrapper
                    LeftContent={<LeftMainContent/>}
                    RightContent={<RightMainContent/>}
                />
            </MainContent>

            <Footer/>
        </>
    )
}
