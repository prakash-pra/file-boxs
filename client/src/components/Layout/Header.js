import './header.css';

// application header
const Header = () => {
  let url = '';
  return (
    <>
      <header className='header'>
        <a href={url} className='logo'>
          File<span>boxs</span>
        </a>

        <nav>
          <ul>
            <li>
              <a href={url}>login</a>
            </li>
            <li>
              <a href={url}>logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
