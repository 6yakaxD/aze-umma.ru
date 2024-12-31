'use client';

import NewsElement from "@/components/leftRightNewsAnnouncementsWrapper/newsElementsDetails/newsElement";
import {Button, NextUIProvider, Pagination} from "@nextui-org/react";

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

            {/* TODO: PAGINATION */}

            <Pagination initialPage={1} total={10} />

            <Button auto>Нажми меня</Button>

        </>
    );
}
