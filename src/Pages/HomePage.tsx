import React from 'react';
import Header from '../Components/Header';
import CategorySlider from '../Components/CategorySlider';
import styled from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Footer from '../Components/Footer';
import MovieDetails from '../Components/MovieDetails';

/* Flexbox kullanarak sayfa içeriğini dikeyde düzenler ve minimum yükseklik olarak tam ekran sağlar.*/
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
/*Sayfanın içeriğini sarar ve flex: 1 ile içeriğin boş alanı kaplamasını sağlar.*/
const ContentWrapper = styled.div`
  flex: 1;
`;
/*İçerik alanını tanımlar, font ve renk ayarlarını içerir.*/
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #fff; 
  min-height: 100vh; 

`;


const HomePage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <ContentWrapper>
          <Container>
            <Header />
            <CategorySlider />
            <MovieDetails />
          </Container>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default HomePage;  
