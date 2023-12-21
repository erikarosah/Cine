import { CiSearch } from 'react-icons/ci';
import { IoMdMenu } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { Container, Content, Navigation, Search, Menu } from './style';

export function HeaderHomepage() {
  return (
    <Container>
      <Content>
        <Menu>
          <IoMdMenu />
        </Menu>
        <h1>CineFlix</h1>

        <Navigation>
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
              <Link to="#">Bombando</Link>
            </li>
          </ul>
        </Navigation>
        <Search>
          <div>
            <CiSearch />
          </div>
          <input placeholder="Títulos" />
        </Search>
      </Content>
    </Container>
  );
}
