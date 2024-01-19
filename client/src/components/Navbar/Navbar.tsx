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
                    Велодорожки
                </div>
                <div className="nav__menu">
                    <Link to="/">Главная</Link>
                    <Link to="/register">Регистрация</Link>
                    <Link to="/login">Вход</Link>
                    {!user && <button onClick={logout}>Выйти</button>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;