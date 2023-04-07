import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Comments from '../Comments/Comments'
import { PostsData, Icons } from '../Stories/Data'
const Container = styled.div`
  gap: 10px;
 margin-bottom: 30px;
 border-radius: 15px;
 padding: 15px;
 `


const Post = styled.div`
margin-top: 10px;
  border-radius: 10px;
 overflow: hidden;
 position: relative;
 background-color: #fff;
 padding: 20px;

  `
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
margin-bottom: 20px;
 `
const Names = styled.span`
 position: absolute;
 z-index: 3;
 bottom: 10px;
 left: 10px;
 color: #fff;
 background-color: #cacaca66;
 padding: 3px;
 border-radius: 5px;
 `
const Desc = styled.p`
 padding: 0 22px ;
   `

const Sec_line = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding-bottom: 10px;
    `

const HeadName = styled.div`
background-color:#b89c9ca7 ;
border-radius: 20px;
padding: 10px;

`
const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 10px;
`

const Buttons = styled.div`
 
`
const Button = styled.button`
 border: none;
border-radius: 20px;
margin: 15px;
padding: 8px 15px;

&:hover{
    background-color: #b0d2f0a7;
}
  `
const Span = styled.span`
 border: none;
border-radius: 20px;
 padding: 8px 15px;

`  
const BtnIcon = styled.img`
 width: 25px;
 margin-right: 10px;
`
const BtnDesc = styled.span`
padding-left: 10px;
 `

const Posts = ({ item }) => {


  const [commentOpen, setcommentOpen] = useState(false)
  

  return (
    <Container>
    
   <>
        <Post key={item._id}>

          <Sec_line>
            <HeadName>
                 {item.profilePic ? <UserImage src={item.profilepic} alt="" /> : <AccountCircleOutlinedIcon /> }
               <Span> {item.userId.userName}</Span>
 
            </HeadName>

          </Sec_line>
          <Desc>{item.desc}</Desc>
          {item.img ? <Image src={item.img} /> : ""}
          <Buttons>
            <Button>
              <BtnIcon src="https://cdn-icons-png.flaticon.com/512/456/456115.png" />
              12
              <BtnDesc>Like</BtnDesc>
            </Button>
            <Button onClick={() => setcommentOpen(!commentOpen)} >
              <BtnIcon src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png" />
              12
              <BtnDesc>Comment</BtnDesc>
            </Button>

            <Button>
              <BtnIcon src="https://cdn-icons-png.flaticon.com/512/1828/1828874.png" />
              12
              <BtnDesc>share</BtnDesc>
            </Button>


          </Buttons>
          {commentOpen && <Comments item={item} />}
        </Post>
      </>  

    </Container>
  )
}

export default Posts