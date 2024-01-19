import {useContext} from "react";
import {UserContext} from "../../context/userConext.tsx";

function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        <div>
            {user && (<h2>Hi {user.userName}!</h2>)}
        </div>
    );
}

export default Dashboard;