import { useState } from "react";
import { ReactComponent as GiantRobotLTD_Logo } from "./assets/GiantRobotLTD_Logo.svg";
import { ReactComponent as White_Arrow } from "./assets/White_Arrow.svg";
import InputField from "./components/InputField";
import "./App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const isDisabled = !firstName || !lastName || !address1;
  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting`);
  };
  return (
    <div className="App">
      <div className="greeting">
        <GiantRobotLTD_Logo className="robotLogo" />
        <div className="welcome">Welcome</div>
        <div className="subText">
          Please tell us a bit about yourself to get started.
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          autoFocus
          required
          type="text"
          label="FIRST NAME"
          name="firstName"
          minlength="2"
          value={firstName}
          pattern="([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
          onChange={e => setFirstName(e.target.value)}
        />

        <InputField
          required
          type="text"
          label="LAST NAME"
          name="lastName"
          minlength="2"
          value={lastName}
          pattern="([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
          onChange={e => setLastName(e.target.value)}
        />

        <InputField
          required
          type="text"
          label="ADDRESS"
          name="address1"
          value={address1}
          pattern="^[A-Za-z0-9'\.\-\s\,]{5,}"
          onChange={e => setAddress1(e.target.value)}
        />
        <InputField
          type="text"
          label="ADDRESS 2 (OPTIONAL)"
          name="address2"
          value={address2}
          pattern="^[A-Za-z0-9'\.\-\s\,]"
          onChange={e => setAddress2(e.target.value)}
        />

        <button type="submit" name="Submit" disabled={isDisabled}>
          Next <White_Arrow className="arrow" />
        </button>
      </form>
    </div>
  );
}
