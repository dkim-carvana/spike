import React from 'react';
import './Header.css';

interface HeaderProps {
    text?: string;
}
function Header(props: HeaderProps) {
  return (
    <h1 className='header'>React Spike {props.text}</h1>
  );
}

export default Header;
