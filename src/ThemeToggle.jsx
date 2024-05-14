import { useGlobalContext } from "./Context";
import { RiMoonFoggyFill } from "react-icons/ri";
import { RiSunFoggyFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {
          isDarkTheme ? (
            <RiSunFoggyFill className="toggle-icon" />
           ) : (
            <RiMoonFoggyFill className="toggle-icon" />
          )
        }
      </button>
    </section>
  );
};

export default ThemeToggle;