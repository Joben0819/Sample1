import React from 'react';
import { Head } from '../../Component/Interface';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const name = [
    { Navbar: 'Product', to: '' },
    { Navbar: 'Sales' , to: 'Sales'},
    { Navbar: 'Import' , to: 'Create'},
    { Navbar: 'Settings' , to: 'Settings'},
  ];
  const Nav: Head[] = name;
  const location = useNavigate();

  const handleClick = (path: string) => {
    location(path);
  };

  return (
    <>
      {Nav.map((item, index) => (
        <Link key={index} to={`/${item.to}`} onClick={() => handleClick(`/${item.to}`)}>
          {item.Navbar}
        </Link>
      ))}
    </>
  );
}
