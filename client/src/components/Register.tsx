import {useState} from "react";

function Register() {
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
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