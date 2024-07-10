import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import useGetHumanDrivers from "../../const/hooks/useGetHumanDrivers";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const { humanDriversData } = useGetHumanDrivers();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="w-screen object-top flex justify-between p-3 bg-neutral-900 text-sky-100">
      <div>CGR League</div>
      <div className="[&_*]:mx-4">
        <Menu>
          <MenuButton className="p-3 rounded-md data-[active]:bg-neutral-800">Drivers</MenuButton>
          <MenuItems anchor="bottom" className='bg-gradient-to-b from-neutral-800 to-neutral-600  text-sky-100 p-3 rounded-md mt-1'>
            {humanDriversData.map((humanDriver) => (
              <MenuItem>
                <a
                  className="block data-[focus]:bg-blue-100"
                  href="/settings"
                  key={humanDriver.id}
                >
                  {humanDriver.first_name} {humanDriver.last_name}
                </a>
              </MenuItem>
            ))}
            <MenuSeparator className="my-1 h-px bg-black" />
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100">All Drivers</a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton>Seasons</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100">wip</a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton>Tracks</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100">wip</a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton>Teams</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100">wip</a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <button onClick={() => darkModeHandler()}>
        {dark ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Navbar;
