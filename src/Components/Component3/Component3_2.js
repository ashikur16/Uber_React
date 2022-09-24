import './Component3.css';
import { GiNetworkBars } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


function Component3_2() {
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


            <h1>Request a ride now</h1>
           
            <FormStyle>
            
                <input className='input'
                    type="text"
                    placeholder='Enter pickup locaton'
                />
                
                <TbSend />

                <input className='input'
                    type="text"
                    placeholder='Enter destination'
                />  
                
            </FormStyle>

            <button>Order Now</button>
            <button id='button1'>Schedule For Later</button>
        </div>
        <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1905,h_644/v1653688612/assets/4e/98a67b-fa75-455d-b932-2d3ba478a4ed/original/DotCom_Update_Rider_bg2x.jpg' alt='Ride'/>
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




const FormStyle = styled.form`
   
    margin: 0rem 0rem;
    display: inline-block;
    position: relative;
    width: 100%;
    align-items: center;
    

    input{
        background: #F5F5F5;
        font-size: 1.5 rem;
        font-weight: 600;
        color: black;
        padding: 1rem;
        // width: 35rem;
        width: 80%;
        height: 2rem;
        margin: 1rem;
        display: flex;
    
    }

    svg{
        Position: absolute;
        diplay: block;
        top: 10%;
        right: 18%;
        color: gray;
        // margin-top: 0.5rem;  
        // margin: auto; 
    }    
`;

export default Component3_2;
