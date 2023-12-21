import { instanceAxios } from '../helper/instanceAxios';
import { createContext, useContext, useState } from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}

interface HandlePageProps {
  type: 'asc' | 'desc';
}

interface MoviesProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
}

interface MoviesProvidersProps {
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface ContextProps {
  page: number;
  data: Array<MoviesProps>;
  topRatedMovies: Array<MoviesProps>;
  topPopularMovies: Array<MoviesProps>;
  moviesProviders: Array<MoviesProvidersProps>;
  HandlePage: (prop: HandlePageProps) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setTopRatedMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setMoviesProviders: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>;
  FetchData: (url: string, arr: React.Dispatch<React.SetStateAction<MoviesProps[]>>) => void;
  FetchMoviesProviders: (url: string, arr: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>) => void;
}

const MoviesContext = createContext<ContextProps>({} as ContextProps);

export function MoviesProvider({ children }: ChildrenProps) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<MoviesProps[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<MoviesProps[]>([]);
  const [topPopularMovies, setPopularMovies] = useState<MoviesProps[]>([]);
  const [moviesProviders, setMoviesProviders] = useState<MoviesProvidersProps[]>([]);

  function HandlePage(prop: HandlePageProps) {
    if (prop.type == 'asc') {
      setPage((value) => value + 1);
      return;
    }

    setPage((value) => value - 1);
  }
  async function FetchData(url: string, arr: React.Dispatch<React.SetStateAction<MoviesProps[]>>) {
    try {
      instanceAxios.get(url).then((data) => arr(data.data.results));
    } catch (error) {
      console.log(error);
    }
  }
  async function FetchMoviesProviders(url: string, arr: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>) {
    try {
      instanceAxios.get(url).then((data) => arr(data.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        page,
        data,
        topRatedMovies,
        moviesProviders,
        topPopularMovies,
        setData,
        setPage,
        FetchData,
        HandlePage,
        setMoviesProviders,
        setTopRatedMovies,
        setPopularMovies,
        FetchMoviesProviders,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const useCineContext = () => useContext(MoviesContext);
