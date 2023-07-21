import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import InputForm from "../components/InputForm";

export default function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log('test');
    navigate("/");
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
          <button
            className="primary-button"
            type="submit"
            onClick={() => handleSubmit()}
          >
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
