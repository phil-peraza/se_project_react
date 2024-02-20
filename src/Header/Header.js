import './Header.css';

const Header = ({onCreateModal}) => {
    return(
        <div>
      <header className='header'>
        <div className='header__logo'>
          <div><img src={require('../images/Logo.svg').default} alt='Logo'/></div>
          <div>Time</div>
        </div>
        <div className='header__avatar-logo'>
          <div><button type='text' onClick={onCreateModal}>+ Add clothes</button></div>
          <div>Name</div>
          <div><img src={require('../images/avatarlogo.svg').default} alt='Avatar'/></div>
        </div>
      </header>
    </div>
    );
}

export default Header;