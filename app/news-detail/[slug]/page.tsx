import React from "react";

import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import AllContentWrapper from "@/components/base/all_content_wrapper";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    return (
        <>
            <Header></Header>

            <AllContentWrapper>
                <div>{slug}</div>
            </AllContentWrapper>

            <Footer></Footer>
        </>
    )
}