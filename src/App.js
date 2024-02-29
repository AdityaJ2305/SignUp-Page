import "./App.css";
import { useState} from "react";

function App() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleClicker = (e) => {
    e.preventDefault();
    alert("Welcome to the Login Page");
    console.log(username);
    console.log(pass);
    console.log(phone);
    console.log(email);
    console.log([username, pass, phone, email]);
  };

  return (
      <div className="main">
        <form onSubmit={handleClicker}>
          <h1>SignUp Form</h1>
          <label>Username:</label>
          <input
            type="text"
            required
            placeholder="Enter the name"
            className="inp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            required
            placeholder="Enter the password"
            className="inp"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <label>Mobile Number:</label>
          <input
            type="number"
            required
            placeholder="Enter the phone number"
            className="inp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>Email id:</label>
          <input
            type="email"
            required
            placeholder="Enter the email id"
            className="inp" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button>Log In</button>
        </form>
      </div>
  );
}

export default App;
