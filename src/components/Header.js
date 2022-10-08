import { Link } from "react-router-dom";

function Header(props) {

  return (
    <body>
    <header>
     <img src ="https://mcusercontent.com/2f8927d14f41758bfeba67442/images/8b322632-3881-a51a-8061-15ed4d0e95f4.png" alt="LogoMark"></img>
      <nav className="navStyle">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
    </body>
  );
}

export default Header;
