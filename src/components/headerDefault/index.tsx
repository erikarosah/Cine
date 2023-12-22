import { FaFire } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useCineContext } from '../../context/MoviesContext';

export function HeaderDefault() {
  const { search, setSearch } = useCineContext();
  const navigate = useNavigate();

  function GoToSearchMovie(e: React.KeyboardEvent<HTMLElement>) {
    if (!search) {
      return;
    }

    if (e.key === 'Enter') {
      navigate('/movie/details');
    }
  }

  return (
    <S.Content>
      <S.Menu>
        <IoMdMenu />
      </S.Menu>
      <h1>
        <a href="/">CineFlix</a>
      </h1>

      <S.Navigation>
        <ul>
          <li>
            <Link to="/">início</Link>
          </li>
          <li>
            <Link to="/series">Séries</Link>
          </li>
          <li>
            <Link to="/movies">Filmes</Link>
          </li>
          <li>
            <Link to="/movies/onfire">
              Bombando <FaFire />{' '}
            </Link>
          </li>
        </ul>
      </S.Navigation>
      <S.Search>
        <div>
          <CiSearch onClick={GoToSearchMovie} />
        </div>
        <input
          value={search}
          onKeyDown={GoToSearchMovie}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por filmes"
        />
      </S.Search>
    </S.Content>
  );
}
