import './Menu.css';
import { TbGridDots, TbWorld } from 'react-icons/tb';
import { RiArrowDropDownLine } from 'react-icons/ri';


function Menu() {
  
  return (

    <div className="Menu">
      <header className="Menu-header">
        <div>
          <nav className='Topbar'>

            <div className='TopLeft'>
                <img src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg' alt='Uber logo'/>
              
                <div className='dropdown'>
                  <p>Company &nbsp; <RiArrowDropDownLine /></p>
                  <div className='dropdown-content'>
                    <p>About us</p>
                    <p>Our offerings</p>
                    <p>How uber works</p>
                    <p>Gobal Citizenship</p>
                    <p>Newsroom</p>
                    <p>Investor relations</p>
                    <p>Blog</p>
                    <p>Careers</p>
                  </div>

               </div>

                <p>Safety</p>
                <p>Help</p>
            </div>
           
            <div className='TopRight' id='box1'>
                <p id='SignUp'>Sign Up</p>
                <p>Log in</p>
                <p> <TbGridDots /> &nbsp; Products</p>
                <p> <TbWorld /> &nbsp; EN</p>
            </div>

          </nav>
        </div>
      </header>
    </div>
  );
}

export default Menu;
