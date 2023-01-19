import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import MoviePage from './pages/MoviePage';
import AnimeListPage from './pages/AnimeListPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AnimePage from './pages/AnimePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <div>{/** Page Body **/}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/movies/:movieId" element={<MoviePage />} />
            <Route path="/anime" element={<AnimeListPage />} />
            <Route path="/animes/:animeId" element={<AnimePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>{/** End Page Body **/}
    </div>
    </BrowserRouter>
  );
}

export default App;
