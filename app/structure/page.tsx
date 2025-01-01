'use client'
import {useState} from "react";
import style from './page.module.scss';
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import AllContentWrapper from "@/components/base/all_content_wrapper";

type TabName = 'director_struct' | 'education_struct' | 'oldest_struct';

export default function Structure() {
    const [activeTab, setActiveTab] = useState<TabName>('director_struct');

    const openTab = (tabName: TabName): void => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Header/>
            <AllContentWrapper>
                <div>
                    <h1 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        Структура Диаспоры
                    </h1>

                    <div className={style.photoStructure}>
                        <img src="/чужая_структура.png" height={600} width={800} alt="Структура"/>
                    </div>

                    {/* TODO: попытаться сделать схему диаспоры интерактивной в виде анимированного адаптивного svg  */}
                    {/* TODO: заменить на Accordion из nextui */}
                    <div className={style.mainContentDiv}>
                        <div className={style.contentLeft}>
                            <div className={style.tab}>
                                <button
                                    className={`${style.tablinks} ${activeTab === 'director_struct' ? style.active : ''}`}
                                    onClick={() => openTab('director_struct')}>
                                    Председатель
                                </button>
                                <button
                                    className={`${style.tablinks} ${activeTab === 'education_struct' ? style.active : ''}`}
                                    onClick={() => openTab('education_struct')}>
                                    Отдел образования
                                </button>
                                <button
                                    className={`${style.tablinks} ${activeTab === 'oldest_struct' ? style.active : ''}`}
                                    onClick={() => openTab('oldest_struct')}>
                                    Отдел старейшин
                                </button>
                            </div>
                        </div>

                        <div className={style.contentRight}>
                            {activeTab === 'director_struct' && (
                                <div id="director_struct" className={style.tabcontent}>
                                    <h3>Председатель</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ea ex officia
                                        doloribus facere provident, quia aliquam impedit debitis ipsa, dolore placeat.
                                        Molestias provident hic, repudiandae minima obcaecati repellat voluptatum?</p>
                                    <h1>Про председателя сразу</h1>
                                </div>
                            )}

                            {activeTab === 'education_struct' && (
                                <div id="education_struct" className={style.tabcontent}>
                                    <h3>Отдел образования</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, autem dolorum nisi
                                        saepe vel accusamus voluptates eius magnam adipisci blanditiis cumque error
                                        consequuntur dolores quasi mollitia corporis! Illum, et ratione?</p>
                                    <h1>Сначала про сам отдел образования, а потом про руководителя направления</h1>
                                </div>
                            )}

                            {activeTab === 'oldest_struct' && (
                                <div id="oldest_struct" className={style.tabcontent}>
                                    <h3>Отдел старейшин</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, incidunt! Illum
                                        officia at quo voluptatum corporis sapiente quis assumenda ipsa ducimus ex
                                        impedit
                                        doloremque placeat, quia consequuntur earum. Magnam, animi.</p>
                                    <h1>Сначала про сам отдел старейшин, а потом про руководителя направления</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </AllContentWrapper>
            <Footer/>
        </>
    );
}
