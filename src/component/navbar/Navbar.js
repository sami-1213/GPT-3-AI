import './navbar.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg"
import { useState } from 'react';


const Navbar = () => {

  const Menu = () => {
    return(
      <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
      </>
    )
  }

  const[toggle, setToggle] = useState(false);

  return (
    <div className="gpt_navbar">
      <div className="gpt_navbar-links">
        <div className="gpt_navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt_navlink_contain">
          <Menu />
        </div>
      </div>
      <div className="gpt_navlink_sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt_nav-menu ">
        {toggle ?
          <RiCloseLine style={
            {color:"#fff",
              size:27,
            }
          } onClick={() => setToggle(false)}/> 
          : 
          <AiOutlineMenu style={
            {color:"#fff",
              size:27,
            }
          } onClick={() => setToggle(true)}
          />}
          { toggle && (
            <div className="gpt_navmenu-contain  scale-up-center">
              <div className="gpt_navmenu-contain-link">
                <Menu />
              </div>
              <div className="gpt_navmenu-contain-link-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
            
          )}
      </div>
    </div>
  )
}
export default Navbar