import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import GlobalStyles from '../Styles/GlobalStyles';
import Footer from '../Components/Footer';

import image15 from '../assets/image15.jpg';
import image6 from '../assets/image6.jpg';
import image8 from '../assets/image8.jpg';
import image7 from '../assets/image7.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image9 from '../assets/image9.jpg';


import trailer1 from '../assets/trailer1.mp4';
import trailer2 from '../assets/trailer2.mp4';

/*Sayfanın temel düzenini tanımlar.flexbox ile dikeyde hizalama sağlar */
const PageWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
/*İçeriğin yer aldığı ana alanı tanımlar.flex: 1 ile, bu alanın tüm boşluğu kaplamasını sağlar. */
const ContentWrapper = styled.div`
  flex: 1;
  background-color: #121212;
  color: #fff;
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Poster = styled.img`
  width: 220px;
  height: 286px;
  border-radius: 8px;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;

`;

const Title = styled.h1`
  color: #F9DBBA;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  margin-bottom: 1rem;
  color: #F9DBBA;

`;

const InfoRow = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  
  strong {
    width: 100px;
  }
`;

const Description = styled.div`
  margin-top: 1rem;
  line-height: 1.5;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #aa66cc;
  cursor: pointer;
  padding: 0;
  font: inherit;
  text-decoration: underline;
  margin-top: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  font-family: Arial, sans-serif;


  button {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:nth-child(1) {
      background-color: #6a1b9a;
      color: #fff;

      &:hover {
        background-color: #8e24aa;
      }
    }

    &:nth-child(2) {
      background-color: #8e24aa;
      color: #fff;

      &:hover {
        background-color: #9c27b0;
      }
    }

    &:nth-child(3) {
      background-color: #424242;
      color: #fff;

      &:hover {
        background-color: #616161;
      }
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 80%;
  max-width: 800px;
  background: #000;
  padding: 2rem;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  background: #f00;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

interface Movie {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  genre: string;
  duration: string;
  director: string;
  actors: string;
  trailerUrl: string;
}

const movies: Movie[] = [
  { id: '1', title: 'Kestik! - Final Cut', description: 'Düşük bütçeli bir zombi filmi çekmeye çalışan film ekibi, gerçek zombilerin saldırısına uğrayınca işler tersine gitmeye başlar.', imageSrc: image15, genre: 'Korku', duration: '107 dk', director: 'Michel Hazanavicius', actors: 'Romain Duris, Berenice Bejo, Gregory Gadebois', trailerUrl: trailer1 },
  { id: '2', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '3', title: 'Kestik! - Final Cut', description: 'Düşük bütçeli bir zombi filmi çekmeye çalışan film ekibi, gerçek zombilerin saldırısına uğrayınca işler tersine gitmeye başlar.', imageSrc: image7, genre: 'Korku', duration: '107 dk', director: 'Michel Hazanavicius', actors: 'Romain Duris, Berenice Bejo, Gregory Gadebois', trailerUrl: trailer1 },
  { id: '4', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image8, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '5', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image9, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '6', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '7', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image11, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '8', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image12, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '9', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image13, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '10', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '11', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '12', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '13', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '14', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '15', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '16', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '17', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '18', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '19', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '20', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
  { id: '21', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
];

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <DetailContainer>
            <Poster src={movie.imageSrc} alt={movie.title} />
            <Details>
              <div>
                <Title>{movie.title}</Title>
                <Info>
                  <InfoRow><strong>Tür:</strong><span>{movie.genre}</span></InfoRow>
                  <InfoRow><strong>Süre:</strong><span>{movie.duration}</span></InfoRow>
                  <InfoRow><strong>Yönetmen:</strong><span>{movie.director}</span></InfoRow>
                  <InfoRow><strong>Oyuncular:</strong><span>{movie.actors}</span></InfoRow>
                </Info>
                <Description>
                  {isDescriptionExpanded ? movie.description : movie.description.slice(0, 100) + '...'}
                  <ReadMoreButton onClick={toggleDescription}>
                    {isDescriptionExpanded ? 'Daha Az Göster' : 'Devamını oku'}
                  </ReadMoreButton>
                </Description>
              </div>
              <Buttons>
                <button onClick={openModal}>Fragman İzle</button>
              </Buttons>
            </Details>
          </DetailContainer>
        </ContentWrapper>
        <Footer />

        {isModalOpen && (
          <Modal>
            <ModalContent>
              <CloseButton onClick={closeModal}>Kapat</CloseButton>
              <VideoPlayer controls>
                <source src={movie.trailerUrl} type="video/mp4" />
                Tarayıcınız bu videoyu oynatamıyor.
              </VideoPlayer>
            </ModalContent>
          </Modal>
        )}
      </PageWrapper>
    </>
  );
};

export default MoviePage;
