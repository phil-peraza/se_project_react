import './Header.css';

const Header = () => {
    console.log('Header')

    return(
        <div>
      <header className='header'>
        <div className='header__logo'>
          <div><img src='/images/Logo.svg' alt='Logo'/></div>
          <div>Time</div>
        </div>
        <div className='header__avatar-logo'>
          <div><button type='text'>+ Add clothes</button></div>
          <div>Name</div>
          <div><img src='/images/avatarlogo.svg' alt='Avatar'/></div>
        </div>
      </header>
    </div>
    );
}

export default Header;