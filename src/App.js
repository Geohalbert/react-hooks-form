import { ReactComponent as GiantRobotLTD_Logo } from "./assets/GiantRobotLTD_Logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Welcome">
        <div className="robotLogo">
          <GiantRobotLTD_Logo />
        </div>

        <h1>Welcome</h1>

        <h4>Please tell us a bit about yourself to get started.</h4>
      </div>
      <form />
    </div>
  );
}
