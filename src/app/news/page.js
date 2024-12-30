import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import MainContent from "@/components/mainContentWrapper/mainContent";
import LeftMainPageContent
    from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/leftMainPageContent/leftMainPageContent";
import RightMainPageContent
    from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/rightMainPageContent/rightMainPageContent";
import NewsAnnouncementWrapper from "@/components/leftRightNewsAnnouncementsWrapper/newsAnnouncementWrapper";


export default function News() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <MainContent>
                {/* TODO: change LeftMainPageContent && RightMainPageContent -> to left|rightNewsPageContent */}
                {/* TODO: вынести item новости и item объявления в отдельный компонент и переиспользовать его во всех компонентах внутри leftRightNewsAnnouncementWrapper */}
                <NewsAnnouncementWrapper
                    LeftContent={<LeftMainPageContent/>}
                    RightContent={<RightMainPageContent/>}
                />
            </MainContent>

            <Footer/>
        </>
    );
}
