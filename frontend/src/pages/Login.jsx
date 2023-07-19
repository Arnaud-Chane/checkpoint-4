import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/InputForm";

export default function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmit = async () => {
    console.info("test");
  };

  return (
    <div className="login-container-page">
      <h2>Accéder à votre compte</h2>

      <form onSubmit={handleSubmit}>
        <InputForm
          state={emailLogin}
          setter={setEmailLogin}
          type="email"
          placeholder="Email*"
        />
        <InputForm
          state={passwordLogin}
          setter={setPasswordLogin}
          type="password"
          placeholder="Mot de passe*"
        />
      </form>
      <div className="links-page-login">
        <div className="buttons-container-login-page">
          <button className="primary-button" type="submit">
            Connexion
          </button>

          <Link to="/sign-up">
            <p>Inscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
