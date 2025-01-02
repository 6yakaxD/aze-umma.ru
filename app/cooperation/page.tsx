import Header from "@/components/base/header";
import AllContentWrapper from "@/components/base/all_content_wrapper";
import Footer from "@/components/base/footer";
import CoopSlider from "@/components/sliders/coop_slider";
import FormWrite from "@/components/form/write_form";


export default function CooperationPage() {
    return (
        <>
            {/* TODO: Подумать какие поставить на фон узоры или картинки, чтобы заполнить пустоты + не выглядела как больничка */}
            <Header></Header>
            <AllContentWrapper>
                <div className="flex justify-between align-items-center gap-x-20">
                    <div className="w-1/2">
                        <h1>О возможностях<br/>совместной<br/>работы на основе<br/>мультимедиа</h1>
                        <p>Быстро поощряйте эффективные действия до тактического сотрудничества и обмена идеями.
                            Монотонно привлекайте рыночный интеллектуальный капитал с помощью беспроводных возможностей.
                            Постепенно на основе производительности сети услуги по функционализированным процедурам
                            тестирования.</p>
                    </div>
                    <div className="w-1/2">
                        <img src="/azerbaijan.png"/>
                    </div>
                </div>
                <div className="flex justify-between align-items-center gap-x-20">
                    <div className="w-1/2">
                        <h2>Контакты</h2>
                        <h1>Хотите связаться с нашей командой?</h1>
                        <p>У вас есть вопросы о нашей продукции, вашем заказе или вы просто хотите поздороваться?
                            Заполните форму, и мы свяжемся с вами как можно скорее.</p>
                    </div>
                    <div className="w-1/2">
                        <p>Позвоните нам</p>
                        <h2>+7 (999) 999-99-99</h2>
                        <p>Если у вас есть какие-либо вопросы, комментарии или идеи, с нами можно связаться по телефону,
                            факсу или почте. По будням с 8.30 до 19.00. выходные 10.00-19.00</p>
                        <p>Электронная почта</p>
                        <p>example@example.com</p>
                    </div>
                </div>
                <div>
                    <h1>Свяжитесь с нами в любое время для сотрудничества с нами</h1>
                    <FormWrite></FormWrite>
                </div>
                <div className="mt-[25px]">
                    <h1>Мы сотрудничаем с:</h1>
                    <CoopSlider></CoopSlider>
                </div>
            </AllContentWrapper>
            <Footer></Footer>
        </>
    );
}