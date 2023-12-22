import * as S from './style';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import ImageDefault from '../../assets/no_image.png';
import { useCineContext } from '../../context/MoviesContext';
import { HeaderDefault } from '../../components/headerDefault';

interface PageDefaultProps {
  url: string;
  title: string;
}

export function PageDefault({ url, title }: PageDefaultProps) {
  const { FetchData, setData, data, HandlePage, setPage, page, search } = useCineContext();
  const urlOfPage = window.location.href;

  useEffect(() => {
    setPage(1);
  }, [urlOfPage]);

  useEffect(() => {
    FetchData(`${url}&page=${page}&api_key=${import.meta.env.VITE_API_KEY}`, setData);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  useEffect(() => {
    FetchData(`${url}&page=${page}&api_key=${import.meta.env.VITE_API_KEY}`, setData);
  }, [search]);

  return (
    <S.Container>
      <HeaderDefault />
      <h1 className="title">{title}</h1>
      <S.Content to="/movie/details">
        {data?.map((movie) => (
          <div key={movie.id}>
            <S.Card
              src={movie.poster_path ? `${import.meta.env.VITE_URL_API_IMAGES}${movie.poster_path}` : ImageDefault}
              alt=""
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </S.Content>
      <S.Controls page={page}>
        {page != 1 && <IoIosArrowBack onClick={() => HandlePage({ type: 'desc' })} />}
        {data.length >= 20 && <IoIosArrowForward onClick={() => HandlePage({ type: 'asc' })} />}
      </S.Controls>
    </S.Container>
  );
}
