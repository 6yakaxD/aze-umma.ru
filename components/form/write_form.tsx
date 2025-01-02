import style from "./write_form.module.scss";

export default function FormWrite (){
    return (
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
    )
}