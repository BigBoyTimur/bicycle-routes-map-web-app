import {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const [loginError, setLoginError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {login, password} = data
        try {
            const {data} = await axios.post('/login', {
                login, password
            });

            if (data.error) {
                setLoginError(data.error);
            } else{
                setData({login: '', password: ''})
                navigate('/')
                window.location.reload()
            }
        } catch (error) {
            
        }
    }
    return (
        <div className={"sign-form-container"}>
            <div className="sign-form-title">Вход</div>
            <form onSubmit={handleSubmit} className={"sign-form"}>
                {loginError && <div>{loginError}</div>}
                <div className="form-input-container">
                    <label htmlFor="login">Логин</label>
                    <input id="login" type="text" onChange={(e) => setData({...data, login: e.target.value})}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password"
                           onChange={(e) => setData({...data, password: e.target.value})}/>
                </div>
                <button className="sign-form__button" type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;