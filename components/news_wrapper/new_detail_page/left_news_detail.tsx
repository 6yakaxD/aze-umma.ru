"use client"
import React from 'react';
import {Button, Input, Textarea} from "@nextui-org/react";
import style from './left_news_detail.module.scss';

export default function LeftNewsDetailPageContent(): React.ReactElement {
    return (
        <>
            <div>
                {/* TODO: подумать может добавить как-то хлебные-крошки */}

                {/* Article Title */}
                <div className={style.articleTitle}>
                    <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem
                        odit eveniet officia tempora
                        adipisci amet nihil ea. Soluta quia facilis illum doloremque maxime excepturi suscipit
                        dignissimos sed eaque minima!</h1>
                </div>

                {/* Article Date and Time */}
                <div className={style.articleDateTime}>
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <p>01.01.2024</p>
                    </div>
                    <p>· Просмотров: 111</p>

                    <button className={style.likeBtn}>
                        <i className="fa fa-thumbs-up"></i>
                        1000
                    </button>

                    <button className={style.dislikeBtn}>
                        <i className="fa fa-thumbs-down"></i>
                        10
                    </button>
                </div>

                {/* Spacer */}
                <div className={style.articleSpacer}></div>

                {/* Article Preview */}
                <div className={style.articleMainPreview}>
                    <img src="/1.jpg" alt="Main Preview"/>
                </div>

                {/* Article Main Context */}
                <div className={style.articleMainContext}>
                    <p>
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor
                        sit amet,
                        consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                        ipsum dolor sit
                        amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                        consecteturLorem ipsum dolor
                        sit amet
                    </p>
                </div>

                {/* TODO: Carousel of last | interesting news */}

                {/* TODO: Tags */}

                {/* Spacer */}
                <div className={style.articleSpacer}></div>

                {/* Bottom Navigation */}
                <div className={style.articleBottomNavigation}>
                    <div className={style.botnavPrevPost}>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        <p>Предыдущий пост</p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <a href="/news" className={style.allNewsBtn}>
                            Все Новости
                        </a>
                    </div>

                    <div className={style.botnavNextPost}>
                        <p>Следующий пост</p>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>

                {/* Spacer */}
                <div className={style.articleSpacer}></div>

                {/* Comments Count */}
                <div className={style.commentsCount}>
                    <p>11 КОММЕНТАРИЕВ</p>
                </div>

                {/* Write Comment */}
                <div className={style.commentsWriteComment}>
                    <Textarea
                        isClearable
                        isRequired
                        errorMessage="Необходимо ввести текст..."
                        className="max-w-xxl"
                        maxRows={3}
                        label="Комментарий"
                        placeholder="Напишите комментарий"
                        variant="bordered"
                        radius="none"
                        // eslint-disable-next-line no-console
                        onClear={() => console.log("textarea cleared")}
                    />
                    <div style={{height: "10px"}}></div>
                    <Input
                        isRequired
                        errorMessage="Необходимо ввести имя..."
                        className="max-w-xxl"
                        label="Имя"
                        type="text"
                        placeholder="Напишите имя"
                        variant="bordered"
                        radius="none"
                    />
                    <div style={{height: "10px"}}></div>
                    <Button
                        color="success"
                        variant="solid"
                        radius="none"
                    >
                        Отправить
                    </Button>

                </div>
            </div>


            {/* Comments Section */}
            {/* TODO: выделить comment и reply в отдельный компонент */}
            {/* TODO: выделить textarea и input чтобы написать ответ на комментарий в отдельный компонент */}
            <div className={style.commentsCommentDiv}>
                <div className={style.commentLeft}>
                    <div className={style.commenterLogo}>
                        <img src="/templ_comment_ava.png" alt="Commenter Avatar" height="50px"/>
                    </div>
                </div>

                <div className={style.commentRight}>
                    <div className={style.commentTitle}>
                        <p>Username</p>
                        <p>01.01.2001 at 18:55</p>
                    </div>

                    <div className={style.commentContext}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet expedita voluptas vel
                        facilis esse autem perferendis debitis labore et, quis ipsa, itaque unde doloremque culpa
                        pariatur impedit optio fugit?
                    </div>

                    <div className={style.commentReplyBtn}>
                        <a href="#">Ответить</a>
                    </div>

                    <div className={style.articleSpacer}></div>

                    <div className={style.replyToCommentDiv}>
                        <div className={style.commentLeft}>
                            <div className={style.commenterLogo}>
                                <img src="/templ_comment_ava.png" alt="Commenter Avatar" height="50px"/>
                            </div>
                        </div>

                        <div className={style.commentRight}>
                            <div className={style.commentTitle}>
                                <p>Username</p>
                                <p>01.01.2001 at 18:55</p>
                            </div>

                            <div className={style.commentContext}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet expedita
                                voluptas vel facilis esse autem perferendis debitis labore et, quis ipsa, itaque unde
                                doloremque culpa pariatur impedit optio fugit?
                            </div>
                        </div>
                    </div>

                    <div className={style.articleSpacer}></div>

                    <div className={style.replyToCommentDiv}>
                        <div className={style.commentLeft}>
                            <div className={style.commenterLogo}>
                                <img src="/templ_comment_ava.png" alt="Commenter Avatar" height="50px"/>
                            </div>
                        </div>

                        <div className={style.commentRight}>
                            <div className={style.commentTitle}>
                                <p>Username</p>
                                <p>01.01.2001 at 18:55</p>
                            </div>

                            <div className={style.commentContext}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet expedita
                                voluptas vel facilis esse autem perferendis debitis labore et, quis ipsa, itaque unde
                                doloremque culpa pariatur impedit optio fugit?
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
