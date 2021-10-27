import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { index, questions } = useGlobalContext();
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6z" />
            </svg>
            <div className="amount-container">
              <p className="total-amount">
                {index + 1}/{questions.length}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
