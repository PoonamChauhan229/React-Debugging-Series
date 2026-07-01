import { useState ,useEffect} from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Amit Shah",
    role: "Frontend Developer",
    location: "Mumbai",
    experience: "12 Years",
  });

  //Bug: Updating state during render
  //    setUser({
      //   ...user,
      //   role: "MERN Stack Developer",
      // });
      
    
  //  Fix1:
      // const updateProfile=()=>{
      //    setUser({
      //   ...user,
      //   role: "MERN Stack Developer",
      // });
      // }

  // Fix 2
  useEffect(()=>{
       setUser({
        ...user,
        role: "MERN Stack Developer",
      });
  },[])


  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #02 - Too Many Re-renders</h3>

        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="Profile"
          className="profile-image"
        />

        <div className="profile-details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>

          <p>
            <strong>Location:</strong> {user.location}
          </p>

          <p>
            <strong>Experience:</strong> {user.experience}
          </p>
        </div>

        {/* <button onClick={updateProfile}>Update Profile</button> */}
      </div>
    </div>
  );
};

export default UserProfile;