 
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
 flex:2;
 background-color:  #FFF;
 margin-right: 5px;
position: sticky;
 top: 70px;
 height: calc(100vh - 70px);
 overflow: scroll;
 &::-webkit-scrollbar{
  display: none;
 }
 `
const Hr = styled.hr`
margin: 12px 0 8px 4px;
       background-color: aliceblue;
`
const Leftbar = () => {
  return (
    <Container>
      <div className=" " id="navbarSupportedContent">
        <ul className="navbar-nav ms-4  mb-2 mb-lg-0">
          <li className=" mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9727/9727473.png" alt="" />  Friends</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/719/719726.png" alt="" />  Groups</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9183/9183511.png" alt="" />  MarketPlace </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/4712/4712912.png" alt="" />  Watch </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/3057/3057951.png" alt="" />  Memories </Link>
          </li>
           
        </ul>
        <Hr/>
        <ul className="navbar-nav ms-4  mb-2 mb-lg-0">
          <li className=" mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9727/9727473.png" alt="" />  Friends</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/719/719726.png" alt="" />  Groups</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9183/9183511.png" alt="" />  MarketPlace </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/4712/4712912.png" alt="" />  Watch </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/3057/3057951.png" alt="" />  Memories </Link>
          </li>
           
        </ul>
        <Hr/>
        <ul className="navbar-nav ms-4  mb-2 mb-lg-0">
          <li className=" mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9727/9727473.png" alt="" />  Friends</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/719/719726.png" alt="" />  Groups</Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/9183/9183511.png" alt="" />  MarketPlace </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/4712/4712912.png" alt="" />  Watch </Link>
          </li>
          <li className="mb-2 nav-item">
            <Link className="nav-link active" to="/" ><img   style={{width:" 27px" , marginRight:"10px"}} src="https://cdn-icons-png.flaticon.com/512/3057/3057951.png" alt="" />  Memories </Link>
          </li>
           
        </ul>
        <Hr/>
      </div>
    </Container>
  )
}

export default Leftbar