import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  // Conditionally renders page and highlights page location
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className={currentPage === '/' ? 'grow' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link
            to='/Portfolio'
            className={currentPage === '/Portfolio' ? 'grow' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to='/Contact'
            className={currentPage === '/Contact' ? 'grow' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to='/Resume'
            className={currentPage === '/Resume' ? 'grow' : ''}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;