import * as S from './style';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCineContext } from '../../context/MoviesContext';
import { HeaderHomepage } from '../../components/headerHomepage';
import { MenuModal } from '../../components/menuModal';
import { useModalMenuContext } from '../../context/ModalMenuContext';

const widthScreen = {
  xg: 1180,
  g: 1011,
  m: 760,
  sm: 670,
  xs: 428,
};

export function Home() {
  const [slidePerView, setSlidePerView] = useState(5);
  const [spaceBetweenSlide, setspaceBetweenSlide] = useState(50);

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

  const { openMenu } = useModalMenuContext();

  useEffect(() => {
    FetchData(`/movie/popular?language=pt-BR&page=1&region=ISO%203166-2`, setPopularMovies);
    FetchData(`/movie/top_rated?language=pt-BR&page=1&region=ISO%203166-2`, setTopRatedMovies);
  }, []);

  useEffect(() => {
    FetchMoviesProviders(`/watch/providers/tv`, setMoviesProviders);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= widthScreen.xg) {
        setSlidePerView(4);
        setspaceBetweenSlide(0);
      }

      if (window.innerWidth <= widthScreen.g) {
        setSlidePerView(3);
      }

      if (window.innerWidth <= widthScreen.m) {
        setspaceBetweenSlide(100);
      }

      if (window.innerWidth <= widthScreen.sm) {
        setspaceBetweenSlide(250);
      }

      if (window.innerWidth <= widthScreen.xs) {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container>
      <MenuModal />
      <HeaderHomepage />
      <h2>Brasil: top 10 em filmes hoje</h2>
      <S.Content>
        <Swiper spaceBetween={spaceBetweenSlide} slidesPerView={slidePerView}>
          {topPopularMovies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <S.Image
                openmenu={openMenu}
                src={`${import.meta.env.VITE_URL_API_IMAGES}${movie.backdrop_path}`}
                alt=""
              />
              <S.Details>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <span>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</span>
                {/* <Link to="/">Saiba mais</Link> */}
              </S.Details>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
      <h2>Em alta</h2>
      <S.Content>
        <Swiper spaceBetween={spaceBetweenSlide} slidesPerView={slidePerView}>
          {topRatedMovies?.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <S.Image
                openmenu={openMenu}
                src={`${import.meta.env.VITE_URL_API_IMAGES}${movie.backdrop_path}`}
                alt=""
              />
              <S.Details>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</p>
                {/* <Link to="/">Saiba mais</Link> */}
              </S.Details>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
      <h2>Onde assistir</h2>
      <S.Content>
        <Swiper spaceBetween={spaceBetweenSlide} slidesPerView={slidePerView}>
          {moviesProviders?.slice(0, 10).map((provider) => (
            <SwiperSlide key={provider.provider_id}>
              <S.Image openmenu={openMenu} src={`${import.meta.env.VITE_URL_API_IMAGES}${provider.logo_path}`} alt="" />
              <h3>{provider.provider_name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Content>
    </S.Container>
  );
}
