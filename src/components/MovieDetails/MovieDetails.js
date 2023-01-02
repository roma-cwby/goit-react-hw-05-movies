import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getFilmById } from 'api';
import { useEffect, useState } from 'react';
import { MoreInfo, MovieInfo } from './MovieDetails.styled';
import { BackBtn } from 'components/App/App.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchId() {
      try {
        const data = await getFilmById(movieId);
        setInfo(data);
      } catch (e) {
        alert(`Error`);
      }
    }

    fetchId();
  }, [movieId]);

  if (info.length < 1) return null;

  return (
    <div style={{ padding: '10px 20px' }}>
      <BackBtn to={location.state?.from || '/'}>Go Back</BackBtn>
      <MovieInfo>
        <img src={BASE_IMG_URL + info.poster_path} alt={info.title} />
        <div>
          <h2>{info.title + ' (' + info.release_date.slice(0, 4) + ')'}</h2>
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
        <Link to="cast" state={{ from: location.state?.from || '/' }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from || '/' }}>
          Reviews
        </Link>
      </MoreInfo>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
