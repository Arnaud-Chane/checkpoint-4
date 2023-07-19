import React from "react";

export default function Login() {
  const handleSubmit = async () => {
    console.info("test");
  };

  return (
    <div className="login-container-page">
      <h2>Accéder à votre compte</h2>

      <form onSubmit={handleSubmit}>
        <input />

        <input />
      </form>
      <div className="links-page-login">
        <div className="buttons-container-login-page">
          <button className="primary-button" type="submit">
            Connexion
          </button>

          <p>Inscription</p>
        </div>

        <p>Mot de passe oublié ?</p>
      </div>
    </div>
  );
}
