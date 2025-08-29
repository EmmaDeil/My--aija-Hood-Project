import React from 'react'
import AppLogo from '../../../public/naijahoodlogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowSearch((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-green-200">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={AppLogo} alt="NaijaHood Logo" width="30" height="35"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="badge bg-primary">New</span>
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <span className="badge bg-secondary">New</span>
                <a className="nav-link" href="#">Be an Agent</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Help<i className="bi bi-question-lg"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchClick}>
              {showSearch && (
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              )}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
