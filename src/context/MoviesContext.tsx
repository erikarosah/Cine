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
  search: string;
  loading: boolean;
  data: Array<MoviesProps>;
  topRatedMovies: Array<MoviesProps>;
  topPopularMovies: Array<MoviesProps>;
  detailsMovie: Array<MoviesProps>;
  moviesProviders: Array<MoviesProvidersProps>;
  setSearch: (query: string) => void;
  HandlePage: (prop: HandlePageProps) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setTopRatedMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setDetailsMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
  setMoviesProviders: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>;
  FetchData: (url: string, arr: React.Dispatch<React.SetStateAction<MoviesProps[]>>) => void;
  FetchMoviesDetails: (url: string, arr: React.Dispatch<React.SetStateAction<MoviesProps[]>>) => void;
  FetchMoviesProviders: (url: string, arr: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>) => void;
}

const MoviesContext = createContext<ContextProps>({} as ContextProps);

export function MoviesProvider({ children }: ChildrenProps) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [data, setData] = useState<MoviesProps[]>([]);
  const [detailsMovie, setDetailsMovies] = useState<MoviesProps[]>([]);
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
    const controller = new AbortController();

    try {
      instanceAxios.get(url).then((data) => arr(data.data.results));
      setLoading(false);
    } catch (error) {
      console.log(error);
      controller.abort();
    }
  }

  async function FetchMoviesProviders(url: string, arr: React.Dispatch<React.SetStateAction<MoviesProvidersProps[]>>) {
    const controller = new AbortController();

    try {
      instanceAxios.get(url).then((data) => arr(data.data.results));
      setLoading(false);
    } catch (error) {
      console.log(error);
      controller.abort();
    }
  }

  async function FetchMoviesDetails(url: string, arr: React.Dispatch<React.SetStateAction<MoviesProps[]>>) {
    const controller = new AbortController();

    try {
      instanceAxios.get(url).then((data) => arr(data.data.results));
      setLoading(false);
    } catch (error) {
      console.log(error);
      controller.abort();
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        page,
        data,
        search,
        loading,
        detailsMovie,
        topRatedMovies,
        moviesProviders,
        topPopularMovies,
        setData,
        setPage,
        FetchData,
        HandlePage,
        setSearch,
        setDetailsMovies,
        setPopularMovies,
        setTopRatedMovies,
        FetchMoviesDetails,
        setMoviesProviders,
        FetchMoviesProviders,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const useCineContext = () => useContext(MoviesContext);
