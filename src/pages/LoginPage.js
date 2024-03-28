import React, { useState } from "react";
import "../../src/App.css";
import logo from "../images/logo_main.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    if (username == "admin" && password == "admin") {
      console.log("open");
      setLogin(true);
      navigate('/home')
      
    } else {
      console.log("wrong");
      setLogin(false);
      navigate('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="body_main">
          <div className="wrapper">
            <div className="input_container">
              {/*<input className="input_username" placeholder="username"></input>
            <input className="input_password" placeholder="password"></input>*/}
              <InputText
                style={{
                  margin: 20,
                  width: 350,
                }}
                type="text"
                className="p-inputtext-lg"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />

              <InputText
                style={{
                  width: 350,
                }}
                type="password"
                className="p-inputtext-lg"
                placeholder="Password"
                onChange={(e) => setPassWord(e.target.value)}
              />

              <Button
                style={{
                  margin: 50,
                  width: 350,
                }}
                label="Login"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
