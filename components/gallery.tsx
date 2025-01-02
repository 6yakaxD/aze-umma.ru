import React, {useEffect} from "react";
import {initLightboxJS, SlideshowLightbox} from 'lightbox.js-react'

export default function PostGallery() {

    useEffect(() => {
        initLightboxJS("Insert License key", "Insert plan type here");
    });

    return (
        <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
            <img className="w-full rounded" src="/1.jpg"/>
            <img className="w-full rounded" src="/404_error.png"/>
            <img className="w-full rounded" src="/body-top-bg.png"/>
            <img className="w-full rounded" src="/logo_umma.png"/>
        </SlideshowLightbox>
    );
}
