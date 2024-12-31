import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";
import AllContent from "@/components/allContentWrapper/allContent";
import RightMainPageContent
    from "@/components/leftRightNewsAnnouncementsWrapper/mainPage/rightMainPageContent/rightMainPageContent";
import NewsAnnouncementWrapper from "@/components/leftRightNewsAnnouncementsWrapper/newsAnnouncementWrapper";
import LeftNewsPageContent
    from "@/components/leftRightNewsAnnouncementsWrapper/newsPage/leftNewsPageContent/leftMainPageContent";

export default function News() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <AllContent>
                {/* TODO: change LeftMainPageContent && RightMainPageContent -> to left|rightNewsPageContent */}
                {/* TODO: вынести item новости и item объявления в отдельный компонент и переиспользовать его во всех компонентах внутри leftRightNewsAnnouncementWrapper */}
                <NewsAnnouncementWrapper
                    LeftContent={<LeftNewsPageContent/>}
                    RightContent={<RightMainPageContent/>}
                />
            </AllContent>

            <Footer/>

        </>
    );
}
