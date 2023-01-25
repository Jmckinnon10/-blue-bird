import React, { useState } from "react";

function FollowTheSnow({ user }) {
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://5njq1hdmfl.execute-api.us-east-1.amazonaws.com/signup", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({ location, phoneNumber }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="follow-the-snow">
      <h1 className="location">
        Enter phone number below to receieve Blue Bird weather updates...
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />{" "}
        <br />
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
        {success && <p>Weather update request sent!</p>}
      </form>
    </div>
  );
}

export default FollowTheSnow;
