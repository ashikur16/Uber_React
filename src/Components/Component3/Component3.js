import './Component3.css';
import { GiNetworkBars } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Component3() {
  return (

    <div className='container'>

       
        <div className='Card'>


        <List>
                <SLink to={'/'}>
                    <GiNetworkBars/>
                    <h4>Drive or Deliver</h4>
                </SLink>

                <SLink to={'/Component3/Component3_1'}>
                    <ImSpoonKnife/>
                    <h4>Eat</h4>
                </SLink>

                <SLink to={'/Component3/Component3_2'}>
                    <AiFillCar/>
                    <h4>Ride</h4>
                </SLink>
            </List>


            <h1>Get in the driver’s seat and get paid</h1>
            <p>Drive on the platform with the largest network of active riders.</p>
            <button>Sign Up to Drive</button><br></br><br></br>
            <a href='https://www.uber.com/bd/en/drive/' >Learn more about driving and delivering</a>
        </div>
        <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1905,h_667/v1653688465/assets/29/74ec2f-a727-47e1-9695-c78f8dadee5f/original/DotCom_Update_Earner_bg2x.jpg' alt='Drive or Deliver'/>
    </div>

    
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
`;

const SLink = styled(NavLink)`
    
    align-items: center;
    text-align: center;
    border-radius: 2rem;
    margin: 0.1rem;
    background: white;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
 

    h4{
        color: black;
        font-size: 1.5rem;
    }

    svg{
        color: black;
        font-size: 2rem;
    }

    &.active{
        background: #E5E4E2;

        svg{
            color: black;
        }

        h4{
            color: black;
        }
    }

`;

export default Component3;
