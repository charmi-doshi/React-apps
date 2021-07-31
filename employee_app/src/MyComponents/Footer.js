import React from 'react'
import '../footer.css'

export const Footer = () => {

    let footerStyle ={
        position:"relative",
        top:"100vh",
        width:"100%",
        fontSize:"30px"
    };

    return (
        <footer className ="bg-dark text-light py-3" style ={footerStyle}>

            <p>Copyrights &copy; $$</p>
        </footer>
    )
}