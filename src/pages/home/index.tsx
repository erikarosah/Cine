import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../../context/MoviesContext';
import { Header } from '../../components/header';
import { Container, Content, Image, Details } from './style';

export function Home() {
  const { topPopularMovies, topRatedMovies, moviesProviders } = useMovieContext();

  return (
    <Container>
      <Header />
      <h2>Brasil: top 10 em filmes hoje</h2>
      <Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {topRatedMovies &&
            topRatedMovies.map((movie) => (
              <Link to="/" key={movie.id}>
                <SwiperSlide>
                  <Image src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="" />
                  <Details>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <span>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</span>
                    <button>Saiba mais</button>
                  </Details>
                </SwiperSlide>
              </Link>
            ))}
        </Swiper>
      </Content>
      <h2>Em alta</h2>
      <Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {topPopularMovies &&
            topPopularMovies.slice(0, 10).map((movie) => (
              <Link to="/" key={movie.id}>
                <SwiperSlide>
                  <Image src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="" />
                  <Details>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p>Classificação: {movie.vote_average.toFixed(2).replace('.', ',')}</p>
                    <button>Saiba mais</button>
                  </Details>
                </SwiperSlide>
              </Link>
            ))}
        </Swiper>
      </Content>
      <h2>Onde assistir</h2>
      <Content>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {moviesProviders &&
            moviesProviders.map((provider) => (
              <SwiperSlide key={provider.provider_id}>
                <Image src={`https://image.tmdb.org/t/p/w300/${provider.logo_path}`} alt="" />
                <h3>{provider.provider_name}</h3>
              </SwiperSlide>
            ))}
        </Swiper>
      </Content>
    </Container>
  );
}
