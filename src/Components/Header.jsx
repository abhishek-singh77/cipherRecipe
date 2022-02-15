import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils as recipeIcon,
  faUser as userIcon,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  return (
    <header className="header">
      <h1 className="heading">
        <FontAwesomeIcon icon={recipeIcon} /> Recipe Blogs
      </h1>
      <span><p>Write your favourite recipies here and show it to the world!</p></span>
      <StatusBar user={user} setUser={setUser} />
    </header>
  );
}

function StatusBar({ user, setUser }) {
  return (
    <div className="status-bar">
      <div className="username">
        <FontAwesomeIcon icon={userIcon} />
        {user}
      </div>
      <button className="button" style={{ borderRadius: "0.5rem" }} onClick={editUser}>
        Edit
      </button>
    </div>
  );

  function editUser() {
    const newUser = prompt("enter the name of new user");
    if (newUser) {
      setUser(newUser);
      localStorage.setItem("user", newUser);
    }
  }
}

function getLocalUser() {
  if (localStorage.hasOwnProperty("user")) {
    return localStorage.getItem("user");
  }
  return "Hello User";
}
export default Header;
