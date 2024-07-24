import "./Nav.css";

function Nav() {
  return (
    <>
      <section className="nav-bar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <div className="nav-lists">
          <ul>
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">LOCATION</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <button className="btn">Login</button>
      </section>
    </>
  );
}

export default Nav;
