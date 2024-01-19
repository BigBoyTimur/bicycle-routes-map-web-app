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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <div>
            <form onSubmit={handleSubmit}>
                {registerError && <div>{registerError}</div>}
                <label htmlFor="login">Логин</label>
                <input id="login" type="text" value={data.login} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, login: e.target.value})}/>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, password: e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;