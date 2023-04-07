import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Posts from '../Posts/Posts.jsx'
import Share from '../Share/Share.js';

const Container = styled.div`
  gap: 10px;
 margin-bottom: 30px;
 border-radius: 15px;
 padding: 15px;
 `


const Postlist = () => {
  const [postGroub, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
      const res = await axios.get('http://localhost:3000/api/v1/post/getAllPosts',{
        headers:{"token":`KIWIBearerToken__${token}`}
      })
      
         console.log(res.data.myposts);
         setPosts(res.data.myposts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
       <Share />
      {postGroub.map((item) => (
        <Posts item={item} key={item._id} />
      ))}  

    </Container>
  )
}

export default Postlist