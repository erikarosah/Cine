import * as S from './style';
import { MdClose } from 'react-icons/md';
import { FaFire } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';

import { useModalMenuContext } from '../../context/ModalMenuContext';
import { RemoveScroll } from 'react-remove-scroll';
import { useCineContext } from '../../context/MoviesContext';

export function MenuModal() {
  const { search, setSearch } = useCineContext();
  const { openMenu, setOpenMenu } = useModalMenuContext();

  function GoToSearchMovie(e: React.KeyboardEvent<HTMLElement>) {
    if (!search) {
      return;
    }

    if (e.key === 'Enter') {
      window.location.replace(`/movie/details/${search}`);
    }
  }

  return (
    <S.Container modalactive={openMenu}>
      {openMenu && (
        <RemoveScroll>
          <S.Content modalactive={openMenu}>
            <header>
              <S.BtnHandleModal onClick={() => setOpenMenu(!openMenu)}>
                <MdClose />
              </S.BtnHandleModal>
              <a href="/">CineFlix</a>
            </header>
            <input
              value={search}
              onKeyDown={GoToSearchMovie}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise por filmes..."
            />
            <S.List>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/movies">Filmes</a>
              </li>
              <li>
                <a href="/series">Séries</a>
              </li>
              <li>
                <a href="/movies/onfire">
                  Bombando <FaFire />
                </a>
              </li>
            </S.List>

            <a href="https://github.com/erikarosah/Cine">
              Érika Rosa &#169; 2023
              <BsGithub />
            </a>
          </S.Content>
        </RemoveScroll>
      )}
    </S.Container>
  );
}
