 import { EmailOutlined, Facebook, Instagram, LanguageOutlined, MoreVertOutlined, Pinterest, PlaceOutlined, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
import { Leftbar, Navbar, Rigthbar } from '../../index_exports'
import Posts from '../../Component/Posts/Posts'

const Container = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex :6 ;
  position: relative;
  margin: 10px;
 `
const Images = styled.div`
width: 100%;
height: 350px;
  overflow: hidden;
 border: 1px green solid;
 z-index: 999;
`

const Image = styled.img`
width: 100%;
object-fit: cover;
  border: 4px solid #fff;
 `
const ProfileContainer = styled.div`
 display: flex;
 width: 100%;
  justify-content: center;
 align-items: center;
flex-direction: column;
position: absolute;
top: 380px;
background-color:#fff;
 `
const ProfInfo = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
  bottom: 150px;
`
const Left = styled.div`
 display: flex;
 
`
const SocialIcon = styled.div`
 width: 35px;
 height: 35px;
 margin-right: 10px;
 border-radius: 50%;
 color: #fff;
 background-color: #${props => props.color};
 display: flex;
 align-items: center;
 justify-content: center;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
 justify-content: center;
`
const Center = styled.div`
 display: flex;
   align-items: center;
 justify-content: center;
   
`
const NameProfile = styled.span`
 margin-bottom: 15px;
 font-size: 25px;
 font-weight: 500;
 background-color: #e2e6e65e;
 padding: 10px;
 border-bottom: 4px solid teal;
 border-radius: 10px; 
 `
const Name = styled.span`
 `
const Item = styled.div`
margin: 0  15px;
 `
const Button = styled.button`
background-color: blue;
border: none;
color: #fff;
padding: 5px 10px;
border-radius: 15px;
&:hover{
    background-color: #0232ac;
    transform: scale(1.1);
   }
  `
const Rigth = styled.div`
 
`
const Profile = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" ,backgroundColor: "#d7f6f6"  }}>
        <Leftbar />

        <Container>

          <Images >
            <Image style={{ width: "160px", height: "160px", borderRadius: "50%", position: "absolute", bottom: "220px", left: "10%" }} src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

            <Image src='https://images.unsplash.com/photo-1474693220100-7cddec4346f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
          </Images>
          <ProfileContainer>
            <NameProfile>Aseel Sabbah</NameProfile>

            <ProfInfo>
              <Left>
                <SocialContainer>
                  <SocialIcon color="3B5999">
                    <Facebook />
                  </SocialIcon>

                  <SocialIcon color="E4405F">
                    <Instagram />
                  </SocialIcon>

                  <SocialIcon color="55ACEE">
                    <Twitter />
                  </SocialIcon>

                  <SocialIcon color="E60023">
                    <Pinterest />
                  </SocialIcon>
                </SocialContainer>
              </Left>
              <Center>

                <Item>
                  <PlaceOutlined />
                  <Name> USA</Name>
                </Item>
                <Item>
                  <LanguageOutlined />
                  <Name> KIWI.dev</Name>
                </Item>
                <Button>Follow</Button>
              </Center>
              <Rigth>
                <EmailOutlined />
                <MoreVertOutlined />
              </Rigth>
            </ProfInfo>
          <div  >
            <Posts />
          </div>
          </ProfileContainer>
        </Container>
        <Rigthbar />
      </div>
    </>
  )
}
export default Profile
