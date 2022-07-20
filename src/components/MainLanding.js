import '../styles/main.scss';
import logoAwesome from '../images/logo-awesome-profile-cards.svg';
import { Link } from 'react-router-dom';

function MainLanding() {
  const handleClickStart = () => {};
  return (
    <>
      <main className="main-landing">
        <article className="container1">
          
          <img
            className="container1__logoMain"
            src={logoAwesome}
            alt="Logo de la aplicación"
          />
          <h1 className="container1__title">Create your business card</h1>
          <p className="container1__parraf">
          Create better professional contacts in an easy and comfortable way
          </p>
        </article>
       
        <section className="section">
          <ul className="container2">
            <li className="container2__items">
              <i className="fa-regular fa-object-ungroup container2__icon"></i>
              <p className="container2__pMenu">Design</p>
            </li>

            <li className="container2__items">
              <i className="fa-regular fa-keyboard container2__icon"></i>
              <p className="container2__pMenu">Fill</p>
            </li>
            <li className="container2__items">
              <i className="fa-solid fa-square-share-nodes container2__icon"></i>
              <p className="container2__pMenu">Share</p>
            </li>
          </ul>
          <div>
            <button className="button" onClick={handleClickStart}>
              <Link className="button__link" to="/card">
              Create
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
export default MainLanding;
