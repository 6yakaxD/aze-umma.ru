import style from "@/components/news_wrapper/new_detail_page/left_news_detail.module.scss";
import React from "react";
import {Avatar} from "@nextui-org/react";

export default function Reply() {
    return (
        <div className={style.replyToCommentDiv}>
            <div className={style.commentLeft}>
                <Avatar
                    size="sm"
                    src="/templ_comment_ava.png"
                />
            </div>

            <div className={style.commentRight}>
                <div className={style.commentTitle}>
                    <p>Username</p>
                    <p className="italic font-thin text-sm">01.01.2001 at 18:55</p>
                </div>

                <div className={style.commentContext}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet expedita
                    voluptas vel facilis esse autem perferendis debitis labore et, quis ipsa, itaque unde
                    doloremque culpa pariatur impedit optio fugit?
                </div>
            </div>
        </div>
    )
}