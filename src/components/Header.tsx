import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#" aria-label="Home">Home</a></li>
          <li><a href="#" aria-label="About">About</a></li>
          <li><a href="#" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;