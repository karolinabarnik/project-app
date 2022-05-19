import React from 'react';
import "../styles/Navigation.css";
import { NavLink } from 'react-router-dom';

const list = [
    {name: "MAIN", path: "/dashboard", exact: 'true'},
    {name: "ALL PRODUCTS", path: "/comments", exact: 'true'},
    {name: "search", path: "/search", exact: 'true'},
    {name: "tags", path: "/tags", exact: 'true'},

]

const Navigation = () => {
  
    const menu = list.map(item => (
      <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : 'false'}>{item.name}</NavLink>
      </li>
    ))

    return (
        <nav className='main'>
        <ul>
           {menu} 
        </ul> 
        </nav>
        
    );
}

export default Navigation;