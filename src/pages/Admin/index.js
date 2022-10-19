import React from 'react'
import { Link, } from "react-router-dom";
import "./styles.css";

function Admin() {
    return (
        <div>
            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to={"/admin"}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link to={"/admin/orders"}>Siparişler</Link>
                    </li>
                    <li>
                        <Link to={"/admin/products"}>Ürünler</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Admin