import GetAvatar from "./GetAvatar";

function Stuffed(props) {
  return (
    <fieldset className="stuffed-fieldset">
      <div
        className="stuffed js-stuffed-container"
        onClick={props.handlerClickColapsibleForm}
      >
        <i className="fa-regular fa-keyboard keyboard"></i>
        <p className="stuffed__text-stuffed">Fill</p>
        <i className={`fa-solid fa-angle-up js-arrow2 ${props.arrowForm}`}></i>
      </div>
      
      <div
        className={`stuffed__stuffed-form js-stuffed js-stuffed-form js-reset-form ${props.triangleForm}`}
      >
        <label className="stuffed-titles" htmlFor="name">
        Full Name
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forname js_reset-name"
          id="name"
          type="text"
          name="name"
          placeholder="Your Full Name Here"
          required
          value={props.dataCard.name}
          onChange={props.handleInput}
        />
        
        <label className="stuffed-titles" htmlFor="job">
        Position
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forjob js_reset-job"
          id="job"
          type="text"
          name="job"
          placeholder="Example-Front-end developer"
          required
          value={props.dataCard.job}
          onChange={props.handleInput}
        />

        

        <GetAvatar updateAvatar={props.updateAvatar} avatar={props.avatar} />

        
        <label className="stuffed-titles" htmlFor="email">
          Email
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-formail js_reset-mail"
          id="email"
          type="email"
          name="email"
          placeholder="Example@gmail.com"
          required
          value={props.dataCard.email}
          onChange={props.handleInput}
        />
       
        <label className="stuffed-titles" htmlFor="telef">
          Phone No.
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forphone js_reset-phone"
          id="phone"
          type="tel"
          name="phone"
          placeholder="000-000-000"
          required
          value={props.dataCard.phone}
          onChange={props.handleInput}
        />
       
        <label className="stuffed-titles" htmlFor="linkedin">
          Linkedin
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forlkdn js_reset-linkedin"
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="Enter Your LinkedIn Profile Here"
          value={props.dataCard.linkedin}
          onChange={props.handleInput}
        />
        <label className="stuffed-titles" htmlFor="github">
          Website
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forgit js_reset-git"
          type="text"
          name="github"
          id="github"
          placeholder="Web Site URL "
          value={props.dataCard.github}
          onChange={props.handleInput}
        />
        <span className="cutting-line2"></span>
      </div>
    </fieldset>
  );
}

export default Stuffed;
