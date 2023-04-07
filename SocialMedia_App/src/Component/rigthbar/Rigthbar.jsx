import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
 flex:3;
  margin-right: 5px;
position: sticky;
 top: 70px;
 height: calc(100vh - 70px);
 overflow: scroll;
 &::-webkit-scrollbar{
  display: none;
 }
 `
const Suggestion = styled.div`

 background-color: #fff;
 margin: 7px;
 border-radius: 6px;
 `
const LastestActive = styled.div`
 background-color: #fff;
 margin: 7px;
 border-radius: 6px;
 
  `
const OnlineFrindes = styled.div`
   background-color: #fff;
   margin: 7px;
   border-radius: 6px;
   
     `
     
const Sec_line = styled.div`
      display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding-bottom: 10px;
          `
const Title = styled.h4`
 padding: 15px;
 font-size: 15px;
 color: gray;
  `
const HeadName = styled.div`
   
  
`

const Buttons = styled.div`
   
  
`

const Online = styled.div`
   
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: 0;
  left: 25px;
`

const Rigthbar = () => {
  return (
    <Container>


      <Suggestion>
        <Title>Suggestion For You</Title>

        <Sec_line>
          <HeadName>
            <Link className="nav-link active" to="/" ><img style={{ width: " 27px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />  Rami Sabbah</Link>
          </HeadName>
          <Buttons>
            <button className="btn btn-primary me-2">Follow</button>
            <button className="btn btn-danger ">Dismiss</button>
          </Buttons>
        </Sec_line>

        <Sec_line>
          <HeadName>
            <Link className="nav-link active" to="/" ><img style={{ width: " 27px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />  Odai Ammar</Link>
          </HeadName>
          <Buttons>
            <button className="btn btn-primary me-2 ">Follow</button>
            <button className="btn btn-danger ">Dismiss</button>
          </Buttons>
        </Sec_line>

      </Suggestion>
      <LastestActive>
        <Title>Lastest Activies</Title>

        <Sec_line>
          <HeadName>
            <Link className="nav-link active" to="/" ><img style={{ width: " 27px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />  Odai Ammar</Link>
          </HeadName>
          <Buttons>

            <Title>1 min ago</Title>
          </Buttons>
        </Sec_line>
      </LastestActive>
      <OnlineFrindes>
        <Title> Online Frindes</Title>
        <Sec_line>
          <HeadName>
            <Link className="nav-link active" style={{ position:"relative" }} to="/" >
              <img style={{ width: " 27px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />
              Odai Ammar
              <Online />
            </Link>

          </HeadName>
        </Sec_line>
      </OnlineFrindes>
    </Container>
  )
}

export default Rigthbar