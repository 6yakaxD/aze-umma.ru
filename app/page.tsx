import Footer from "@/components/base/footer";
import Header from "@/components/base/header";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import NewsSlider from "@/components/sliders/news_slider";
import NewsWrapper from "@/components/news_wrapper/news_wrapper";
import LeftMainPageContent from "@/components/news_wrapper/main_page/left_news_main";
import RightMainPageContent from "@/components/news_wrapper/main_page/right_announcement_main";
import CoopSlider from "@/components/sliders/coop_slider";

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <AllContentWrapper>
                <NewsSlider></NewsSlider>
                <div className="mt-[25px]">
                    <NewsWrapper
                        LeftContent={<LeftMainPageContent/>}
                        RightContent={<RightMainPageContent/>}
                    />
                </div>

                <div className="mt-[25px]">
                    <h3 className="font-roboto text-3xl font-bold">Мы сотрудничаем с</h3>
                    <CoopSlider></CoopSlider>
                </div>

            </AllContentWrapper>
            <Footer></Footer>
        </>
    );
}
