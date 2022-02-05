import './header.css';

// application header
const Header = (props) => {
  let test = () => {
    const value = true
    props.loginFormHandler(value)
  };
  return (
    <>
      <header className='header'>
        <span className='logo'>
          File<span>boxs</span>
        </span>

        <nav>
          <ul>
            <li>
              <span onClick={test}>login</span>
            </li>
            <li>
              <span>logout</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
