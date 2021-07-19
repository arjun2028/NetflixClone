import React from "react";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import userSlice, { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profilebody">
        <h1>Edit Profile</h1>
        <div className="profileinfo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profiledetails">
            <h2>{user.email}</h2>
            <div className="profileplans">
              <button onClick={() => auth.signOut()} className="profilesignout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
