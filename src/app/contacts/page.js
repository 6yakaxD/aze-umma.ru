import OrgBanner from "@/components/header/orgBanner";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";

import style from './page.module.scss';
import AllContent from "@/components/allContentWrapper/allContent";


export default function Contacts() {
    return (
        <>
            <OrgBanner/>
            <Navbar/>

            <AllContent>
                <div>
                    <div className={style.contantData}>
                        <h1 style={{fontFamily: 'FiraSans-Ultra', fontSize: '30px'}}>Контактные данные</h1>
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
                            {Array(4).fill().map((_, index) => (
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
                            {Array(4).fill().map((_, index) => (
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

                    <div className={style.questionFormWrapper}>
                        <div className={style.questionForm}>
                            <header>Написать председателю</header>
                            <form action="#">
                                <div className={style.dblField}>
                                    <div className={style.field}>
                                        <input type="text" name="name" placeholder="Ваше имя"/>
                                        <i className='fa fa-user'></i>
                                    </div>
                                    <div className={style.field}>
                                        <input type="text" name="email" placeholder="Ваша почта"/>
                                        <i className='fa fa-envelope'></i>
                                    </div>
                                </div>
                                <div className={style.message}>
                                    <textarea placeholder="Введите ваше сообщение" name="message"></textarea>
                                </div>
                                <div className={style.buttonArea}>
                                    <button type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AllContent>

            <Footer/>
        </>
    );
}
