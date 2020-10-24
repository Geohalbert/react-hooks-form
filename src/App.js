import { useState } from "react";
import { ReactComponent as GiantRobotLTD_Logo } from "./assets/GiantRobotLTD_Logo.svg";
import "./App.css";

export default function App() {
  // hooks used for form values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    <div className="App">
      <div className="Welcome">
        <div className="robotLogo">
          <GiantRobotLTD_Logo />
        </div>

        <h1>Welcome</h1>

        <h4>Please tell us a bit about yourself to get started.</h4>
      </div>
      <form>
        {/*  will create component for inputs for future styling */}
        <label>FIRST NAME</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label>LAST NAME</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label>ADDRESS</label>
        <input
          type="text"
          name="address1"
          value={address1}
          onChange={e => setAddress1(e.target.value)}
        />
        <label>ADDRESS 2 (OPTIONAL)</label>
        <input
          type="text"
          name="address2"
          value={address2}
          onChange={e => setAddress2(e.target.value)}
        />
      </form>
    </div>
  );
}
