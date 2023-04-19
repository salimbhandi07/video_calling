import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${inputText}`);
  };
  return (
    <div className="home-page">
      <form className=".form" onSubmit={handleSubmit}>
        <div>
          <h1 className="heading">Enter Room code</h1>
          <input
            className="input-text"
            type="text"
            required
            placeholder="Enter Room Code"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button className="btn-submit" type="submit">
          Enter Room
        </button>
      </form>
    </div>
  );
}

export default HomePage;
