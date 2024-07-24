import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/Metadata";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated || !user) {
    return null; // Return null to avoid rendering user-related info if not authenticated
  }

  return (
    <Fragment>
      <MetaData title={`${user.name}'s Profile`} />
      <div className="profileContainer">
        <div className="border1">
          <h1>My Profile</h1>
          <img src={user.avatar.url} alt={user.name} />
          <Link to="/me/update">Edit Profile</Link>
        </div>
        <div className="border2">
          <div>
            <h4 className="h4">Full Name</h4>
            <p className="p">{user.name}</p>
          </div>
          <div>
            <h4 className="h4">Email</h4>
            <p className="p">{user.email}</p>
          </div>
          <div>
            <h4 className="h4">Joined On</h4>
            <p className="p">{String(user.createdAt).substr(0, 10)}</p>
          </div>
          <div className="border3">
            <Link to="/orders">My Orders</Link>
            <Link to="/password/update">Change Password</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
