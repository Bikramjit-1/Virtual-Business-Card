import React from "react";
import PropTypes from "prop-types";

function GetAvatar(props) {

  const fr = new FileReader();

  
  const myFileField = React.createRef();
 

  const uploadImage = (ev) => {
   

    
    if (ev.currentTarget.files.length > 0) {
  
      const myFile = ev.currentTarget.files[0];
 
      fr.addEventListener("load", getImage);
 
      fr.readAsDataURL(myFile);
    }
    
  };

  const getImage = () => {
   
    const image = fr.result;

    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? "" : props.avatar;
  return (
    <div>
      <label className="stuffed-titles" htmlFor="photo">
        Profile Image
      </label>
      <div className="false-stuffed">
        <label className="false-stuffed__false-button" htmlFor="photo">
          Upload Image
          <input
            type="file"
            ref={myFileField}
            className="hiddenButton"
            onChange={uploadImage}
            name="photo"
            id="photo"
          />
        </label>
        <div
          className="false-stuffed__false-square"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
