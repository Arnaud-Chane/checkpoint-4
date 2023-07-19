import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        body
      );

      if (response.status === 201) {
        console.info("User registered");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="container_form">
      <h2 className="title_form">Créer un compte</h2>

      <InputForm
        state={email}
        setter={setEmail}
        type="email"
        placeholder="Email*"
      />

      <InputForm
        state={password}
        setter={setPassword}
        type="password"
        placeholder="Mot de passe*"
      />

      <div className="form_navigate">
        <Button type="submit" className="primary-button" text="Valider" />
        <Link to="/login">
          <p className="form_login_link">Déjà inscrit(e) ?</p>
        </Link>
      </div>
    </form>
  );
}

export default Signup;
