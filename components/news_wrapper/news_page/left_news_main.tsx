'use client';

import {Pagination} from "@nextui-org/react";
import NewsElement from "@/components/news_wrapper/elements/news_element";

export default function LeftNewsPageContent() {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end'}}>
                <h2 style={{fontFamily: 'Neris-Light', fontSize: '20px'}}>Новости</h2>
            </div>

            <div style={{border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px'}}></div>

            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>
            <NewsElement></NewsElement>

            <div style={{border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px'}}></div>

            <div className="flex items-center justify-center">
                <Pagination
                    color="primary"
                    initialPage={1}
                    total={100}
                    showControls
                />
            </div>

        </>
    );
}
