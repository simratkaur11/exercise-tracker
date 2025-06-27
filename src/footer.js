import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-1">💼 Made with ❤️ by Simrat</p>
        <small>
          <a
            href="https://www.linkedin.com/in/simrat99"
            className="text-light text-decoration-none me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/SimratKaur2244"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐱 GitHub
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
