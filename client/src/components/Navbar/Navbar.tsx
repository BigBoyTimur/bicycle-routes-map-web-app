import './navbar.sass';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../../context/userConext.tsx";

function Navbar() {
    const logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        window.location.reload()
    }
    const {user} = useContext(UserContext)
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo-container">
                    <Link className="nav__link" to="/">Главная</Link>
                </div>
                <div className="nav__menu">
                    {!user && <Link className="nav__link" to="/register">Регистрация</Link>}
                    {!user && <Link className="nav__link" to="/login">Вход</Link>}
                    {user && <button className="nav__button" onClick={logout}>Выйти</button>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;