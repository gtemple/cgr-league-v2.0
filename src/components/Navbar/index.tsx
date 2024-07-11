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
    <div
      className="w-screen flex-initial object-top flex justify-between p-2 bg-gray-800 text-sky-100
    border-b border-solid"
    >
      <div>CGR League</div>
      <div className="[&_*]:mx-4">
        <Menu>
          <MenuButton
            className="p-2 rounded-md data-[active]:bg-neutral-800 uppercase hover:text-sky-300
            data-[active]:outline-2 data-[active]:outline data-[active]:outline-slate-50 data-[active]:text-sky-300"
          >
            Drivers
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-gradient-to-b from-neutral-800 to-neutral-600  text-sky-100 p-3 rounded-md mt-1 "
          >
            {humanDriversData.map((humanDriver) => (
              <MenuItem>
                <a
                  className="block data-[focus]:bg-blue-100 data-[focus]:text-neutral-600 data-[focus]:px-auto data-[focus]:rounded-md p-2"
                  href="/settings"
                  key={humanDriver.id}
                >
                  {humanDriver.first_name} {humanDriver.last_name}
                </a>
              </MenuItem>
            ))}
            <MenuSeparator className="my-1 h-px bg-black" />
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 data-[focus]:text-neutral-600 data-[focus]:px-auto data-[focus]:rounded-md p-2">
                All Drivers
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton>Seasons</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 ">wip</a>
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
