
// //                                              propTypes
// //This tells us the type of variables passed to component into props (for example title ek string accept krta ha lekin agr ek
// // number pass kro to number title pr show to ho jaye ga lekin ek warning message mily ga that will help you resolve that issue)

// Header.propTypes = {
//   title: PropTypes.string,
//   searchBar: PropTypes.bool.isRequired, //isRequired makes it compulsory to pass value to props otherwise throws error
// };

// //                                              defaultProps
// // Ye is liye use krty hain agr parent sy child component koi value expect kr rha ha or ap ny value send nhi ki to
// // default value use kr ly ga

// Header.defaultProps = {
//   title: "Todos App",
//   // searchBar:true
// };



import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          {props.searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  title: "Todos App",
};

// export default Header;
