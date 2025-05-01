import React from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <>
        <div>Header</div>
        <div className="Header-wrap">
            <nav>
                <ul>
                    {headerNav.map((nav, idx) => (
                            <li key={idx}>
                                <Link to={nav.url}>{nav.title}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
        </>
    );
};

// map 하기 위해 title과 url을 배열로 저장
const headerNav = [
    {
        title:"Intro",
        url:"/intro"
    },
    {
        title:"Skill",
        url:"/skill"
    }
];

export default Header;