import React from "react";
import style from "./background-img-wrapper.module.scss";

// @ts-ignore
export default function BackgroundImgWrapper({children}) {
    return (
        <div className={style.bckgrndImg}>
            {children}
        </div>
    );
}