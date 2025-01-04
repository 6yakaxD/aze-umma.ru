import CoopSlider from "@/components/sliders/coop_slider";
import FormWrite from "@/components/form/write_form";
import style from "./page.module.scss";
import React from "react";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import BackgroundImgWrapper from "@/components/background-img-wrapper";


export default function CooperationPage() {
    return (
        <>

            {/* TODO: адаптацию на эту страницу */}
            <Header></Header>

            <BackgroundImgWrapper>
                <div className={style.mainContentDiv}>
                    {/* TODO: Подумать какие поставить на фон узоры или картинки, чтобы заполнить пустоты + не выглядела как больничка */}
                    <div className={style.topContentWrapper}>
                        <div className={style.topContentWrapperLeft}>
                            <h1>
                                О возможностях совместной работы на основе мультимедиа
                            </h1>
                            <p>
                                Быстро поощряйте эффективные действия до тактического сотрудничества и обмена идеями.
                                Монотонно привлекайте рыночный интеллектуальный капитал с помощью беспроводных
                                возможностей.
                                Постепенно на основе производительности сети услуги по функционализированным процедурам
                                тестирования.
                            </p>
                        </div>
                        <div className={style.topContentWrapperRight}>
                            <img src="/azerbaijan.png" alt="Azerbaijan"/>
                        </div>
                    </div>

                    <div className={style.bottomContentWrapper}>
                        <div className={style.bottomContentWrapperLeft}>
                            <h1>Хотите связаться с нашей командой?</h1>
                            <p>
                                У вас есть вопросы о нашей продукции, вашем заказе или вы просто хотите поздороваться?
                                Заполните форму, и мы свяжемся с вами как можно скорее.
                            </p>
                            <h2>
                                Свяжитесь в любое время для сотрудничества с нами
                            </h2>
                        </div>
                        <div className={style.bottomContentWrapperRight}>
                            <h2>Позвоните нам</h2>
                            <h1>+7 (999) 999-99-99</h1>
                            <p className={`${style.fontRoboto} ${style.fontLight} ${style.mt20}`}>
                                Если у вас есть какие-либо вопросы, комментарии или идеи, с нами можно связаться по
                                телефону,
                                факсу или почте. По будням с 8.30 до 19.00. выходные 10.00-19.00
                            </p>
                            <h1>example@example.com</h1>
                        </div>
                    </div>
                    <div>
                        <FormWrite/>
                    </div>
                    <div className={style.coopTitle}>
                        <h1>Мы сотрудничаем с</h1>
                        <CoopSlider/>
                    </div>
                </div>
            </BackgroundImgWrapper>
            <Footer></Footer>
        </>

    )
}
