import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>BlogPost</h1>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
