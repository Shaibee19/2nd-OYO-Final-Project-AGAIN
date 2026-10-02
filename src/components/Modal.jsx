import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ closeModal, onSubmit }) {  
  // MODAL EMAIL FUNCTION?
  // <script> src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"</script>
  //   <script> (function(){
  //         emailjs.init({
  //         publicKey: "M_OoP5ANfy9nBleaM",
  //         });
  //       })();
  // </script>

  // THIS WILL EVETUALLY BE THE ONSUBMIT?
  // function contact(event) {
  //   event.preventDefault();
  //   const loading = document.querySelector(".modal__overlay--loading");
  //   const success = document.querySelector(".modal__overlay--success");
  //   loading.classList += " modal__overlay--visible";
  //   emailjs
  //     .sendForm(
  //       "service_lq4pqm1",
  //       "template_j57chsp",
  //       event.target,
  //       "M_OoP5ANfy9nBleaM"
  //     )
  //     .then(() => {
  //       loading.classList.remove("modal__overlay--visible");
  //       success.classList += " modal__overlay--visible";
  //     })
  //     .catch(() => {
  //       loading.classList.remove("modal__overlay--visible");
  //       alert(
  //         "The email service is temporarily unavailable. Please contact me directly at shaipattzgray@gmail.com"
  //       );
  //     });
  // }

  return (
    <>
    <div className="modal--open">
      <div className="modal">
        <div className="modal__half modal__right">
          <FontAwesomeIcon className="fa-solid fa-xmark modal__exit click" icon="xmark" onClick={closeModal} />
          <h3 className="modal__title modal__title--right">
            Let's have a chat!
          </h3>
          <h4 className="modal__subtitle modal__subtitle--right">
            Any beef about our udderly great moovies - milk the moo-ment!
          </h4>
          <form id="contact__form" onSubmit={closeModal}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                className="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                className="input"
                name="user_email"
                type="email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Join the Herd
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fa-solid fa-spinner"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Holy cow, Appreciate your message! Looking forward to grazing with
            you soon. 🐮
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Modal;
