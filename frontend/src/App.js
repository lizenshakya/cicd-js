import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/");
    setUserName(response.data);
  };

  return (
    <>
      <h1>My Portfolio</h1>
      <h2>Hello {userName}</h2>
    </>
  );
}

export default App;
