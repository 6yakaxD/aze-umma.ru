import React from "react";
import style from './announcement_element.module.scss';

export default function AnnouncementElement(): React.ReactElement {
    return (
        <>
            <div style={{border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px'}}></div>

            <div style={{flexDirection: 'column'}}>
                <div className={style.cardFromListImgDiv}>
                    <a href="#">
                        <img src="/1.jpg" className={style.hoverZoomImage} style={{width: '100%'}}/>
                    </a>
                </div>
                <div className={style.announceTitles}>
                    <a href="#">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquid iure corporis unde nam labore ad provident qui sequi sit nihil. Sit, a. Dolorum
                            maxime labore, facilis nam sunt quis amet.
                        </h2>
                    </a>
                    <p >01.01.2001</p>
                </div>
            </div>
        </>
    );
}
