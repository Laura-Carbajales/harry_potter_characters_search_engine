import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/' className=''>
        <img className='header__img' src={Logo} title='Logo de la web' alt='Logo de la web' />
      </Link>
      <p className='header__text'>Web sólo para Magos y Brujas</p>
      <p className='header__subtext'>¡Muggles fuera!</p>
    </header>
  );
};
export default Header;
