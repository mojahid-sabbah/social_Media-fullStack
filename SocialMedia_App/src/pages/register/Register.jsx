import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link as ALink, useNavigate } from "react-router-dom"

import styled from 'styled-components'
const Container = styled.div`
 width: 100vw;
 height: 100vh;
  background:linear-gradient(
  #c24ef796,
  rgba(255,255,255,0.5)
  ), url("https://images.unsplash.com/photo-1624436048867-3cab158ec71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80") center ;
 display: flex;
 justify-content: center;
 align-items: center;

 `
const RigthWrapper = styled.div`
 padding: 20px;
  width: 40%;
 height: 80vh;
  background-color: #dadafe;
   display: flex;
  flex-direction: column;
  justify-content: center;
   
  `
const LeftWrapper = styled.div`
   padding: 20px;
   width: 27%;
   height: 80vh;
 
   display: flex;
  flex-direction: column;
  justify-content: center;
    background:linear-gradient(
  #b985d327,
  #d8d8d839
  ), url("https://images.unsplash.com/photo-1525158590585-05e83b4cce37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80") center ;
   
    `
const Para = styled.p`
 margin: 30px 0px;
 font-size: 20px;
 font-weight: 400;
 color: #ffffff;
 background-color: #80808084;

 `
const Form = styled.form`
 display: flex;
flex-direction: column;
  margin-bottom: 5px;
  `
const Title = styled.h1`
 font-size: 45px;
 font-weight: 500;
  `

const TitleRegester = styled.h1`
 font-size: 65px;
 font-weight: 500;
 color: #fff;


 `
const Input = styled.input`
 flex: 1;
 min-width: 30%;
 margin: 20px 10px 0 0;
padding: 10px;
 `

const Button = styled.button`
 width: 160px;
 border: none;
 padding: 15px 20px;
 margin-top:  ${props => props.margin};
 font-size: 15px;
  
 background-color: #550080; //550080 login   
 color: aliceblue;
 &:hover{
    background-color: #b742ff;
    border-radius: 10px;
    color: #550080;
 }
 `
const Link = styled.h1`
  font-size: 15px;
   font-weight: ${props => props.weight};
  color: #0d0d0d;
 `

const LinkSpan = styled.a`
 font-size: 15px;
 margin-top: 10px;
 color: blue;
 font-weight: 200;
 text-decoration: underline;
`
const Agreement = styled.span`
font-size: 15px;
margin: 20px 0;
font-weight: 300;
`
const Register = () => {


  let [loading, setLoading] = useState(false)
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name:""
  })


  let navigate = useNavigate();

  let goToLogin = (e) => {
    //e.preventDefault();
     let path = '/login'
    navigate(path)
  }

  let [errorList, seterrorList] = useState([])

  let SubmitFormData = async (e) => {
    e.preventDefault();
    /*  let validateResule = validatejoi();
    seterrorList(validateResule.error.details)  
     */
    let   {data} = await axios.post("http://localhost:3000/api/v1/auth/signUp", user);
 
    if (data.message == 'success') {
      goToLogin();
    } else {
      alert(data.message)

    }
    setLoading(true)
  }

  let getinputvalue = (e) => {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }

  return (
    <Container>
      <RigthWrapper>
        <Title>REGISTER  IN KONOSHMA</Title>
        <Form onSubmit={SubmitFormData}>
          <Input onChange={getinputvalue} placeholder="userName" name='username' />
          <Input onChange={getinputvalue} placeholder="Email" name='email' />
          <Input onChange={getinputvalue} placeholder="Password" name ='password'/>
          <Input onChange={getinputvalue} placeholder="Name" name='name'/>
          <Agreement>
            Lorem ipsum dor sit amet consectetur adipisicing elit. Omnis quos porro aperiam eos? Debitis, ratione.
          </Agreement>
          <Link weight="300">Do not you remember the <LinkSpan>Password</LinkSpan> ?</Link>
          <Link weight="300">Create a <LinkSpan>New Acount .</LinkSpan> </Link>

          <Button bg="550080"   margin="10px">REGISTER</Button>
        </Form>
      </RigthWrapper>
      <LeftWrapper>
        <TitleRegester>SOCIAL KONOSHMA</TitleRegester>
        <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem fugiat illo reiciendis quam deserunt ipsa, molestiae accusantium possimus inventore, veritatis in! Provident ad voluptate corrupti.</Para>
        <Link weight="400">Dont you have an account ?</Link>
        <ALink to="/login">
          <Button name="/login" margin="30px">LOGIN</Button>
        </ALink>
      </LeftWrapper>


    </Container>
  )
}

export default Register