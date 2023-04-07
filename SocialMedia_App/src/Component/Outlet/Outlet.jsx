import React from 'react'
import styled from 'styled-components'
import Postlist from '../PostList/Postlist.jsx'
 import Stories from '../Stories/Stories'
const Container = styled.div`
 flex: 6;
overflow: hidden;
 `
const Outlet = () => {
  return (
    <Container>
       
      <Stories/>
      <Postlist/>
    </Container>
  )
}

export default Outlet