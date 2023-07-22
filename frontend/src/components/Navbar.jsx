import React from "react";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="Navbar">
      <a href="/login">
        <button
          type="submit"
          className="link-deconnection-admin"
          onClick={logout}
        >
          Déconnexion
        </button>
      </a>
    </div>
  );
}

export default Navbar;
