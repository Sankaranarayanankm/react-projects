import React, { useEffect, useState } from "react";
import "./GithubProfile.css";

const GithubProfile = () => {
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(user) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error("Failed to get User");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.trim() !== "") getUser(user);
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(input);
  };
  console.log(data);

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <div className="gitHubProfile">
      <h1>Git Hup Profile Finder</h1>
      <form onSubmit={submitHandler} className="input">
        <label htmlFor="input">Profile: </label>
        <input
          type="text"
          id="input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading.....</p>}
      {(data.name || data.login) && (
        <div className="gitHubProfile__data">
          <img
            src={data?.avatar_url}
            alt={data.name}
            width={100}
            height={100}
          />
          <h1>{data.name}</h1>
          <div className="details">
            <a href={data?.html_url} target="_blank">
              View Profile
            </a>
            <p>Followers:{data?.followers}</p>
            <p>Following: {data.following}</p>
            <p>Reps:{data.public_repos}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
