import styled from "styled-components";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BiHomeAlt } from 'react-icons/bi';





function Component5() {
  return (

    <div>
          <Containers>
            <h1>Focused on safety, wherever you go</h1>
          </Containers>
          
        <Container>
          
          <Card>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt = "Our commitment to your safety" />
            <h2>Our commitment to your safety</h2>
            <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
            <br></br>
            <a href="">Read about our Community Guidelines</a>
            <a href="">See all safety features</a>
          
          </Card>
         
        
          <Card>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt = "Setting 10,000+ cities in motion" />
            <h2>Setting 10,000+ cities in motion</h2>
            <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
            <br></br>
            <a href="">View all cities</a>
          </Card>
        </Container>

        <Container>
          <Card>
              <MdOutlinePeopleAlt />
              <h2>About us</h2>
              <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
              <br></br>
              <a href="">Learn more about Uber</a>
            
          </Card>

          <Card>
              <HiOutlineNewspaper />
              <h2>Newsroom</h2>
              <p>See announcements about our latest releases, initiatives, and partnerships.</p>
              <br></br>
              <a href="">Go to Newsroom</a>
          
          </Card>

          <Card>
            <BiHomeAlt />
            <h2>Global citizenship</h2>
            <p>Read about our commitment to making a positive impact in the cities we serve.</p>
            <br></br>
            <a href="">See our partnerships</a>
          
          </Card>

        </Container>
          
    </div>

  );
}

const Containers = styled.div`
    font-size: 1.5rem;
    margin-left: 25%;

    @media (max-width: 1200px) {
      margin-left: 0%;
      font-size: 1rem;
    }
    
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 2px;
    // padding: 2px;
    padding-left: 560px;
    padding-right: 560px;

    @media (max-width: 1200px) {
      display: grid;
      vertical-align: middle;
      align-items: center;
      padding: 0%;
    }
    
`;

const Card = styled.div`
    width: 35rem;
    margin: 2rem;
    background: white;

    h1 {
      margin-left: 25%,
      font-size: 3rem,
    }

    h2 {
      font-size: 1.5rem;
      font: bold;
      color: black;
    }

    p {
      font-size: 1rem;
      color: black;
    }

    a {
      display: inline-flex;
      color: black;
      margin-right: 2rem;
      font-size: 1.1rem;
    }

    svg {
      font-size: 2rem;
    }
    
`;



export default Component5;

