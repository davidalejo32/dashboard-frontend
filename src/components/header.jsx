import "../css/Header.css";
import { MdSupportAgent } from "react-icons/md";

function Header(props) {
  const { title, link } = props;

  return (
    <>
      <section className="header__container">
        <a href={link} target="_blank">
          <MdSupportAgent size={40} className="icon__helpdesk" fill="white" />
          <h2 className="header__title">{title}</h2>
        </a>
      </section>
    </>
  );
}

export default Header;
