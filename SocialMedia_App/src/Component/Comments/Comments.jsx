import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CommentsData } from '../Stories/Data'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { format } from "timeago.js"


const Container = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
 `
const Comment = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
 `
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;

 `
const Info = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
align-items: flex-start;
 flex: 6;

`
const CommentsName = styled.span`
  font-weight: 500;
  background-color: azure;
  padding: 5px 20px;
 `
const Desc = styled.p`
  font-size: 15px;
  margin-right: 10px;
 `
const Date = styled.span`
flex: 1;
font-size: 12px;
margin-left: 10px;
`
const CemmentsInput = styled.div`
flex: 6;
width: 100%;
font-size: 12px;
margin-left: 10px;
`
const Button = styled.button`
flex: 1;
font-size: 12px;
margin-left: 10px;
background-color: #049d04;
padding: 5px 20px;
color: #fff;
border: none;
font-size: 15px;
border-radius: 5px;
`
const Input = styled.input`
flex: 5;
width: 80%;
height: 30px;
font-size: 12px;
margin-left: 10px;
`

const Comments = ({ item }) => {
    const [commentGroub, setcomments] = useState([]);
    const [comment, setcomment] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/comment/${item._id}/getcomments`, {
                    headers: { "token": `KIWIBearerToken__${token}` }
                })

                //console.log(res.data.comments);
                setcomments(res.data.comments);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const getInputValue = (e) => {
        if (e.target.name === "comment") {
            setcomment(e.target.value);
        }
    }

    const submitFormData = async (e) => {
        try {
            const token = localStorage.getItem('token');
            e.preventDefault();

            const { data } = await axios.post(`http://localhost:3000/api/v1/comment/${item._id}/addcomment`, comment, {
                headers: { "token": `KIWIBearerToken__${token}` }
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>

            <CemmentsInput>
                    {item.profilePic ? <Image src={item.profilePic} /> : <AccountCircleOutlinedIcon />}
                <form onSubmit={submitFormData}>
                    <Input placeholder='Write a Comment' type="text" name="comment" onChange={getInputValue} />
                    <Button type='submit' >Send</Button>
                </form>

            </CemmentsInput>
            {commentGroub.map((comment) => (
                <>
                    <Comment key={comment._id}>
                        {comment.userId.profilePic ? <Image src={comment.userId.profilePic} /> : <AccountCircleOutlinedIcon />}
                        <Info>
                            <CommentsName>{comment.userId.userName}</CommentsName>
                            <Desc>{comment.text}</Desc>
                        </Info>
                        <Date>{format(comment.createdAt)}</Date>
                    </Comment>
                </>
            ))}
        </Container>
    )
}

export default Comments