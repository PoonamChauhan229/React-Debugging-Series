const UserCard = ({ user}) => {
  const updateRole = () => {
    // Mutating the prop directly
    user.role = "MERN Stack Developer";

    console.log("Updated Object:", user);

    alert("Check the console!");
  };

  return (
    <div className="user-card">
      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <p>
        <strong>Experience:</strong> {user.experience}
      </p>

      <button onClick={updateRole}>
        Update Role
      </button>
    </div>
  );
};

export default UserCard;