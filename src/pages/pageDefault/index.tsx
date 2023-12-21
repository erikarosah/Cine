import * as S from './style';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { useCineContext } from '../../context/MoviesContext';
import { HeaderDefault } from '../../components/headerDefault';

interface PageDefaultProps {
  url: string;
  title: string;
}

export function PageDefault({ url, title }: PageDefaultProps) {
  const { FetchData, setData, data, HandlePage, setPage, page } = useCineContext();
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

  return (
    <S.Container>
      <HeaderDefault />
      <h1>{title}</h1>
      <S.Content to="/movie/details">
        {data?.map((movie) => (
          <S.Card key={movie.id} src={`${import.meta.env.VITE_URL_API_IMAGES}${movie.poster_path}`} alt="" />
        ))}
      </S.Content>
      <S.Controls page={page}>
        {page != 1 && <IoIosArrowBack onClick={() => HandlePage({ type: 'desc' })} />}
        {page <= data.length && <IoIosArrowForward onClick={() => HandlePage({ type: 'asc' })} />}
      </S.Controls>
    </S.Container>
  );
}
