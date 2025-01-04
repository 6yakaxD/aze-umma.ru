import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import RightMainPageContent from "@/components/news_wrapper/main_page/right_announcement_main";
import NewsWrapper from "@/components/news_wrapper/news_wrapper";
import LeftNewsPageContent from "@/components/news_wrapper/news_page/left_news_main";
import style from "./page.module.scss";
import React from "react";
import BackgroundImgWrapper from "@/components/background-img-wrapper";


export default function NewsPage() {
    return (
        <>
            <Header></Header>
            <BackgroundImgWrapper>
                <div className={style.mainContentDiv}>

                    <NewsWrapper
                        LeftContent={<LeftNewsPageContent/>}
                        RightContent={<RightMainPageContent/>}
                    />
                </div>
            </BackgroundImgWrapper>
            <Footer></Footer>
        </>
    );
}