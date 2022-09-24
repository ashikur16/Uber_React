import styled from "styled-components";
import {AiOutlineArrowRight} from "react-icons/ai"


function Component6() {
  return (

    <div>
        <ContainerBackColor>
            <ContainersHead>
                <h1>There’s more to love in the apps</h1>
            </ContainersHead>
            
            <Container1>
                <Card>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png" alt="Driver"/>
                    <p>Download the driver app &nbsp; <AiOutlineArrowRight /></p>
                </Card>

                <Card>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png" alt="Uber"/>
                    <p>Download the Uber app &nbsp; <AiOutlineArrowRight /></p>
                </Card>

            </Container1>

            <Container2>
                <Card2>
                    <p>Sign Up to drive &nbsp; &nbsp;&nbsp;&nbsp; <AiOutlineArrowRight /></p>
                    <p>Sign up to ride &nbsp; &nbsp;&nbsp;&nbsp; <AiOutlineArrowRight /></p>
                </Card2>
                
            </Container2>
            
        </ContainerBackColor>
         
          
    </div>

  );
}

const ContainerBackColor = styled.div`

    background-color: #D3D3D3;
`;

const ContainersHead = styled.div`

    font-size: 1.5rem;
    margin-left: 25%;
    padding: 2%;

    

    @media (max-width: 1200px) {
        margin-left: 0%;
        font-size: 1rem;
    }
`;

const Container1 = styled.div`
    display: flex;
    justify-content: center;
    margin: 2px;
    // padding: 2px;
    // padding-left: 560px;
    // padding-right: 560px;

    // padding-left: 15%;

    @media (max-width: 1200px) {
      display: grid;
      justify-content: center;
    //   vertical-align: middle;
    //   align-items: center;
      padding: 0%;
    }
    
`;


const Container2 = styled.div`
    background-color: white;
    display: flex;
    // justify-content: center;
    margin: 2px;
    // padding: 2px;
    padding-left: 560px;
    padding-right: 560px;

    p {
        font-size: 4rem;
        font: bold;
        padding-left: 2rem;
        cursor: pointer;
    }

    svg {
        font-size: 3rem;
    }

    @media (max-width: 1200px) {
      display: grid;
      vertical-align: middle;
      align-items: center;
      padding: 0%;
    }
    
`;


const Card = styled.div`
    display: flex;
    float: left;
    background-color: white;
    padding: 3rem;
    margin: 2rem;
 
    p {
        font-size: 2rem;
        padding-left: 2rem;
        cursor: pointer;
    }

    svg {
        font-size: 2rem;
    }

    @media (max-width: 1200px) {
    //   display: grid;
      vertical-align: middle;
      align-items: center;
      padding: 2%;
      margin: 1rem;
    }
`;

const Card2 = styled.div`
    display: flex;
    float: left;
    background-color: white;
    padding: 3rem;
    margin: 0rem;
    

    p {
        font-size: 3rem;
        padding-left: 2rem;
        padding-right: 8rem;
        cursor: pointer;
        text-decoration: underline;   
        text-decoration-color: gray;   
        text-underline-offset: 4rem;
          

        
    }

    svg {
        font-size: 2rem;
    }

    @media (max-width: 1800px) {
      display: grid;
      vertical-align: middle;
      align-items: center;
      padding: 0%;
      margin: 0rem;
      width: auto;
    }


    
`;



export default Component6;

