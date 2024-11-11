import React, { useEffect, useState } from "react";
import "./AutoComplete.css";
const API = "https://dummyjson.com/users?limit=200";

const AutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  const getUserList = async () => {
    try {
      setLoading(true);
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Failed to get users");
      }
      const result = await response.json();
      // since we need first name only for this project we can store only first name
      const firstNameArray = result.users.map((item) => item.firstName);
      setUsers(firstNameArray);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  function chagneHandler(event) {
    const query = event.target.value.toLowerCase();
    setInput(query);
    const filtered = users.filter(
      (item) => item.toLowerCase().indexOf(query) > -1
    );
    if (filtered.length > 0) {
      setShowDropdown(true);
      setFilteredUser(filtered);
    } else setShowDropdown(false);
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  const clickHandler = (id) => {
    // console.log(id);
    const value = filteredUser[id];
    setInput(value);
    setFilteredUser([]);
  };

  return (
    <div className="autoComplete">
      <h1>Auto-Complete Project</h1>
      <input
        name="search"
        placeholder="Search Users here"
        value={input}
        onChange={chagneHandler}
      />
      {loading && <p>Loading Please wait....</p>}
      <div className="dropdown">
        <ul>
          {input.length > 0 &&
            filteredUser.map((item, index) => (
              <li onClick={() => clickHandler(index)}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
