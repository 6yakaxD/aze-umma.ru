"use client"

import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import style from './page.module.scss';
import AllContentWrapper from "@/components/base/all_content_wrapper";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";

export default function AboutPage() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Header></Header>

            <div>
                <div className={style.videoBackground}>
                    <video autoPlay muted loop playsInline>
                        <source src="/aze_video.mp4" type="video/mp4"/>
                    </video>
                    <div className={style.textOverlay}>
                        <h1>История и Причина<br/>Создания Диаспоры</h1>
                    </div>
                </div>
                <div className={style.mainContentDiv}>

                    <div className={style.mainBlock1}>
                        <AllContentWrapper>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img src="/logo_umma.png" style={{height: "300px"}} alt="Logo"/>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <p style={{marginRight: '15px'}}>
                                        История. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facere
                                        laboriosam similique
                                        minus voluptatibus nesciunt ducimus qui fuga molestias sed. Corrupti, quod
                                        accusamus.
                                        Quia adipisci ab
                                        mollitia illo sapiente deleniti!
                                    </p>
                                    <p>
                                        Причина. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facere
                                        laboriosam similique
                                        minus voluptatibus nesciunt ducimus qui fuga molestias sed. Corrupti, quod
                                        accusamus.
                                        Quia adipisci ab
                                        mollitia illo sapiente deleniti!
                                    </p>
                                </div>
                            </div>
                        </AllContentWrapper>
                    </div>

                    <AllContentWrapper>
                        <div className={style.mainBlock2}>
                            <h1>Работаем с 2023 года</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis pariatur earum
                                distinctio unde
                                dolor velit, nihil exercitationem autem cumque aut! Assumenda eum earum magnam animi
                                officiis excepturi,
                                facere rerum. Assumenda eum earum magnam animi officiis</h3>
                            <h4 className="underline cursor-pointer mt-[10px]">
                                <a onClick={onOpen} >
                                    И действуем на основании<br/>228 статьи ФЗ РФ
                                </a>
                            </h4>

                            <Modal
                                backdrop="blur"
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                            >
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                            <ModalBody>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    pulvinar risus non
                                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus,
                                                    sed porttitor
                                                    quam.
                                                </p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>

                        </div>
                    </AllContentWrapper>

                    <AllContentWrapper>
                        <div className={style.mainBlock3}>
                            <h1>Наши Цели</h1>
                            <div className={style.accordions}>
                                <div className={style.accordion}>
                                    <div className={style.title}>Сохранение языка</div>
                                    <div className={style.text}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam
                                        nostrum
                                        quaerat repellat
                                        excepturi obcaecati consequuntur incidunt odit quisquam fuga reprehenderit
                                        maiores,
                                        possimus ullam,
                                        quis laborum accusamus. Molestias, veritatis odit?
                                    </div>
                                </div>
                                <div className={style.accordion}>
                                    <div className={style.title}>Сохранение культуры</div>
                                    <div className={style.text}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias libero
                                        repudiandae ea aliquam,
                                        a, omnis voluptas esse ad, accusantium facere nam. Blanditiis cupiditate quam
                                        veniam
                                        est. Voluptas,
                                        similique at?
                                    </div>
                                </div>
                                <div className={style.accordion}>
                                    <div className={style.title}>Образование</div>
                                    <div className={style.text}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet unde iure eveniet
                                        vitae ex, cum
                                        cumque nihil! Reprehenderit ipsam qui repudiandae temporibus rem, et sint a
                                        quaerat
                                        aut quos cum?
                                    </div>
                                </div>
                                <div className={style.accordion}>
                                    <div className={style.title}>Традиции</div>
                                    <div className={style.text}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maxime nemo
                                        optio
                                        quis, nisi hic
                                        perspiciatis maiores cum rem aliquid ea molestias sint non incidunt veritatis
                                        eius
                                        blanditiis error
                                        fugiat!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AllContentWrapper>

                    <div className={style.mainBlock4}>
                        <AllContentWrapper>
                            <h1>МЫ ПОМОГАЕМ...</h1>
                        </AllContentWrapper>
                    </div>

                    <AllContentWrapper>
                        <div className={style.mainBlock5}>
                            <h1>О ВСЕЙ НАШЕЙ ДЕЯТЕЛЬНОСТИ<br/>ВЫ МОЖЕТЕ ОЗНАКОМИТЬСЯ</h1>
                            <a href="#">ЗДЕСЬ</a>
                        </div>
                    </AllContentWrapper>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}
