import {Link, Outlet, useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {AuthorizationStatus} from "../../const";

const Layout = (): JSX.Element => {
  const location = useLocation();
  const authorizationStatus= useAppSelector(state => state.authorizationStatus);
  const userData = useAppSelector(state => state.userData);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="../../img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {authorizationStatus === AuthorizationStatus.Authorized ? userData.name : 'Sign in'}
                    </span>
                    {authorizationStatus === AuthorizationStatus.Authorized ? <span className="header__favorite-count"> 3</span> : null}
                  </Link>
                </li>
                {authorizationStatus === AuthorizationStatus.Authorized ?
                  (<li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>) : null}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={location.pathname === "/" ? "page page--gray page--main": "page page--gray"}>
        <main className="page__main page__main--index">
          <Outlet/>
        </main>
      </div>
      </>
  )
}

export default Layout;
