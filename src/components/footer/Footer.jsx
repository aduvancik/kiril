import React from 'react';
//style
import "./footer.scss";

export default function Footer() {

    const list = [
        {
            title: "Навігація по сайту",
            list: ["Про нас", "Відгуки про магазин", "Пошук за брендом",
                "Інформаційні статті", "Політика конфіденційності", "Мапа сайту"]
        },
        {
            title: "Наші контакти",
            list: [
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z" stroke="white" stroke-width="1.5" />
                        <path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="white" stroke-width="1.5" />
                    </svg>
                    <p>Місто Київ, вул. Авіаконструктора
                        Антонова, 5 літ. Б,
                        офіс №14</p>
                </>,
                <>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
                    </svg>
                    <div>
                        <p>+380 (044) 360-70-57</p>
                        <p>+380 (097) 163-79-08</p>
                    </div>
                </>,
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>info@installer-pro.com.ua</p>
                </>

            ]
        },
        {
            title: "Наш графік роботи",
            list: [<>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 9.08997H20.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.6947 13.7H15.7037" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.6947 16.7H15.7037" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.9955 13.7H12.0045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.9955 16.7H12.0045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.29431 13.7H8.30329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.29431 16.7H8.30329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p>Пн-Пт: з 10:00 до 17:00<br />
                    Сб: з 10:00 до 16:00<br />
                    Нд: вихідний</p>
            </>]
        },
        {
            title: "Наші соц мережі",
            list: [
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <p>Інсталлер Про</p>
                </>,
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.3996 9.50006L13.8996 11.0001C14.7996 11.6001 14.7996 12.5001 13.8996 13.1001L11.3996 14.6001C10.3996 15.2001 9.59961 14.7001 9.59961 13.6001V10.6001C9.59961 9.30006 10.3996 8.90006 11.3996 9.50006Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p>installer pro</p>
                </>,
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.6361 7H17.6477" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p>installer_pro</p>
                </>
            ]
        },
    ]

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }


    return (
        <div className="footer">
            <div className="footer__topSection">
                <div className="footer__section">
                    <h2>Будьте в курсі усіх акцій та актуальних новин)</h2>
                    <form className="footer__email-button">
                        <input className="footer__email" type="email" placeholder='Email' required/>
                        <button className='footer__button' type='send'>
                            <span>Підписатися</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.083 18.3334H2.91634" stroke="#2C2927" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.833 2.91663L4.16634 14.5833" stroke="#2C2927" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.833 11.475V2.91663H7.27467" stroke="#2C2927" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox" className='footer__checkbox' required/>
                            <label htmlFor="checkbox" ></label>
                            <span>Я прочитав <a href="/#">умови угоди</a> і згоден з вимогами</span>
                        </div>
                    </form>
                    <div className="footer__logo">
                        <img src="img/svgFotter/logo.png" alt="Логотип" />
                    </div>
                </div>
                <div className="footer__section">
                    <ul className="footer__list">
                        {list.map((section, index) =>
                            <li className='footer__listItem' key={index}> 
                                <h3 className='footer__titleSection'>{section.title}</h3>
                                <ul>
                                    {section.list.map((item, indexItem) =>
                                        <li className='footer__listItemLi' key={indexItem}>{item}</li >
                                    )}
                                </ul>
                            </li>

                        )}
                    </ul>
                </div>
            </div>
            <div className="footer__nameCompany">
                <img src="img/svgFotter/nameCompany.svg" alt="Назва компанії" />
            </div>
            <div className='footer__bottom'>
                <p>Всі права захищенні</p>
                <p className='footer__arrowTop' onClick={scroll}>
                    <span>Повернутись до гори</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.96784 1.87581C9.97849 1.87527 9.98921 1.875 10 1.875C10.16 1.875 10.3199 1.93602 10.4419 2.05806L12.9419 4.55806C13.186 4.80214 13.186 5.19786 12.9419 5.44194C12.6979 5.68602 12.3021 5.68602 12.0581 5.44194L10.625 4.00888V17.5C10.625 17.8452 10.3452 18.125 10 18.125C9.65482 18.125 9.375 17.8452 9.375 17.5V4.00888L7.94194 5.44194C7.69786 5.68602 7.30214 5.68602 7.05806 5.44194C6.81398 5.19786 6.81398 4.80214 7.05806 4.55806L9.55806 2.05806C9.61798 1.99814 9.68704 1.95292 9.76076 1.92242C9.82507 1.89576 9.8948 1.87952 9.96784 1.87581Z" fill="white" />
                    </svg>
                </p>
                <p>© 2013-2024 Installer-pro.</p>
            </div>
        </div>
    )
}
