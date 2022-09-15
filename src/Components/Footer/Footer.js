import styled from "styled-components";

import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';
import {BsYoutube, BsLinkedin} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';





function Footer() {
  return (

    <div>

      <MainContainer>

        <Container1>

            <img src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg' alt='Uber logo'/>
            <p>Visit Help Center</p>

        </Container1>
        <Container>
              {/* <p>Bangladesh ridesharing related information</p> */}

            
                <Card1>
                    {/* <img src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg' alt='Uber logo'/>
                    <p>Visit Help Center</p> */}
                    <h1>Company</h1>
                    <p>About us</p>
                    <p>Our offerings</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>AI</p>
                    <p>Gift cards</p>
                </Card1> 

                <Card1>
                    <h1>Products</h1>
                    <p>Ride</p>
                    <p>Drive</p>
                    <p>Deliver</p>
                    <p>Eat</p>
                    <p>Uber for Business</p>
                </Card1> 

                <Card1>
                    <h1>Global citizenship</h1>
                    <p>Safety</p>
                    <p>Diversity and Inclusion</p>
                </Card1> 

                <Card1>
                    {/* <img src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg' alt='Uber logo'/>
                    <p>Visit Help Center</p> */}
                    <h1>Travel</h1>
                    <p>Airports</p>
                    <p>Cities</p>
                </Card1> 
            
            
        </Container>

        <Icons>
          <AiFillFacebook />
          <AiOutlineTwitter />
          <BsYoutube />
          <BsLinkedin />
          <FaInstagramSquare />
        </Icons>

       

      </MainContainer>
       
       
          
    </div>

  );
}

const MainContainer = styled.div`

    justify-content: center;    
    background-color: black;
    padding-left: 25rem;
    padding-right: 25rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    
    @media (max-width: 1100px) {
      justify-content: left;    
      padding-left: 1.5rem;
      padding-right: 0rem;
      padding-top: 0rem;
      padding-bottom: 0rem;
    }

`;

const Container1 = styled.div`

    display: grid;
    color: white;

    img {

        float: left;
        width: 10rem;
        cursor: pointer;
    }

    p {
      margin-bottom: 5rem;
      font-size: 1.5rem;
    }
`;


const Container = styled.div`
    display: flex;

    @media (max-width: 1100px) {
      display: grid;
    }
    
`;



const Card1 = styled.div`

    display: block;  
    color: white;
    margin-right: 15%;

    p {
        font-size: 1.2rem;
    }

    h1 {
      font-size: 1.5rem;
      font: Bold;
    }

    @media (max-width: 1100px) {
      margin-top: 2rem;
    }
    
`;

const Icons = styled.div`
    display: flex;  
    color: white;
    margin-top: 6%;
    font-size: 1.5rem;

    svg {
      margin-right: 3%;
    }
    
    
`;



export default Footer;

