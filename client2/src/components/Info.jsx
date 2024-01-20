import "./info.sass"
import {Link} from "react-router-dom";
function Info(props) {
    return (
        <div className="info">
            <div className="info__container">
                <div className="info__title">
                    ВелоКарта
                </div>
                <div className="info__text">
                    <p className="info__text_p1">Это веб-приложение, позволяющее пользователям находить велосипедные
                        маршруты на карте.
                        Зарегистрированные пользователи имеют возможность сохранять избранные
                        маршруты.</p>
                    <p className="info__text_p2">Приложение разработано и использованием <a href="">открытого
                        датасета</a> с портала data.mos.ru.</p>
                </div>
                <svg viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M65.4342 191.565C84.5649 191.565 100.073 176.021 100.073 156.848C100.073 137.674 84.5649 122.131 65.4342 122.131C46.3034 122.131 30.7948 137.674 30.7948 156.848C30.7948 176.021 46.3034 191.565 65.4342 191.565Z"
                        stroke="#15173F" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M123.995 156.848H115.607C115.594 147.998 113.256 139.307 108.826 131.647C104.395 123.986 98.0292 117.624 90.3652 113.199C89.2296 112.558 88.2452 111.68 87.4791 110.625C86.713 109.569 86.183 108.361 85.9251 107.083C85.6672 105.805 85.6875 104.486 85.9846 103.216C86.2817 101.946 86.8486 100.755 87.6468 99.724L106.636 75.1813C108.081 73.3155 110.201 72.0912 112.539 71.7717C114.878 71.4522 117.248 72.0629 119.141 73.4727L130.791 82.1713C139.512 88.6598 150.094 92.16 160.964 92.1515H178.905"
                        stroke="#15173F" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M176.575 191.565C195.706 191.565 211.215 176.021 211.215 156.848C211.215 137.674 195.706 122.131 176.575 122.131C157.444 122.131 141.936 137.674 141.936 156.848C141.936 176.021 157.444 191.565 176.575 191.565Z"
                        stroke="#15173F" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M176.575 156.848L163.411 104.151" stroke="#15173F" stroke-width="1.15"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M65.4342 164.032C69.4019 164.032 72.6183 160.816 72.6183 156.848C72.6183 152.88 69.4019 149.664 65.4342 149.664C61.4665 149.664 58.25 152.88 58.25 156.848C58.25 160.816 61.4665 164.032 65.4342 164.032Z"
                        stroke="#15173F" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M140.421 70.9873C146.727 70.9873 151.838 65.8758 151.838 59.5703C151.838 53.2649 146.727 48.1533 140.421 48.1533C134.116 48.1533 129.004 53.2649 129.004 59.5703C129.004 65.8758 134.116 70.9873 140.421 70.9873Z"
                        stroke="#15173F" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M125.276 93.5883L103.724 119.49" stroke="#15173F" stroke-width="1.15"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M39.0663 104.384H58.5995" stroke="#15173F" stroke-width="1.15" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M58.5995 81.7442H78.1327" stroke="#15173F" stroke-width="1.15" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M30.0182 81.7442H36.0373" stroke="#15173F" stroke-width="1.15" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M91.6855 57.5898H52.5803" stroke="#15173F" stroke-width="1.15" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                <div className="info__link-container">
                    <Link to="/map" className="info__link">Перейти к карте</Link>
                </div>
            </div>
        </div>
    );
}

export default Info;