import axios  from "axios";
import {createContext, useEffect, useState} from "react";

export interface UserContextProps{
    user: { userName: string, userId: number } | null,
    setUser?: any
}
export const UserContext = createContext<UserContextProps>({user: null});

export function UserContextProvider({children}: any) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}