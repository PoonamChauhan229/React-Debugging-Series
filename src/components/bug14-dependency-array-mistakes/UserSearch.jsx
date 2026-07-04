import { useEffect, useState } from "react";
import "./UserSearch.css";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching users for:", search);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );

        setUsers(filteredUsers);
      });
  }, []); 
  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #14 - Dependency Array Mistakes</h3>

        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              {user.name}
            </div>
          ))}
        </div>

        <p className="note">
          Try searching for a user.
        </p>
      </div>
    </div>
  );
};

export default UserSearch;