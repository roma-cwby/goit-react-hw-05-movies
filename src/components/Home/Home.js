import { useState, useEffect } from 'react';
import { HomeList } from './Home.Styled';
import { getPopular } from 'api';
import { Link } from 'react-router-dom';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      try {
        const list = await getPopular();
        setPopularList(list);
      } catch (e) {
        console.log(e);
      }
    }
    getMoviesList();
  }, []);

  return (
    <HomeList>
      {popularList.length > 0 &&
        popularList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
    </HomeList>
  );
};
