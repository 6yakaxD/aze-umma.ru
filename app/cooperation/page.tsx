import CoopSlider from "@/components/sliders/coop_slider";
import FormWrite from "@/components/form/write_form";
import style from "./page.module.scss";
import React from "react";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";


export default function CooperationPage() {
    return (
        <>
            {/* TODO: адаптацию на эту страницу */}
            <Header></Header>
            <div className={style.mainContentDiv}>
                {/* TODO: Подумать какие поставить на фон узоры или картинки, чтобы заполнить пустоты + не выглядела как больничка */}
                <div className={`${style.flex} ${style.justifyBetween} ${style.alignItemsCenter} ${style.gapX20}`}>
                    <div className={style.wHalf}>
                        <h1 className={`${style.fontRoboto} ${style.fontExtrabold} ${style.text6xl}`}>
                            О возможностях<br/>совместной<br/>работы на основе<br/>мультимедиа
                        </h1>
                        <p className={`${style.fontRoboto} ${style.text4xl} ${style.fontNormal} ${style.mt30}`}>
                            Быстро поощряйте эффективные действия до тактического сотрудничества и обмена идеями.
                            Монотонно привлекайте рыночный интеллектуальный капитал с помощью беспроводных возможностей.
                            Постепенно на основе производительности сети услуги по функционализированным процедурам
                            тестирования.
                        </p>
                    </div>
                    <div className={`${style.wHalf} ${style.mtNegative30}`}>
                        <img src="/azerbaijan.png" alt="Azerbaijan"/>
                    </div>
                </div>

                <div
                    className={`${style.flex} ${style.justifyBetween} ${style.alignItemsCenter} ${style.gapX20} ${style.mt30}`}>
                    <div className={style.wHalf}>
                        <h2 className={`${style.fontRoboto} ${style.fontExtrabold} ${style.text4xl}`}>Контакты</h2>
                        <h1 className={`${style.fontRoboto} ${style.fontNormal} ${style.text5xl} ${style.mt20}`}>
                            Хотите связаться с нашей командой?
                        </h1>
                        <p className={`${style.fontRoboto} ${style.fontLight} ${style.mt20}`}>
                            У вас есть вопросы о нашей продукции, вашем заказе или вы просто хотите поздороваться?
                            Заполните форму, и мы свяжемся с вами как можно скорее.
                        </p>
                        <h1 className={`${style.fontRoboto} ${style.text3xl} ${style.fontNormal} ${style.mt30}`}>
                            Свяжитесь с нами в любое время для сотрудничества с нами
                        </h1>
                    </div>
                    <div className={style.wHalf}>
                        <p className={`${style.fontRoboto} ${style.fontNormal} ${style.text3xl} ${style.mt20}`}>Позвоните
                            нам</p>
                        <h2 className={`${style.fontRoboto} ${style.fontExtrabold} ${style.text4xl} ${style.mt20}`}>+7
                            (999)
                            999-99-99</h2>
                        <p className={`${style.fontRoboto} ${style.fontLight} ${style.mt20}`}>
                            Если у вас есть какие-либо вопросы, комментарии или идеи, с нами можно связаться по
                            телефону,
                            факсу или почте. По будням с 8.30 до 19.00. выходные 10.00-19.00
                        </p>
                        <p className={`${style.fontRoboto} ${style.fontNormal} ${style.text3xl} ${style.mt20}`}>Электронная
                            почта</p>
                        <p className={`${style.fontRoboto} ${style.fontExtrabold} ${style.text4xl} ${style.mt20}`}>example@example.com</p>
                    </div>
                </div>
                <div>
                    <FormWrite/>
                </div>
                <div className={style.mt25}>
                    <h1 className={`${style.fontRoboto} ${style.text3xl} ${style.fontBold}`}>Мы сотрудничаем с</h1>
                    <CoopSlider/>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}
