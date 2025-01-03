import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import CoopSlider from "@/components/sliders/coop_slider";
import FormWrite from "@/components/form/write_form";
import style from "./page.module.scss";
import React from "react";


export default function CooperationPage() {
    return (
        <>
            {/* TODO: Подумать какие поставить на фон узоры или картинки, чтобы заполнить пустоты + не выглядела как больничка */}
            <Header></Header>
            <div className={style.mainContentDiv}>

                <div className="flex justify-between align-items-center gap-x-20">
                    <div className="w-1/2">
                        <h1 className="font-roboto font-extrabold text-6xl">О возможностях<br/>совместной<br/>работы на
                            основе<br/>мультимедиа</h1>
                        <p className="font-roboto text-xl font-normal mt-[30px]">Быстро поощряйте эффективные действия
                            до тактического сотрудничества и обмена идеями.
                            Монотонно привлекайте рыночный интеллектуальный капитал с помощью беспроводных возможностей.
                            Постепенно на основе производительности сети услуги по функционализированным процедурам
                            тестирования.</p>
                    </div>
                    <div className="w-1/2 mt-[-30px]">
                        <img src="/azerbaijan.png"/>
                    </div>
                </div>

                <div className="flex justify-between align-items-center gap-x-20 mt-[30px]">
                    <div className="w-1/2">
                        <h2 className="font-roboto font-extrabold text-4xl">Контакты</h2>
                        <h1 className="font-roboto font-normal text-5xl mt-[20px]">Хотите связаться с нашей
                            командой?</h1>
                        <p className="font-roboto font-light mt-[20px]">У вас есть вопросы о нашей продукции, вашем
                            заказе или вы просто хотите поздороваться?
                            Заполните форму, и мы свяжемся с вами как можно скорее.</p>
                        <h1 className="font-roboto text-xl font-normal mt-[30px]">Свяжитесь с нами в любое время для
                            сотрудничества с нами</h1>

                    </div>
                    <div className="w-1/2">
                        <p className="font-roboto font-normal text-3xl mt-[20px]">Позвоните нам</p>
                        <h2 className="font-roboto font-extrabold text-4xl mt-[20px]">+7 (999) 999-99-99</h2>
                        <p className="font-roboto font-light mt-[20px]">Если у вас есть какие-либо вопросы, комментарии
                            или идеи, с нами можно связаться по телефону,
                            факсу или почте. По будням с 8.30 до 19.00. выходные 10.00-19.00</p>
                        <p className="font-roboto font-normal text-3xl mt-[20px]">Электронная почта</p>
                        <p className="font-roboto font-extrabold text-4xl mt-[20px]">example@example.com</p>
                    </div>
                </div>
                <div>
                    <FormWrite></FormWrite>
                </div>
                <div className="mt-[25px]">
                    <h1 className="font-roboto text-3xl font-bold">Мы сотрудничаем с</h1>
                    <CoopSlider></CoopSlider>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}