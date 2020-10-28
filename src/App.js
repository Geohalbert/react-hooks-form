import { useState } from "react";
import { ReactComponent as GiantRobotLTDLogo } from "./assets/GiantRobotLTD_Logo.svg";
import { ReactComponent as WhiteArrow } from "./assets/White_Arrow.svg";
import InputField from "./components/InputField";
import "./styles/App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const isDisabled = !firstName || !lastName || !address1;
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    const elemId = input.getAttribute("id");
    const reqId = elemId + "ReqLabel";
    if (input.validity.valid && input.getAttribute("required") !== null) {
      document.getElementById(reqId).classList.remove("showing");
    }
    input.addEventListener(
      "invalid",
      event => {
        input.classList.add("error");
        if (input.getAttribute("required") !== null) {
          document.getElementById(reqId).classList.add("showing");
        }
      },
      false
    );
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(
      `First name: ${firstName} \nLast name: ${lastName} \nAddress: ${address1} \nAddress2: ${
        address2 ? address2 : "none"
      } `
    );
  };

  return (
    <div className="App">
      <div className="leftPanel">
        <div className="greetingContainer">
          <GiantRobotLTDLogo className="robotLogo" />
          <p className="welcome">Welcome</p>
          <p className="subText">
            Please tell us a bit about yourself to get started.
          </p>
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
          title="Must be at least 2 non-digit characters"
          pattern="([azA-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
          onChange={e => setFirstName(e.target.value)}
        />

        <InputField
          required
          type="text"
          label="LAST NAME"
          name="lastName"
          minlength="2"
          value={lastName}
          title="Must be at least 2 non-digit characters"
          pattern="([a-zA-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
          onChange={e => setLastName(e.target.value)}
        />

        <InputField
          required
          type="text"
          label="ADDRESS"
          name="address1"
          value={address1}
          minlength="5"
          title="Must be at least 5 characters"
          pattern="[a-zA-ZÀ-ÿ0-9 /\\#.,&\(\)]{5,35}"
          onChange={e => setAddress1(e.target.value)}
        />
        <InputField
          type="text"
          label="ADDRESS 2 (OPTIONAL)"
          name="address2"
          value={address2}
          minlength="5"
          title="Must be at least 5 characters"
          pattern="[a-zA-ZÀ-ÿ0-9 /\\#.,&\(\)]{5,35}"
          onChange={e => setAddress2(e.target.value)}
        />

        <button type="submit" name="Submit" disabled={isDisabled}>
          Next <WhiteArrow className="arrow" />
        </button>
      </form>
    </div>
  );
}
