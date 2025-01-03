import Header from "@/components/base/header";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import Footer from "@/components/base/footer";
import style from './page.module.scss';
import FormWrite from "@/components/form/write_form";


export default function ContactsPage() {
    return (
        <>
            <Header></Header>
            <AllContentWrapper>
                <div>
                    <div className={style.contantData}>
                        <h1 className="font-roboto text-3xl font-bold">Контактные данные</h1>
                        <div className={style.contact3Options}>
                            <div className={style.contactOption}>
                                <img src="/support.png" height="80px" alt="Support"/>
                                <h3>Позвоните нам</h3>
                                <h4>Есть вопросы? Мы поможем!</h4>
                                <a href="#">8 999 999-99-99</a>
                            </div>
                            <div className={style.contactOption}>
                                <img src="/email.png" height="80px" alt="Email"/>
                                <h3>Напишите нам</h3>
                                <h4>Идеи? Предложения?<br/>Мы открыты для любых вопросов!</h4>
                                <a href="#">support@uze_umma.ru</a>
                            </div>
                            <div className={style.contactOption}>
                                <img src="/star.png" height="80px" alt="Feedback"/>
                                <h3>Обратная связь</h3>
                                <h4>Поделитесь мнением о нашей работе и помогите нам стать лучше</h4>
                                <a href="#">Написать</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.otherContentData}>
                        <div className={style.leftOtherContentData}>
                            <div className={style.otherContactSpacer}></div>

                            {    // @ts-ignore
                                Array(4).fill().map((_, index) => (
                                    <div key={index} className={style.otherContentDataElem}>
                                        <p>Отдел образования</p>
                                        <div className={style.otherContentDataElemContacts}>
                                            <p>Таджеддинов Э.Э.</p>
                                            <a>8 999 999-99-99</a>
                                            <a>edu@aze-umma.ru</a>
                                        </div>
                                    </div>
                                ))}
                            <div className={style.otherContactSpacer}></div>
                        </div>

                        <div className={style.rightOtherContentData}>
                            <div className={style.otherContactSpacer}></div>
                            {// @ts-ignore
                                Array(4).fill().map((_, index) => (
                                <div key={index} className={style.otherContentDataElem}>
                                    <p>Отдел образования</p>
                                    <div className={style.otherContentDataElemContacts}>
                                        <p>Таджеддинов Э.Э.</p>
                                        <a>8 999 999-99-99</a>
                                        <a>edu@aze-umma.ru</a>
                                    </div>
                                </div>
                            ))}
                            <div className={style.otherContactSpacer}></div>
                        </div>
                    </div>

                    <FormWrite></FormWrite>

                </div>
            </AllContentWrapper>
            <Footer></Footer>
        </>
    );
}