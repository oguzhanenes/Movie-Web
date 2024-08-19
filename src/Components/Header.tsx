import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

//sliding için  in ve out animasyonları
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
/*Ana gezinti çubuğunu tanımlar. Flexbox kullanarak içeriği hizalar ve arka plan rengi ile stil ekler. Ayrıca, ekran boyutuna göre farklı padding ayarları yapar.*/
const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: linear-gradient(to right, #000D3A, #431071);
  color: #fff;
  font-family: Arial, sans-serif;
  position: relative;
  z-index: 1; /* navbarın diğer elementler üzerinde olmasını sağlar */

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
`;
/*mobil görünümde margin ayarlarını yapar. */
const MenuItem = styled(Link)`
  color: #F9DBBA;
  text-decoration: none;
  font-size: 2rem;

  

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

/* Yan menü bileşeni. isOpen prop'u ile menünün açık mı kapalı mı olduğunu kontrol eder.*/
const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px; /* Adjust the width as needed */
  background: #000D3A;
  color: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.3s ease;
  z-index: 2; /* Ensures the sidebar is above other elements */

  @media (min-width: 769px) {
    display: none; 
  }
`;
/*kayıt ve giriş butonları için */
const Button = styled(Link)`
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  text-align: center;

  &.apply {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;

    &:hover {
      background: #fff;
      color: #431071;
    }
  }

  &.login {
    background-color: #000D3A;
    color: #fff;

    &:hover {
      background-color: #ddd;
      color: #000D3A;
    }
  }
`;
/*icondaki menüyü açıp kapatmak için kullanılır */
const MenuToggle = styled.div`
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
  color: #F9DBBA;

  @media (min-width: 769px) {
    display: none;
  }
`;
/*masaüstü görünümünde gösterilenler mobilde gizlenir */
const DesktopButtons = styled.div`
  display: none; 

  @media (min-width: 769px) {
    display: flex;
    position: absolute;
    top: 0.5rem;
    right: 2rem; 
    gap: 1rem; 
    z-index: 2; 
  }
`;
/* usestate :Yan menünün açık veya kapalı olduğunu takip eden state yönetimi sağlar. */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  //başlangıçta false olarak ayarlanır çünkü menü kapalıdır.

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  //Menü açma ve kapama işlevini yerine getiren bir fonksiyondur.

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <MenuItem to="/">Cinema</MenuItem>
        </LogoContainer>
        <MenuToggle onClick={toggleMenu}>☰</MenuToggle>
        <DesktopButtons>
          <Button to="" className="apply">Register</Button>
          <Button to="" className="login">Login</Button>
        </DesktopButtons>
      </NavbarContainer>
      <Sidebar isOpen={isOpen}>
        <Button to="" className="apply">Register</Button>
        <Button to="" className="login">Login</Button>
      </Sidebar>
    </>
  );
};

export default Navbar;
