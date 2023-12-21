import * as S from './style';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCineContext } from '../../context/MoviesContext';
import { HeaderHomepage } from '../../components/headerHomepage';

export function Home() {
  const {
    FetchData,
    topRatedMovies,
    moviesProviders,
    topPopularMovies,
    setPopularMovies,
    setTopRatedMovies,
    setMoviesProviders,
    FetchMoviesProviders,
  } = useCineContext();

  useEffect(() => {
    FetchData('/movie/popular?language=pt-BR&page=1&region=ISO%203166-2', setPopularMovies);
    FetchData('/movie/top_rated?language=pt-BR&page=1&region=ISO%203166-2', setTopRatedMovies);
    FetchMoviesProviders('/watch/providers/movie?language=pt-BR&watch_region=BR', setMoviesProviders);
  }, []);

  return (
    <S.Container>
      <HeaderHomepage />
      <h2>Brasil: top 10 em filmes hoje</h2>
      <S.Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {topPopularMovies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <S.Image src={`${import.meta.env.VITE_URL_API_IMAGES}${movie.backdrop_path}`} alt="" />
              <S.Details>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <span>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</span>
                <Link to="/movie/details">Saiba mais</Link>
              </S.Details>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
      <h2>Em alta</h2>
      <S.Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {topRatedMovies?.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <S.Image src={`${import.meta.env.VITE_URL_API_IMAGES}${movie.backdrop_path}`} alt="" />
              <S.Details>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</p>
                <Link to="/movie/details">Saiba mais</Link>
              </S.Details>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
      <h2>Onde assistir</h2>
      <S.Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {moviesProviders?.slice(0, 10).map((provider) => (
            <SwiperSlide key={provider.provider_id}>
              <S.Image src={`${import.meta.env.VITE_URL_API_IMAGES}${provider.logo_path}`} alt="" />
              <h3>{provider.provider_name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
    </S.Container>
  );
}
