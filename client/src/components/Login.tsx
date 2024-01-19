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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                navigate('/dashboard')
                window.location.reload()
            }
        } catch (error) {
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {loginError && <div>{loginError}</div>}
                <label htmlFor="login">Логин</label>
                <input id="login" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, login: e.target.value})}/>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, password: e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;