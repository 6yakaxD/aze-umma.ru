import React from "react";

import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import LeftNewsDetailPageContent from "@/components/news_wrapper/new_detail_page/left_news_detail";
import style from "./page.module.scss";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    return (
        <>
            <Header></Header>

            <div className={style.mainContentDiv}>

                <div className={style.wrapperNewsDetail}>
                    <LeftNewsDetailPageContent/>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}