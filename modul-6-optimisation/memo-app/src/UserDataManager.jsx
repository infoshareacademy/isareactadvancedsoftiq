import React, { useState } from "react";

const UserList = ({ users, handleEditUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.age} lat
          <button onClick={() => handleEditUser(user.id)}>Edytuj</button>
        </li>
      ))}
    </ul>
  );
};

const UserForm = ({
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  handleAddUser,
  handleUpdateUser,
  editingUserId,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUserId) {
      handleUpdateUser({ name, email, age: parseInt(age, 10) });
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        age: parseInt(age, 10),
      };
      handleAddUser(newUser);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Imię"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Wiek"
        required
      />
      <button type="submit">
        {editingUserId ? "Zaktualizuj Użytkownika" : "Dodaj Użytkownika"}
      </button>
    </form>
  );
};

const UserDataManager = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setAge(userToEdit.age);
    setEditingUserId(userId);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUserId ? { ...updatedUser, id: editingUserId } : user
      )
    );
    setEditingUserId(null);
    setName("");
    setEmail("");
    setAge("");
  };

  const userStats = () => {
    const totalUsers = users.length;
    const averageAge =
      totalUsers > 0
        ? users.reduce((sum, user) => sum + user.age, 0) / totalUsers
        : 0;
    return {
      totalUsers,
      averageAge: averageAge.toFixed(2),
    };
  };

  return (
    <div>
      <h2>Zarządzanie Danymi Użytkowników</h2>
      <UserForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        age={age}
        setAge={setAge}
        handleAddUser={handleAddUser}
        handleUpdateUser={handleUpdateUser}
        editingUserId={editingUserId}
      />
      <h3>Statystyki Użytkowników</h3>
      <p>Łączna liczba użytkowników: {userStats.totalUsers}</p>
      <p>Średni wiek: {userStats.averageAge}</p>
      <h3>Lista Użytkowników:</h3>
      <UserList users={users} handleEditUser={handleEditUser} />
    </div>
  );
};

export default UserDataManager;
