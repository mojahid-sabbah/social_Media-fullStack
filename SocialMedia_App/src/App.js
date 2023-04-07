import { Navbar, Register, Login, ProtectedRoutes, Home, Profile, Leftbar, Rigthbar, Outlet } from './index_exports';
import { Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

import axios from "axios";

export const UserContext = React.createContext();


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/user/info`, {
          headers: { "token": `KIWIBearerToken__${token}` }
        });
        console.log(res.data.user)
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);




  let [loginData, setloginData] = useState('')
  let setUserData = () => {
    let token = localStorage.getItem('token')
    let decoded = jwtDecode(token)
    setloginData(decoded)
  }

  /*   useEffect(() => {
      if (localStorage.getItem('token')) {
        setUserData();
      }
    }, [])
   */

  const currentUser = false
  const Layout = () => {
    return (
      <>
        <div className='Theme_Dark' style={{ backgroundColor: "#d7f6f6" }}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />
            <Outlet />
            <Rigthbar />
          </div>
        </div>
      </>
    )
  }

  return (

    <UserContext.Provider value={user}>
      <Routes>
        <Route path='Regester' element={<Register />}></Route>
        <Route path=' ' element={<Navbar />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Layout />} >
          <Route path='Profile/:id' element={<Profile />} />
        </Route>
        <Route path='Profile' element={<Profile />} />
        <Route element={<ProtectedRoutes loginData={loginData} />}>
        </Route>

      </Routes>

    </UserContext.Provider>
  );
}

export default App;
