import { Link, Outlet } from "react-router-dom";
function Profile() {
  return (
    <>
      <div className="navbar">
        <Link to="edit">Edit Profile</Link>
        <Link to="view">View Profile</Link>
      </div>
      <h1>Profile</h1>
      <Outlet />
    </>
  );
}

export default Profile;
