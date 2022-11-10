import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <figure className="m-2">
          <img src={logo} className="img-fluid" />
        </figure>
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
              <a
                className="nav-link active color ms-5"
                aria-current="page"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color" href="#">
                HOT DEALS
              </a>
            </li>
          </ul>
          <a className="nav-link me-5 color" href="#">
            العربية
          </a>
          <button className="btn text-danger text-bold me-3">SIGN IN</button>
          <button className="btn btn-danger">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
