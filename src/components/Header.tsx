import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"
                 alt=""/>
        </header>
    );
};

export default Header;