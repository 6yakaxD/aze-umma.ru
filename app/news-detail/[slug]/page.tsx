import React from "react";

import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import RightMainPageContent from "@/components/news_wrapper/main_page/right_announcement_main";
import NewsWrapper from "@/components/news_wrapper/news_wrapper";
import LeftNewsDetailPageContent from "@/components/news_wrapper/new_detail_page/left_news_detail";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    return (
        <>
            <Header></Header>

            <AllContentWrapper>
                <NewsWrapper
                    LeftContent={<LeftNewsDetailPageContent/>}
                    RightContent={<RightMainPageContent/>}
                />
            </AllContentWrapper>

            <Footer></Footer>
        </>
    )
}