import React, { useState } from "react";

//* Style *//
import "./new.scss";

//* Component s *//
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

//* Images *//
import noImage from "../../images/No Image.png";

//* Icons *//
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

const New = () => {
  const [imageFile, setImageFile] = useState(null);

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h3>Add new user</h3>
        </div>

        <div className="bottom">
          <div className="left">
            <img src={imageFile ? URL.createObjectURL(imageFile) : noImage} alt="No image" className="noImageImg" />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" className="lableFile">
                  <span>Image: </span>
                  <DriveFileMoveIcon />
                </label>
                <input type="file" id="file" onChange={e => setImageFile(e.target.files[0])} style={{display: 'none'}} />
              </div>
              <div className="formInput">
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone:</label>
                <input type="text" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country:</label>
                <input type="text" placeholder="Type here ..." />
              </div>
              <div className="formInput">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
