import React from 'react'
import "./header.scss";
import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';

const buttons = [<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.4955 12H15.5045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.49451 12H8.50349" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    ,
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>,
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
];

const arrowDown = <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6004 1.45831L9.16706 6.89165C8.52539 7.53331 7.47539 7.53331 6.83372 6.89165L1.40039 1.45831" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>



export default function Header() {
    return (
        <header className='header'>
            <div className="header__topHeader">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span>
                    БЕЗКОШТОВНА ДОСТАВКА ВІД 2000 ГРН
                </span>
            </div>
            <div className="header__bottomHeader">
                <div className='header__leftMenu-section'>
                    <div className="header__logo-section">
                        <Link className='header__logo' to="/">
                            <img src="img/svgHeader/subtract.png" alt="Логотип" />
                            <div>
                                <h3>INSTALLER PRO</h3>
                                <div className='header__audioText'>
                                    аудіо - відео системи
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="header__list-section">
                        <ul className='header__navigation'>
                            <li className="header__navigation-item">
                                <span>Каталог</span>
                                {arrowDown}
                            </li>
                            <li className="header__navigation-item">
                                <span>Доставка</span>
                                {arrowDown}
                            </li>
                            <li className="header__navigation-item">
                                Акції
                            </li>
                            <li className="header__navigation-item">
                                Контакти
                            </li>
                            <li className="header__navigation-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header__rightMenu-section">
                    <a href="tel:+380 (044) 360-70-57" className="header__buttonNumber">
                        +380 (044) 360-70-57
                    </a>
                    <ul className="header__buttons">
                        {buttons.map((button, key) =>
                            <li className='header__button' key={key}>{button}</li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}
