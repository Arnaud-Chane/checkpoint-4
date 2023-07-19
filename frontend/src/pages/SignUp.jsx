import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.info("test");
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
        <Link to="/login">
          <p className="form_login_link">Déjà inscrit(e) ?</p>
        </Link>
      </div>
    </form>
  );
}

export default Signup;
