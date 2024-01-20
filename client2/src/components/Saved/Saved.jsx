import './saved.sass'
import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../context/userConext.jsx";
import * as path from "path";


function Saved() {
    const { user} = useContext(UserContext)
    const [saved, setSaved] = useState([])

    const getSaved = async () => {
        const { data } = await axios.get('/userPaths')
        setSaved(data)
    }
    const deleteUserPath = async (path_id) => {
        const { data } = await axios.post('/deleteUserPath', {
            path_id
        })
        await getSaved()
    }

    useEffect(() => {
        getSaved()
    }, []);
    return (
        // <div className={"saved"}>
        //     {saved.map((item) => {
        //         return <div key={item.path_id}>{item.Name}: {item.Location}</div>
        //     })}
        // </div>
        <div className={"saved"}>
            <div className="saved__container">
                <table className="saved__table">
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Местоположение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {saved.map((item) => {
                        return (
                            <tr key={item.path_id}>
                                <td>{item.Name}</td>
                                <td>{item.Location}</td>
                                <td>
                                    <button onClick={() => deleteUserPath(item.path_id)}>удалить</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Saved;