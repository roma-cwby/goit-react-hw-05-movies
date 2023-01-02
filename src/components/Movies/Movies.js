import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getFilmsByName } from 'api';
import { HomeList } from 'components/Home/Home.Styled';
import { MoviesSearch } from './Movies.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Movies = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const query = seachParams.get('q') ? seachParams.get('q') : '';

  const location = useLocation();

  async function getData() {
    if (query)
      try {
        const data = await getFilmsByName(query);
        setSearchList(data);
        if (!data?.length) throw new Error();
      } catch (e) {
        alert(`Error`);
      }
  }

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <MoviesSearch>
      <div>
        <input
          type="text"
          onChange={e => setSearchParams({ q: e.target.value })}
          value={query && query}
        ></input>
        <button type="submit" onClick={getData}>
          Search
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {searchList.length > 0 && (
          <HomeList>
            {searchList.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={BASE_IMG_URL + movie.poster_path}
                    alt={movie.title}
                  />
                  <h2>{movie.title}</h2>
                </Link>
              </li>
            ))}
          </HomeList>
        )}
      </Suspense>
    </MoviesSearch>
  );
};

export default Movies;
