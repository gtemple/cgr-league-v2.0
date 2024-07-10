import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <nav className="w-screen object-top bg-white dark:bg-black font-sans">
      <div>
        <div>navbar</div>
        <button onClick={() => darkModeHandler()}>
          Switch between dark mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
