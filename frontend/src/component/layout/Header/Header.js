// import React from 'react';
// import { ReactNavbar } from 'overlay-navbar';
// import { MdAccountCircle } from 'react-icons/md';
// import { MdSearch } from 'react-icons/md';
// import { MdAddShoppingCart } from 'react-icons/md';
// import logo from "../../../images/logo.png";
// import "./Header.css"; 


// const options = {
// burgerColor: '#868181',
// logo,
// logoWidth: '20vmax',
// navColor1: 'white',
// logoHoverSize: '10px',
// logoHoverColor: 'white',
// link1Text: 'Home',
// link2Text: 'Products',
// link3Text: 'Contact',
// link4Text: 'About',
// link1Url: '/',
// link2Url: '/products',
// link3Url: '/contact',
// link4Url: '/about',
// link1Size: '1.3vmax',
// link1Color: 'rgba(35, 35, 35,0.8)',
// nav1justifyContent: 'flex-end',
// nav2justifyContent: 'flex-end',
// nav3justifyContent: 'flex-start',
// nav4justifyContent: 'flex-start',
// link1ColorHover: '#eb4034',
// link1Margin: '1vmax',
// profileIcon: true,
// profileIconColor: 'rgba(35, 35, 35,0.8)',
// profileIconUrl: '/login',
// ProfileIconElement: MdAccountCircle,
// searchIcon: true,
// searchIconColor: 'rgba(35, 35, 35,0.8)',
// SearchIconElement: MdSearch,
// cartIcon: true,
// cartIconColor: 'rgba(35, 35, 35,0.8)',
// CartIconElement: MdAddShoppingCart,
// profileIconColorHover: '#eb4034',
// searchIconColorHover: '#eb4034',
// cartIconColorHover: '#eb4034',
// cartIconMargin: '1vmax',
// };

// const Header = () => {
// return <ReactNavbar {...options} />;
// };

// export default Header;

import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import { MdAccountCircle, MdSearch, MdAddShoppingCart } from 'react-icons/md';
import logo from "../../../images/logo2.png";
import "./Header.css";

const options = {
  burgerColor: '#868181', 

  logo,
  logoWidth: '5vmax',
  logoHoverSize: '1vmax',
  logoHoverColor: '#3f51b5',

  navColor1: '#fff', // Clean white navbar background
  navColor2: '#f8f8f8',

  link1Text: 'Home',
  link2Text: 'Products',
  link3Text: 'Contact',
  link4Text: 'About',

  link1Url: '/',
  link2Url: '/products',
  link3Url: '/contact',
  link4Url: '/about',

  link1Size: '1.1vmax',
  link1Color: '#333',
  link1ColorHover: '#3f51b5',
  link1Margin: '2vmax',

  nav1justifyContent: 'flex-end',
  nav2justifyContent: 'flex-end',
  nav3justifyContent: 'flex-start',
  nav4justifyContent: 'flex-start',

  profileIcon: true,
  ProfileIconElement: MdAccountCircle,
  profileIconColor: '#333',
  profileIconColorHover: '#3f51b5',
  profileIconUrl: '/login',

  searchIcon: true,
  SearchIconElement: MdSearch,
  searchIconColor: '#333',
  searchIconColorHover: '#3f51b5',

  cartIcon: true,
  CartIconElement: MdAddShoppingCart,
  cartIconColor: '#333',
  cartIconColorHover: '#3f51b5',
  cartIconMargin: '1.2vmax',

  linkMargin: '1vmax',
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
