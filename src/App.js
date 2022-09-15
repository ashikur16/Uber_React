// import './App.css';
import Menu from './Components/Menu/Menu.js';
import Component2 from './Components/Component2/Component2.js';
import Component4 from './Components/Component4/Component4.js';
import Component5 from './Components/Component5/Component5.js';
import Component6 from './Components/Component6/Component6.js';
import Footer from './Components/Footer/Footer.js';
import Pages from './Components/Pages.js';
import { BrowserRouter } from "react-router-dom"


function App() {
  return (

    <div>
      <BrowserRouter>
        <Menu />
        <Component2 />
        <Pages />
        <Component4 />
        <Component5 />
        <Component6 />
        <Footer />
      </BrowserRouter>
    </div>
  
  );
}

export default App;
