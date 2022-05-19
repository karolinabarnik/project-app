import React from "react";
import { NavLink } from 'react-router-dom';

const list = [
    {name: "BACK TO MAIN", path: "/dashboard", exact: 'true'},
]

const BackToMain = () => {

    const backtomain = list.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} exact={item.exact ? item.exact : 'false'}>{item.name}</NavLink>
        </li>
      ))

      return (
        <nav className='main'>
        <ul>
           {backtomain} 
        </ul> 
        </nav>
    );
}

export default BackToMain;     