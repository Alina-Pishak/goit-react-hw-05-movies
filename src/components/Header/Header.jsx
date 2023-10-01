import { NavLink } from 'components/App/App.styled';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <nav>
      <HeaderContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movies</NavLink>
      </HeaderContainer>
    </nav>
  );
};

export default Header;
