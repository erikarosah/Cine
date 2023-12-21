import { createContext, useContext, useEffect, useState } from 'react';
import { instanceAxios } from '../helper/instanceAxios';

interface TopPopularMoviesProps {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

interface MoviesProvidersProps {
  provider_id: number;
  logo_path: string;
  provider_name: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface ContextProps {
  topRatedMovies: Array<TopPopularMoviesProps>;
  topPopularMovies: Array<TopPopularMoviesProps>;
  moviesProviders: Array<MoviesProvidersProps>;
}

const MoviesContext = createContext<ContextProps>({} as ContextProps);

export function MoviesProvider({ children }: ChildrenProps) {
  const [topRatedMovies, setTopRatedMovies] = useState<TopPopularMoviesProps[]>([]);
  const [topPopularMovies, setPopularMovies] = useState<TopPopularMoviesProps[]>([]);
  const [moviesProviders, setMoviesProviders] = useState<MoviesProvidersProps[]>([]);

  useEffect(() => {
    try {
      instanceAxios
        .get('/movie/top_rated?language=pt-BR&page=1&region=ISO%203166-2')
        .then((data) => setPopularMovies(data.data.results));
      instanceAxios
        .get('/movie/popular?language=pt-BR&page=1&region=ISO%203166-2')
        .then((data) => setTopRatedMovies(data.data.results));
      instanceAxios
        .get('watch/providers/movie?language=pt-BR&watch_region=BR')
        .then((data) => setMoviesProviders(data.data.results.slice(0, 10)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <MoviesContext.Provider value={{ topRatedMovies, topPopularMovies, moviesProviders }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovieContext() {
  const context = useContext(MoviesContext);

  return context;
}
