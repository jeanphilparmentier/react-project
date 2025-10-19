import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/">
        <span id="homePage" className="navbar-brand slideRight">
          React App
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <Link to="/">
              <span
                id="nav-log"
                lang="en-US"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Blog
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/todo">
              <span
                id="nav-join"
                lang="en-US"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                To-Do List
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts/list">
              <span
                id="nav-pass1"
                lang="en-US"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Contacts
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/compteur">
              <span
                id="nav-pass2"
                lang="en-US"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Compteur
              </span>
            </Link>
          </li>
          {/* /compteur */}
          <li className="nav-item">
            <a
              id="nav-pas3"
              lang="en-US"
              className="nav-link"
              href="https://jean-phil.gitlab.io/react/"
            >
              React + Vite
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
