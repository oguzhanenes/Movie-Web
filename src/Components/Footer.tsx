import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a; /* Aynı siyah ton */
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #333;
  position:relative;
`;

const SocialMedia = styled.div`
  margin-bottom: 1rem;

  a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  font-family:verdana;

  a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;

const Copyright = styled.div`
  font-family:verdana; 
  font-size: 0.8rem;
  color: #aaa;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
            </SocialMedia>
            <FooterLinks>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#contact">Contact Us</a>
            </FooterLinks>
            <Copyright>
                © 2024 Cinema. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
