import React from 'react';

const Users = ({ users, loading, infos }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      <div className="d-flex row columns">
        {users.map((user) => (
          <div className="card-deck text-center mb-4 p-3">
            <div className="card card-width">
              <img src={user.picture.medium} alt={user.name.first} />
              <h1> {user.name.title}</h1>
              <p> {user.name.first}</p>
              <p> {user.name.last}</p>
              <p>{infos.seed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
