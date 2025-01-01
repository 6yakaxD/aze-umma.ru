import Footer from "@/components/base/footer";
import Header from "@/components/base/header";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import NewsSlider from "@/components/news_slider/news_slider";
import NewsWrapper from "@/components/news_wrapper/news_wrapper";
import LeftMainPageContent from "@/components/news_wrapper/main_page/left_news_main";
import RightMainPageContent from "@/components/news_wrapper/main_page/right_announcement_main";

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <AllContentWrapper>
                <NewsSlider></NewsSlider>
                <div style={{marginTop: "25px"}}>
                    <NewsWrapper
                        LeftContent={<LeftMainPageContent/>}
                        RightContent={<RightMainPageContent/>}
                    />
                </div>
            </AllContentWrapper>
            <Footer></Footer>
        </>
    );
}
