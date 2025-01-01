import Header from "@/components/base/header";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import Footer from "@/components/base/footer";
import RightMainPageContent from "@/components/news_wrapper/main_page/right_announcement_main";
import NewsWrapper from "@/components/news_wrapper/news_wrapper";
import LeftNewsPageContent from "@/components/news_wrapper/news_page/left_news_main";


export default function NewsPage() {
    return (
        <>
            <Header></Header>
            <AllContentWrapper>
                <NewsWrapper
                    LeftContent={<LeftNewsPageContent/>}
                    RightContent={<RightMainPageContent/>}
                />
            </AllContentWrapper>
            <Footer></Footer>
        </>
    );
}