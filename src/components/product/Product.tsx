import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <FooterContainer>
      <BrandContainer>
        <BrandImage src="../../../public/images/brand.jpg" alt="Brand Logo" />
        <BrandDescription>
          One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.
        </BrandDescription>
        <ContactInfo>
          <div>Phone: +92300-400-2333</div>
          <div>Email: restaurant@gmail.com</div>
        </ContactInfo>
        <SocialMediaIcons>
          <SocialMediaIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook-filled" viewBox="0 0 24 24">
            <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
          </SocialMediaIcon>
          <SocialMediaIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter-filled" viewBox="0 0 24 24">
          <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084" />
          </SocialMediaIcon>
          <SocialMediaIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" viewBox="0 0 24 24">
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </SocialMediaIcon>
          <SocialMediaIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" viewBox="0 0 24 24">
            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
          </SocialMediaIcon>
          <SocialMediaIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube-filled" viewBox="0 0 24 24">
            <path d="M18 2a5 5 0 1 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </BrandContainer>

      <ServiceLinks>
        <div className="text-2xl">Our Service</div>
        <div className="font-semibold">
          <Link to="/">Blog</Link>
        </div>
        <div className="font-semibold">
          <Link to="/">Cart</Link>
        </div>
        <div className="font-semibold">
          <Link to="/">Shop</Link>
        </div>
        <div className="text-xl">
          <Link to="/">My Account</Link>
        </div>
      </ServiceLinks>

      <LatestNewsContainer>
        <LatestNewsImage src="" alt="Latest News" />
        <LatestNewsInfo>
          <div className="font-semibold">
            <Link to="/">Grilled Chicken & Kabab With Tomato Sauce</Link>
          </div>
          <div className="font-light">March 19, 2021</div>
        </LatestNewsInfo>
      </LatestNewsContainer>

      <UsefulLinks>
        <div className="text-2xl">Useful Links</div>
        <div className="font-semibold">
          <Link to="/">Blog</Link>
        </div>
        <div className="font-semibold">
          <Link to="/">Cart</Link>
        </div>
        <div className="font-semibold">
          <Link to="/">Shop</Link>
          </div>
        <div className="text-xl">
          <Link to="/">My Account</Link>
        </div>
      </UsefulLinks>
      
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  justify-content: space-between;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BrandImage = styled.img`
  width: 100px;
  height: auto;
`;

const BrandDescription = styled.span`
  font-size: 14px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: bold;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMediaIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #2c3e50;
  cursor: pointer;
`;

const ServiceLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LatestNewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`;

const LatestNewsImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const LatestNewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UsefulLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Footer;



      

     