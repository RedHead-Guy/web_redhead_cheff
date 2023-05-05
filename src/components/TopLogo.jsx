import Image from "next/image";
import { useState, useEffect } from "react";
import LogoImage from "../../public/Logo.jpg";
import LogoImage2 from "../../public/Logo2.jpg";
import { GiCupcake } from "react-icons/gi";
import Sidebar from "./Sidebar";
const TopLogo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState("scale-0");
  const showsidebar = () => {
    setSidebarOpen(!sidebarOpen);
if (sidebarOpen) {
  setSidebarStyle("")
} else {
  setSidebarStyle("scale-0")
};
 };
  return (
    <div className="topLogo">
      <div className="flex flex-row place-content-center justify-between m-1 p-1">
        <div></div>
        <div className="hover:scale-110">
          <ThemeIcon />
        </div>
        <div>
          <div > 
          <div className="m-1 p-1 text-orange-500 dark:text-purple-400 hover:scale-125 group">
            <GiCupcake onClick={showsidebar} size={50} />
            {!sidebarOpen ?'':
            <div className='sidebar-tooltip group-hover:scale-100'>
            <span>
              Котегории
            </span>
          </div>}
             </div>
          <div className={sidebarStyle}>
            <Sidebar />
          </div>
          </div>
           </div>
      </div>
    </div>
  );
};
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <Image
          className=" rounded-3xl overflow-hidden"
          src={LogoImage}
          width="80"
          height="80"
          alt="/"
        />
      ) : (
        <Image
          className=" rounded-3xl overflow-hidden"
          src={LogoImage2}
          width="80"
          height="80"
          alt="/"
        />
      )}
    </span>
  );
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme");
  const isEnabled = typeof enabledState === "undefined" && enabled;

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default TopLogo;
