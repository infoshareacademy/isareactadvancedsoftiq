import React, { useState, memo, useMemo, useCallback } from "react";

const UserList = memo(({ users, handleEditUser }) => {
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
});

const UserForm = memo(
  ({
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
  }
);

const Stats = memo(({ totalUsers, averageAge }) => (
  <>
    <h3>Statystyki Użytkowników</h3>
    <p>Łączna liczba użytkowników: {totalUsers}</p>
    <p>Średni wiek: {averageAge}</p>
  </>
));

const UserDataManager = () => {
  const [users, setUsers] = useState([
    { id: "id_1", name: "Siema", age: 100, email: "lolo@lolo.pl" },
  ]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleEditUser = useCallback(
    (userId) => {
      const userToEdit = users.find((user) => user.id === userId);
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setAge(userToEdit.age);
      setEditingUserId(userId);
    },
    [users]
  );

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

  const userStats = useMemo(() => {
    const totalUsers = users.length;
    const averageAge =
      totalUsers > 0
        ? users.reduce((sum, user) => sum + user.age, 0) / totalUsers
        : 0;
    return {
      totalUsers,
      averageAge: averageAge.toFixed(2),
    };
  }, [users]);

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
      <Stats
        averageAge={userStats.averageAge}
        totalUsers={userStats.totalUsers}
      />
      <h3>Lista Użytkowników:</h3>
      <UserList users={users} handleEditUser={handleEditUser} />
    </div>
  );
};

export default UserDataManager;
