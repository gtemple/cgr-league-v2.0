import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import useGetHumanDrivers from "../../const/hooks/useGetHumanDrivers";
import useWindowDimensions from "../../const/hooks/util/useWindoDimentions";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { humanDriversData } = useGetHumanDrivers();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className="flex-initial object-top flex justify-between p-2 bg-gray-800 text-sky-100
    border-b border-solid"
    >
      <div className="mx-4">CGR League</div>
      {width < 768 && (
        <button
          onClick={() => navOpenHandler()}
          className="absolute top-0 right-0 px-8 py-8"
        >
          Hamburger
        </button>
      )}

      {navOpen ? (
        <div
          className="flex md:flex-row w-full flex-col md:static absolute
                      bg-slate-300 md:bg-inherit
                      md:m-0 m-3 
                      z-2 md:inset-0 top-0
      "
        >
          <button onClick={() => navOpenHandler()}>x</button>
          <Menu>
            <MenuButton
              className="p-2 rounded-md data-[active]:bg-neutral-800 uppercase hover:text-sky-300
            data-[active]:outline-2 data-[active]:outline data-[active]:outline-slate-50 data-[active]:text-sky-300"
            >
              Drivers
            </MenuButton>
            <MenuItems
              anchor="bottom"
              transition
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
          <button onClick={() => darkModeHandler()}>
            {dark ? "dark" : "light"}
          </button>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
