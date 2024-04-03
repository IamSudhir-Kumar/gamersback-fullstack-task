
import './Header.scss'

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h3> TASK Manager </h3>
        </div>
        <div className="header__buttons">
          <button>Sign In</button>
          <button>Sign Out</button>
        </div>
      </nav>
    </div>
  )
}

export default Header