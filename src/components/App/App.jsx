import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';
import { Header, HeaderLink } from './App.styled';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderLink to="/" end>
            Home
          </HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
