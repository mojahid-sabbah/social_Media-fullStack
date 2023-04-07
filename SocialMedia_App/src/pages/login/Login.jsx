import React from 'react'
import { Link as ALink } from "react-router-dom"
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
const Container = styled.div`
 width: 100vw;
 height: 100vh;
  background:linear-gradient(
  #c24ef796,
  rgba(255,255,255,0.5)
  ), url("https://images.unsplash.com/photo-1545494097-1545e22ee878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80") center ;
 display: flex;
 justify-content: center;
 align-items: center;

 `
const RigthWrapper = styled.div`
 padding: 20px;
 width: 40%;
 height: 80vh;
  background-color: #e5f0f9;
border-top-right-radius: 15% 20%;
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
  #d09aeb37,
  #ffffff52
  ), url("https://images.unsplash.com/photo-1546405386-e8097f926ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=490&q=80") center ;
   
    `
const Para = styled.p`
 margin: 30px 0px;
 font-size: 20px;
 font-weight: 400;
 color: #ebebeb;

 `
const Form = styled.form`
 display: flex;
flex-direction: column;
  margin-bottom: 13px;
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
 margin-top: 30px;
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
  font-size: 22px;
  margin-top: 10px;
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

const Login = ({ setUserData }) => {
 
 
  const navigate = useNavigate();
 
  const goToHome = (e) => {
    e.preventDefault();
    console.log('hello')
    let path = '/'
    navigate(path)
  }
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorList, seterrorList] = useState([])

  const submitFormData = async (e) => {
    
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:3000/api/v1/auth/signin", { email, password });

      if(data.token){
        localStorage.setItem('token', data.token);

        navigate('/')
      }else{
        alert("user not found")
      }

     // setUserData();
    //  goToHome();
      setLoading(true)
    } catch (error) {
      seterrorList([{ message: error.message }])
    }
  }

  const getInputValue = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }
  return (
    <Container>
      <LeftWrapper>
        <TitleRegester>WELCOME IN KONOSHMA</TitleRegester>
        <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem fugiat illo reiciendis quam deserunt ipsa, molestiae accusantium possimus inventore, veritatis in! Provident ad voluptate corrupti.</Para>
        <Link weight="400">Dont you have an account ?</Link>
        <ALink to="/regester">

          <Button name="regester" >REGISTER</Button>
        </ALink>
      </LeftWrapper>

      <RigthWrapper>
        <Title>LOGIN  IN KONOSHMA</Title>
        <Form onSubmit={submitFormData}  >
          <Input onChange={getInputValue} placeholder="Email" type="email" name="email" />
          <Input onChange={getInputValue} placeholder="Password" type="password" name="password" />
          <Link weight="300">Do not you remember the <LinkSpan>Password</LinkSpan> ?</Link>
          <Link weight="300">Create a <LinkSpan>New Acount .</LinkSpan> </Link>
          <Button bg="550080"  >LOGIN</Button>
        </Form>
      </RigthWrapper>
    </Container>
  )
}

export default Login