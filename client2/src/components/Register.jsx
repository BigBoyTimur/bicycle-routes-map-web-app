import "./form.sass"
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        login: '',
        password: ''
    })

    const [registerError, setRegisterError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {login, password} = data
        try {
            const {data} = await axios.post('/register', {
                login, password
            })
            if (data.error) {
                setRegisterError(data.error)
            } else{
                setData({login: '', password: ''})
                alert('register successful')
                navigate('/login')
            }
        } catch (error) {
            
        }
    }


    return (
        <div className={"sign-form-container"}>
            <div className="sign-form-title">Регистрация</div>
            <form onSubmit={handleSubmit} className={"sign-form"}>
                {registerError && <div>{registerError}</div>}
                <div className="form-input-container">
                    <label htmlFor="login">Логин</label>
                    <input id="login" type="text" value={data.login}
                           onChange={(e) => setData({...data, login: e.target.value})}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password"
                           onChange={(e) => setData({...data, password: e.target.value})}/>
                </div>
                <button className="sign-form__button" type="submit">Зарегестрироваться</button>
            </form>
        </div>
    );
}

export default Register;