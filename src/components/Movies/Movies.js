import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getFilmsByName } from 'api';
import { HomeList } from 'components/Home/Home.Styled';
import { MoviesSearch } from './Movies.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Movies = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState('');
  const searchQuery = seachParams.get('q');

  const location = useLocation();

  const onHandleSubmit = e => {
    e.preventDefault();

    setSearchParams({ q: query });
  };

  useEffect(() => {
    async function getData() {
      if (!searchQuery) return;

      try {
        const data = await getFilmsByName(searchQuery);
        setSearchList(data);
        if (!data?.length) throw new Error();
      } catch (e) {
        alert(`Error`);
      }
    }

    getData();
  }, [searchQuery]);

  return (
    <MoviesSearch>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchList.length > 0 && (
        <HomeList>
          {searchList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
              </Link>
            </li>
          ))}
        </HomeList>
      )}
    </MoviesSearch>
  );
};

export default Movies;
