import { useParams, Link } from 'react-router-dom';
import { getFilmById } from 'api';
import { useEffect, useState } from 'react';
import { MoreInfo, MovieInfo } from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchId() {
      try {
        const data = await getFilmById(movieId);
        setInfo(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchId();
  }, [info]);

  if (info.length < 1) return null;

  return (
    <div style={{ padding: '0 20px' }}>
      <Link to="/">Go Back</Link>
      <MovieInfo>
        <img src={BASE_IMG_URL + info.poster_path} alt={info.title} />
        <div>
          <h2>{info.title + ' (' + info.release_date + ')'}</h2>
          <p>Popularity: {info.popularity}</p>
          <h3>Overview</h3>
          <p>{info.overview}</p>
          <h3>Genres</h3>
          <p>
            {info.genres.reduce((acc, genre) => acc + ` ${genre.name}`, '')}
          </p>
        </div>
      </MovieInfo>
      <MoreInfo>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </MoreInfo>
    </div>
  );
};
