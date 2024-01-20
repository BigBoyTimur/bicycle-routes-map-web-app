import React, {useContext} from 'react';
import './modal.sass'
import {UserContext} from "../../context/userConext.jsx";
import axios from "axios";
function Modal({active, setActive, pathId, pathName}) {
    const {user} = useContext(UserContext)
    const clickHandler = async (e) => {
        e.preventDefault();
        const user_id = user.id;
        const { data }  = await axios.post('/userPath', {
            pathId, pathName, user_id
        })
        if (data.error) {
            alert(data.error)
        } else {
            alert("Точка успешно добавлена")
        }
    }
    return (
        <div className={(active ? "modal active" : "modal")} onClick={() => setActive(false)}>
            <div className="modal__conent" onClick={(e) => e.stopPropagation()}>
                <div>{pathName}</div>
                {user && <button onClick={clickHandler}>Добавить в избранное</button>}
            </div>
        </div>
    );
}

export default Modal;