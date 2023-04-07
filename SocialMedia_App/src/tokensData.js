/* import axios from "axios";
import React, { useEffect, useState } from 'react'
export const UserContext = React.createContext();

function tokensData() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getdata = async () => {
            const token = localStorage.getItem('token');
            try {
                 const res = await axios.get(`http://localhost:3000/api/v1/user/info`, {
                    headers: { "token": `KIWIBearerToken__${token}` }
                })
                setUser(res.data.user)
            } catch (error) {
                console.log(error);
            }
        }
        getdata();
    }, []);

    return (
        <></>
    )
}

export default tokensData */