'use client'
import style from './page.module.scss';
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import {Accordion, AccordionItem} from "@nextui-org/react";
import React from "react";

export default function Structure() {

    return (
        <>
            <Header/>
            <div className={style.mainContentDiv}>

                <div className={style.wrappper}>
                    <h1 className="font-roboto font-bold text-3xl flex justify-center">
                        Структура Диаспоры
                    </h1>

                    {/* TODO: попытаться сделать схему диаспоры интерактивной в виде анимированного адаптивного svg - создал в chatgpt чат на аккаунте r4m1l210605@gmail.com  */}
                    <div className={style.photoStructure}>
                        <img src="/чужая_структура.png" height={600} width={800} alt="Структура"/>
                    </div>

                    <div className="mt-10" id="accordions">
                        <Accordion variant="splitted">
                            <AccordionItem key="1" aria-label="Председатель" title="Председатель">
                                Председатель
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Отдел образования" title="Отдел образования">
                                Отдел образования
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Отдел старейшин" title="Отдел старейшин">
                                Отдел старейшин
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="Отдел спорта и туризма" title="Отдел спорта и туризма">
                                Отдел спорта и туризма
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
