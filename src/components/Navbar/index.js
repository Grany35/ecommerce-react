import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from '@chakra-ui/react'

import { useAuth } from '../../contexts/AuthContext';
import { useBasket } from '../../contexts/BasketContext';


function Navbar() {
    const { loggedIn,user } = useAuth();
    const { items } = useBasket();

    return (
        <nav className='nav'>
            <div className="left">
                <div className="logo">
                    <Link to={"/"}>eCommerce</Link>
                </div>
                <ul className="menu">
                    <li>
                        <Link to={"/"}>Products</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                {
                    !loggedIn && (
                        <>
                            <Link to={"/signin"}>
                                <Button colorScheme='blue'>Login</Button>
                            </Link>
                            <Link to={"/signup"}>
                                <Button colorScheme='blue'>Register</Button>
                            </Link>
                        </>
                    )
                }
                {
                    user?.role==="Admin"&&(
                        <Link to={"/admin"}>
                            <Button colorScheme={"yellow"} variant="ghost">Admin</Button>
                        </Link>
                    )
                }
                {
                    loggedIn && (
                        <>
                            {
                                items.length > 0 && (
                                    <Link to="/basket">
                                        <Button mr={2} colorScheme={"yellow"} variant="outline">
                                            Basket ({items.length})
                                        </Button>
                                    </Link>
                                )
                            }
                           

                            <Link to={"/profile"}>
                                <Button colorScheme='yellow'>Profil</Button>
                            </Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar