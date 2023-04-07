import React, { useContext, useEffect, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { UserContext } from '../../App.js';


const Container = styled.div`
 position:sticky;
 top: 0;

z-index: 99;
 `
const Image = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 object-fit: cover;
 margin-right: 10px;

`
const Navbar = () => {
  const user = useContext(UserContext)
  console.log(user )
  return (
    <>
      <Container className=" bg-white   navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">KONOSHMA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" ><HomeOutlinedIcon /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" ><DarkModeOutlinedIcon /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" ><GridViewOutlinedIcon /> </Link>
              </li>
              <form className="d-flex" role="search">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><SearchOutlinedIcon /></button>
              </form>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/" ><PersonOutlinedIcon /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" ><EmailOutlinedIcon /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" ><NotificationsOutlinedIcon /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active bg-primary text-white rounded-pill" to="/Profile">
             {/*      {  user.profilePic ? <Image src={user.profilePic} /> : <AccountCircleOutlinedIcon /> } 
                {user.userName} */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>

  )
}

export default Navbar