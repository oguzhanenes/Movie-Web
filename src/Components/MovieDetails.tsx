import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HorizontalSlider from './HorizontalSlider';


import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';
import image19 from '../assets/image19.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const Card = styled.div`
position: relative;
width: 128px;
height: 219px;
overflow: hidden;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.2s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
scroll-snap-align: center;
user-select: none;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
`;

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.6);
color: #fff;
opacity: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0.5rem;
transition: opacity 0.3s ease;
text-align: center;


  ${Card}: hover & {
  opacity: 1;
}
  `;

const Title = styled.h3`
margin: 0;
font-size: 1rem;
font-weight: bold;
color: #F9DBBA
`;

const Description = styled.p`
margin: 0.5rem 0 0;
font-size: 0.875rem;
`;

const SectionTitle = styled.h2`
margin: 1rem 0;
font-size: 1.5rem;
font-weight: bold;
font-family: Arial, sans-serif;
padding: 1rem;
color: #F9DBBA
`;

const movies = [
  { id: '1', title: 'Car', description: 'This is a brief description of Movie Title 1.', imageSrc: image15, category: 'new' },
  { id: '2', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
  { id: '3', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
  { id: '4', title: 'Horror', description: 'This is a brief description of Movie Title 4.', imageSrc: image8, category: 'popular' },
  { id: '5', title: 'Science Fiction', description: 'This is a brief description of Movie Title 5.', imageSrc: image9, category: 'popular' },
  { id: '6', title: 'Adventure', description: 'This is a brief description of Movie Title 6.', imageSrc: image10, category: 'popular' },
  { id: '7', title: 'Sport', description: 'This is a brief description of Movie Title 7.', imageSrc: image11, category: 'popular' },
  { id: '8', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image12, category: 'new' },
  { id: '9', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image13, category: 'new' },
  { id: '10', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image14, category: 'popular' },
  { id: '11', title: 'Car', description: 'This is a brief description of Movie Title 1.', imageSrc: image15, category: 'new' },
  { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
  { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
  { id: '14', title: 'Horror', description: 'This is a brief description of Movie Title 4.', imageSrc: image8, category: 'popular' },
  { id: '15', title: 'Science Fiction', description: 'This is a brief description of Movie Title 5.', imageSrc: image1, category: 'popular' },
  { id: '16', title: 'Adventure', description: 'This is a brief description of Movie Title 6.', imageSrc: image15, category: 'popular' },
  { id: '17', title: 'Sport', description: 'This is a brief description of Movie Title 7.', imageSrc: image16, category: 'recommend' },
  { id: '18', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
  { id: '19', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
  { id: '20', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
  { id: '21', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image2, category: 'recommend' },
  { id: '18', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
  { id: '19', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
  { id: '20', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
  { id: '21', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image2, category: 'recommend' },
  { id: '18', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
  { id: '19', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
  { id: '20', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
  { id: '21', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image14, category: 'recommend' },
  { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, category: 'new' },
  { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
  { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image15, category: 'new' },
  { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image18, category: 'new' },
  { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
  { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image15, category: 'new' },
  { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, category: 'new' },
  { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },

];

const MovieDetails: React.FC = () => {
  const newMovies = movies.filter(movie => movie.category === 'new');
  const popularMovies = movies.filter(movie => movie.category === 'popular');
  const recommendMovies = movies.filter(movie => movie.category === 'recommend');


  const renderMovies = (moviesList: typeof movies) => (
    moviesList.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
        <Card>
          <Image src={movie.imageSrc} alt={movie.title} />
          <Overlay>
            <Title>{movie.title}</Title>
            <Description>{movie.description}</Description>
          </Overlay>
        </Card>
      </Link>
    ))
  );

  return (
    <>
      <SectionTitle>New Movies</SectionTitle>
      <HorizontalSlider items={renderMovies(newMovies)} />

      <SectionTitle>Most Popular</SectionTitle>
      <HorizontalSlider items={renderMovies(popularMovies)} />

      <SectionTitle>Top Rated</SectionTitle>
      <HorizontalSlider items={renderMovies(recommendMovies)} />
    </>
  );
};

export default MovieDetails;
