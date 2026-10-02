import { Link } from "react-router-dom";
import logo from "../assets/Mooviez logo.png";
import Modal from "./Modal";
import { useState } from "react";

function Nav() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <nav className="container">
        <div className="row nav__row">
          <div className="nav__logo--wrapper">
            <figure className="nav__logo">
              <img className="nav__logo--img" src={logo} alt="Logo" />;
            </figure>
            <div className="nav__logo--title">
              <span className="purple">Mooviez</span>
            </div>
          </div>
          <ul className="nav__links">
            <Link to="/" className="nav__link link__hover-effect">
              Home
            </Link>
            <Link to="/search" className="nav__link link__hover-effect">
              Find your Moovie
            </Link>
            <li>
              <Link
                to="#"
                className="nav__link nav__link--primary"
                onClick={openModal}
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <button id="theme-toggle">Mode Toggle</button>
            </li> */}
          </ul>
        </div>
      </nav>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Nav;
