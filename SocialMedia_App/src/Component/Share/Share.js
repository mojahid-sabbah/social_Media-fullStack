import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from 'styled-components'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
width: 100%;
 background-color: #fff;
 padding: 20px;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `

const Buttons = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
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
const Input = styled.input`
 width: 90vh;
 height: 50px;
 margin-right: 10px;
 display: flex;
 border: none;
 
`
const BtnIcon = styled.img`
 width: 25px;
 margin-right: 10px;
`
const BtnDesc = styled.span`
padding-left: 10px;
 `
const InputCounter = styled.div`
  display: flex;
  box-shadow: 4px 4px 8px 1px gray;
  align-items: center;
 justify-content: center;
  `
const Buttonscounter = styled.div`
  
 `
const Image = styled.img`
  width: 27px;
  margin: 2px 10px;
  `
const Form = styled.form`
    
    `
const FilesInput = styled.input`
    opacity: 0 ;
    width: 100%;
    position: absolute;
    z-index: 3;
    left: 0;
      `
const Label = styled.label`
    
`
const FileDiv = styled.div`
      align-items: center;
     position: relative;
     z-index: 1;

`
const InputSpan = styled.span`
  border: none;
  background-color: #ebebeb ;
 border-radius: 20px;
margin: 15px;
padding: 8px 15px;

&:hover{
    background-color: #b0d2f0a7;
}

`

const Share = () => {
    const [loading, setLoading] = useState(false)
    const [desc, setdesc] = useState('')
    const [file, setFile] = useState([])
    const [errorList, seterrorList] = useState([])
    
    
    const submitFormData = async (e) => {
        try {
            const token = localStorage.getItem('token');
            e.preventDefault();
            const formData = new FormData();
            formData.append('desc', desc);
            formData.append('file', file); // replace "file" with the name of your file input field
            const { data } = await axios.post("http://localhost:3000/api/v1/post/addPost", formData, {
                headers: { "token": `KIWIBearerToken__${token}` }
            });
            console.log(data)
            setLoading(true)
        } catch (error) {
            seterrorList([{ message: error.message }])
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);

    }
    const getInputValue = (e) => {
        if (e.target.name === "desc") {
            setdesc(e.target.value);
        }
    }
    return (
        <Container>
            <Form onSubmit={submitFormData} >

                <InputCounter>
                    <span><Image src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" /></span>
                    <Input type="text" placeholder='Whats in your mind ?' name="desc" value={desc} onChange={getInputValue} />

                </InputCounter>
                <hr />
                <Buttonscounter>
                    <Buttons>
                        <FileDiv>
                            <InputSpan  ><Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" alt="" /> Add Image</InputSpan>
                            <FilesInput type="file" name="file" onChange={handleFileChange} />
                        </FileDiv>

                        <Button>
                            <BtnIcon src="https://cdn-icons-png.flaticon.com/512/9727/9727473.png" />

                            <BtnDesc>Tag Friends</BtnDesc>
                        </Button>

                        <Button type="submit">
                            <BtnIcon src="https://cdn-icons-png.flaticon.com/512/1828/1828874.png" />
                            <BtnDesc>share</BtnDesc>
                        </Button>


                    </Buttons>
                </Buttonscounter>
            </Form>
        </Container>
    )
}

export default Share