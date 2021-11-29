import { Container, Nav, Navbar,NavLink} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../scss/navbar.scss"
import { useState } from "react";

export default function NavBar() {  
    // hamburger menu open and close
    const[menuOpen, setMenuOpen] = useState(false); 

    const[navbar, setNavbar] = useState(false); 

    const changeBackground = () =>{
      
        if(window.scrollY >= 50){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };

    
    window.addEventListener('scroll', changeBackground);

    return (
      

       
        <Navbar bg="navColor" sticky="top" expand="md" collapseOnSelect className = { navbar ? "navscroll" : "navbar"} >         
            <Container>
                <Navbar.Brand className="logo">My Portfolio</Navbar.Brand>           
                <Navbar.Toggle onClick = {() => setMenuOpen(!menuOpen)} className={"navtop " + (menuOpen && "active")} aria-controls="responsive-navbar-nav"/>
                    
                <Navbar.Collapse>
                    <Nav className="m-auto navLeft">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#project">Project</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </Nav> 
                    <Nav className="navRight">                        
                            <SocialIcon network="linkedin" bgColor="transparent" fgColor="black"/>   
                            <SocialIcon network="github" bgColor="transparent" fgColor="black"/> 
                        
                    </Nav>                     
                </Navbar.Collapse>                
            </Container>       
        </Navbar>
    )
}
