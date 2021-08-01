import React from 'react'
import {Link} from 'react-router-dom'

export const MainNavbar = () =>{

    return(
        <div>
            <nav>
                <h1>HEADER</h1>
            </nav>
            <ul>
                <li>
                    <Link to="/welcome">WELCOME</Link>
                </li>
                <li>
                    <Link to="/product">PRODUCT</Link>
                </li>
                <li>
                    <Link to="/product-detail">PRODUCT-DETAIL</Link>
                </li>
                
            </ul>

        </div>
    )
}
