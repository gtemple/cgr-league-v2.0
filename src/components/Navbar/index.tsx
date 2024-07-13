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
      className="flex-initial object-top flex justify-between p-2 bg-gray-800 text-sky-100
    border-b border-solid"
    >
      <div className="mx-4">CGR League</div>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
          button
      </button>
      <div className="md:flex-row flex-col w-full">
        <div>
        <Menu as='div' className='mx-4 flex-col'>
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
              <MenuItem key={humanDriver.id}>
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
    </div>
  );
};

export default Navbar;
