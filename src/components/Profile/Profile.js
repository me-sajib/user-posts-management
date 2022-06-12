import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container-width">
      <h2>your profile</h2>
    </div>
  );
};

export default Profile;
