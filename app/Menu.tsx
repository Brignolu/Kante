import Link from 'next/link';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#">Réalisations</a></li>
        <li><Link href="/realisations">Prendre rendez-vous</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
