import './Component3.css';
import { GiNetworkBars } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Component3_1() {
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


            <h1>Discover delicious eats</h1>
            <p>Order delivery from restaurants you love.</p><br></br>
            <button>Order now</button>
            <a href='https://merchants.ubereats.com/bd/en/s/signup/?uclick_id=2a8a7268-07aa-4d22-8d88-30763d073948' > Own a restaurant? Partner with Uber Eats</a>
        </div>
        <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1905,h_599/v1613521576/assets/9d/2ff1e0-a207-425a-a1b8-cf40c95d6567/original/Eats_Home_bg_desktop2x.png' alt='Eat'/>
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

export default Component3_1;
