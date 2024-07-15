import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
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
      className=" flex flex-initial object-top justify-between p-2 bg-gray-800 text-sky-100
    border-b border-solid border-blue-300"
    >
      <div className="mx-1 w-24 content-center">CGR League</div>
      {width < 768 && (
        <button onClick={() => navOpenHandler()}>
          <GiHamburgerMenu />
        </button>
      )}

      {navOpen || width > 768 ? (
        <div
          className="flex flex-col absolute bg-gray-800 w-screen h-screen gap-3 top-0 left-0 right-0 py-4
                    md:flex-row md:static md:inset-0 md:h-full md:top-0 md:bg-inherit md:py-0 md:justify-around
      "
        >
          {navOpen && width < 768 ? (
            <button onClick={() => navOpenHandler()} className="text-end mx-4">
              x
            </button>
          ) : null}
          <div className="flex flex-col justify-center mx-auto md:flex-row gap-10">
            <Menu>
              <MenuButton
                className="p-2 rounded-md uppercase hover:text-sky-300 w-screen md:w-32
            data-[active]:outline-2 md:data-[active]:outline data-[active]:outline-slate-600 data-[active]:text-sky-300"
              >
                Drivers
              </MenuButton>
              <MenuItems
                anchor="bottom"
                transition
                className="bg-gradient-to-b bg-gray-800 text-sky-100 p-3 rounded-sm md:mt-2 md:w-72 w-screen outline outline-1 "
              >
                {humanDriversData.map((humanDriver) => (
                  <MenuItem key={humanDriver.id}>
                    <a
                      className="block data-[focus]:bg-blue-100 data-[focus]:text-neutral-600 data-[focus]:px-auto data-[focus]:rounded-md p-2 uppercase text-sm"
                      href="/settings"
                      key={humanDriver.id}
                    >
                      {humanDriver.first_name} {humanDriver.last_name}
                    </a>
                  </MenuItem>
                ))}
                <MenuSeparator className="my-1 h-px bg-sky-200" />
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
          </button>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
