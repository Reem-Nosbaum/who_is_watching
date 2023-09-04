import { useState } from "react";
import "./Exercise4.css";
import Netflix from "./assets/Netflix-avatar.png";

const usersDB = [
  {
    id: 1,
    fullName: "Puki Ba",
    movies: ["Rambo", "Rocky"],
  },
  {
    id: 2,
    fullName: "Muki Da",
    movies: ["sherak", "Rocky"],
  },
  {
    id: 3,
    fullName: "Suki Sa",
    movies: ["lola", "Rocky"],
  },
];

export default function Exericise4() {
  const [users, setUsers] = useState(usersDB);
  const [selectedUserId, setSelectedUserId] = useState(null);

  function addUser() {
    const newUserName = prompt("Enter your name");
    const id = "id" + Math.random().toString(16).slice(2);
    const newUser = {
      id: id,
      fullName: newUserName,
      movies: [],
    };
    // users.unshift(newUser);
    // const newUsers = [...users];
    setUsers((prev) => [newUser, ...prev]);
    console.log(users);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function togglePopup(userId) {
    if (selectedUserId === userId) {
      setSelectedUserId(null);
    } else {
      setSelectedUserId(userId);
    }
  }

  return (
    <div className="whatcher-app">
      <div className="header-top">
        <h1>Whacter App</h1>
        <button onClick={addUser}>Add Watcher</button>
      </div>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={Netflix} alt="Netflix avatar" />
            <p>{user.fullName}</p>
            <hr />
            <div className="button-continer">
              <button onClick={() => togglePopup(user.id)}>Select</button>
              <button onClick={() => deleteUser(user.id)}>X</button>
            </div>

            {selectedUserId === user.id && (
              <div className="pop-up">
                <h3 style={{ textAlign: "center" }}>{user.fullName}</h3>
                <hr />
                <ol>
                  {user.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))}
                </ol>
                <button
                  className="close-btn"
                  onClick={() => togglePopup(user.id)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
