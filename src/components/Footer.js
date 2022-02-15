import '../styles/components/Footer.scss';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <small className='footer__copy'>&copy; 2022 Laura Carbajales</small>
      <section className='footer__rrss'>
        <h3 className='footer__rrss--title'>See more about me on:</h3>
        <a href='https://github.com/Laura-Carbajales' className='footer__rrss--link'>
          <i className='icon fab fa-github-square'></i>
        </a>
        <a href='https://www.linkedin.com/in/lauracarbajales/' className='footer__rrss--link'>
          <i className='icon fab fa-linkedin'></i>
        </a>
        <a href='https://twitter.com/Lau_1505' className='footer__rrss--link'>
          <i className='icon fab fa-twitter-square'></i>
        </a>
      </section>
    </footer>
  );
};
export default Footer;
