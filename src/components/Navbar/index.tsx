import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false)
  
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
}
  return (
    <div className="bg-white dark:bg-black">
      <div>navbar</div>
      <button onClick={() => darkModeHandler()}>
        Switch between dark mode
      </button>
    </div>
  );
};

export default Navbar;
