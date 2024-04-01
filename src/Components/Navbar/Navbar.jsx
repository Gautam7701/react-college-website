import React,{useState,useEffect} from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import {Link} from "react-scroll"
import menu from "../../assets/menu-icon.png"


const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false)
  const [sticky,setsticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      window.scrollY>500 ? setsticky(true) : setsticky(false);
    })
  }, [])
  return (
    <>
    <div className={`navbar ${sticky?"dark-nav":""}`}>
        <img className = "logo"src={logo} alt="" />
        <ul className='lists'>
            <li className='items'><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Home</Link></li>
            <li className='items'><Link activeClass="active" to="Programs" spy={true} smooth={true} offset={-250} duration={500} className="linksinneritems" href="#">Programs</Link></li>
            <li className='items'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="linksinneritems" href="#">About Us</Link></li>
            <li className='items'><Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-250} duration={500} className="linksinneritems" href="#">Campus</Link></li>
            <li className='items'><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-250} duration={500} className="linksinneritems" href="#">Testimonials</Link></li>
        </ul>
        <button className='btn-nav' onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}>Contact Us</button>
    </div>
    <div className='mainNav'>
    <img className='Menu' src={menu} alt="Menubar" style={{ height: "3rem", width: "3.5rem" }} onClick={() => { setshowMenu(!showMenu) }} />
        
    <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <ul className='lists1'>
            <li className='listsitems'><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Home</Link></li>
            <li className='listsitems'><Link activeClass="active" to="Programs" spy={true} smooth={true} offset={-60} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Programs</Link></li>
            <li className='listsitems'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>About Us</Link></li>
            <li className='listsitems'><Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-5} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Campus</Link></li>
            <li className='listsitems'><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Testimonials</Link></li>
        </ul>
    </div>
    </div>


    </>
  )
}


export default Navbar
