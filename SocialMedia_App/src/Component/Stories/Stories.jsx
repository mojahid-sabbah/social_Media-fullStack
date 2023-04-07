import React from 'react'

import styled from 'styled-components'
import { storiesData, UserData } from './Data'
const Container = styled.div`
 display: flex;
 gap: 10px;
 height: 250px;
 margin-bottom: 30px;
 `
const Story = styled.div`

margin-top: 10px;
 flex: 1;
 border-radius: 10px;
 overflow: hidden;
 position: relative;
  `
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
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
 const Button = styled.button`
 background-color: #0000ff75;
 position: absolute;
 bottom: 15px;
 left: 15px;
 border: none;
 color: #fff;
 font-size: 25px;
 border-radius: 50%;
 width: 45px;
 height: 45px;
   `
const Stories = () => {
    return (
        <>
            <Container>
           
            {UserData.map((user) => (
                    <Story  key={user.id}>
                        <Image src={user.img} />
                        <Button>+</Button>
           {/*           <Names>{user.name}</Names> */}    
                </Story>
                ))}
                {storiesData.map((story) => (
                    <Story key={story.id}>
                        <Image src={story.img} />
                        <Names>{story.name}</Names>
                    </Story>
                ))}

            </Container>
        </>
    )
}

export default Stories