import { useEffect, useState } from 'react';
import { getFilmCast } from 'api';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await getFilmCast(movieId);
        setCast(data);
      } catch (e) {
        console.log(e);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <CastList>
      {cast.map(item => (
        <li key={item.id}>
          <img src={BASE_IMG_URL + item.profile_path} alt={item.name} />
          <h2>{item.name}</h2>
          <h3>{item.character}</h3>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
