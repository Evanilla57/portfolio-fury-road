import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  // Renders header, outlet, and footer
  // Conditionally renders trees class if path is /Portfolio
  const currentPage = useLocation().pathname;
  return (
    <>
      <Header />
      <main className={currentPage === '/Portfolio' ? 'trees' : ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;