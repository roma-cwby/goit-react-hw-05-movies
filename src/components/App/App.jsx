import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { Header, HeaderLink } from './App.styled';

const Movies = lazy(() => import('../Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={'NotFound'} />
        </Routes>
      </Suspense>
    </div>
  );
};
