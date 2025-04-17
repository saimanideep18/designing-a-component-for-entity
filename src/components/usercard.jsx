import React from "react"; // Ensure this file exists

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 123 456 7890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-photo" />
      <div className="user-details">
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;