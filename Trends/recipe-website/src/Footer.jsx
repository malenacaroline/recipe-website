import React from "react";

function Footer() {
  return (
    <footer className="bg-warning text-white text-center py-3">
      <div className="container">
        <p className="m-0">
          &copy; {new Date().getFullYear()} CulinaryDelights. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
