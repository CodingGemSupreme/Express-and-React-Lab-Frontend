import { Link } from "react-router-dom";
function Footer(props) {
  const FooterStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    width: "90%",
    margin: "auto",
  };
    return (
<div className="SiteFooter">
  <ul className="FooterStyle1">
<nav className="Footer">
       <li><Link to="/"><div>HOME</div></Link></li>
        </nav>
        </ul>
</div>

    )
  }
  
  export default Footer;
  