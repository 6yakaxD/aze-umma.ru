import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";

import style from './page.module.scss';
import MainContent from "@/components/mainContent/mainContentWrapper/mainContent";


export default function About() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>


            <div>
                <div className={style.videoBackground}>
                    <video autoPlay muted loop>
                        <source src="/aze_video.mp4" type="video/mp4"/>
                    </video>
                    <div className={style.textOverlay}>
                        <h1>История и Причина<br/>Создания Диаспоры</h1>
                    </div>
                </div>
                <div className={style.mainContentDiv}>


                    <div className={style.mainBlock1}>
                        <MainContent>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img src="/logo_umma.png" height={300} alt="Logo"/>
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
                        </MainContent>

                    </div>

                    <MainContent>
                        <div className={style.mainBlock2}>
                            <h1>Работаем с 2023 года</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis pariatur earum
                                distinctio unde
                                dolor velit, nihil exercitationem autem cumque aut! Assumenda eum earum magnam animi
                                officiis excepturi,
                                facere rerum. Assumenda eum earum magnam animi officiis</h3>
                            <h4 style={{textDecoration: 'underline'}}>
                                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                                    И действуем на основании<br/>228 статьи ФЗ РФ
                                </a>
                            </h4>
                        </div>
                    </MainContent>

                    <MainContent>
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
                    </MainContent>

                    <div className={style.mainBlock4}>
                        <MainContent>
                            <h1>МЫ ПОМОГАЕМ...</h1>
                        </MainContent>
                    </div>


                    <MainContent>

                        <div className={style.mainBlock5}>
                            <h1>О ВСЕЙ НАШЕЙ ДЕЯТЕЛЬНОСТИ<br/>ВЫ МОЖЕТЕ ОЗНАКОМИТЬСЯ</h1>
                            <a href="#">ЗДЕСЬ</a>
                        </div>
                    </MainContent>
                </div>
            </div>

            <Footer/>
        </>
    );
}
