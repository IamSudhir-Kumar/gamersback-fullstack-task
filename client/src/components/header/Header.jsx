import './Header.scss';
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

const Header = () => {
  const dispatch = useDispatch(); 
  const { currentUser } = useSelector(state => state.auth); // Destructure currentUser directly from state.auth
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();
  }
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h5> TASK Manager </h5>
        </div>
        <div className="header__buttons">
          {currentUser && currentUser.token ? (
            <Link to='/signin' className='button' onClick={handleClick}> Sign OUT</Link>
          ) : (
            <>
              <Link to='/signin' className='button'> Sign IN</Link>
              <Link to='/signup' className='button'> Sign UP</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header;
