"use client";
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../assets/img/relait.png";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => setSearchOpen(!searchOpen);
  const pathName = usePathname();
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  const navItems = [
    {
      name: "Home",
      url: "/planit",
    },
    {
      name: "About Us",
      url: "/planit",
    },
    {
      name: "PlanIt",
      url: "/planit",
    },
    {
      name: "Teams",
      url: "/planit",
    },
    {
      name: "Contact",
      url: "/planit",
    },
  ];
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lg:flex items-center gap-4 lg:gap-6 xl:gap-8 border-b border-b-black/10 md:border-b-0 mb-4 md:mb-0 mt-4 lg:mt-0">
      {navItems.map((item, index) => {
        const isActive =
          pathName.startsWith(item.name.toLowerCase().replace(/\s/g, ""), 1) ||
          (pathName.endsWith("/") && item.name == "Home");
        return (
          <li
            className="py-2 lg:py-0 border-t border-t-black/10 lg:border-t-0"
            key={index}
          >
            <Link
              href={item.url}
              className={`inline-block relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-900 before:transition-all hover:before:right-[0] transition-all text-brown-300 hover:text-brown-900 font-medium ${
                isActive
                  ? "text-brown-900 before:right-[0]"
                  : "before:right-[100%]"
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <header className="py-3 lg:py-4 shadow sticky top-0 z-40 w-full bg-white backdrop-blur-2xl bg-opacity-80">
      <nav className="max-w-[1200px] m-auto rounded-none py-0 px-4 shadow-none bg-transparent">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href="/planit">
            <Image src={Logo} alt="Relait" />
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:block">{navList}</div>
            <div className="flex items-center">
              {/* <div className="ms-2">
                  <IconButton
                    variant="text"
                    color="white"
                    onClick={handleSearchOpen}
                    className="border border-brown-300 md:border-none rounded"
                  >
                    <MagnifyingGlassIcon className="h-5 px-4 fill-brown-300 md:fill-brown-300" />
                  </IconButton>
                  <Dialog
                    open={searchOpen}
                    handler={handleSearchOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -100 },
                    }}
                  >
                    <DialogHeader>
                      <span className="text-brown-900">Search</span>{" "}
                      <span className="text-brown-300 ms-2">Relait</span>
                    </DialogHeader>
                    <DialogBody className="pt-0">
                      <div className="relative flex w-full gap-2">
                        <Input
                          type="search"
                          color="brown"
                          label="Type here..."
                          className="pr-20 focus:border-1"
                          size="lg"
                          containerProps={{
                            className: "w-[100%]",
                          }}
                        />
                        <Button
                          size="sm"
                          color="amber"
                          className="!absolute right-1 top-1 rounded text-white"
                        >
                          <i className="fa-solid fa-magnifying-glass my-1"></i>
                        </Button>
                      </div>
                    </DialogBody>
                  </Dialog>
                </div> */}
              <div className="hidden md:block ms-2">
                <Link href="/planit">
                  <Button
                    fullWidth
                    variant="outlined"
                    size="sm"
                    color="brown"
                    className="flex items-center gap-3 rounded py-3 px-6 justify-center"
                  >
                    <span className="text-nowrap">Login</span>
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block ms-2">
                <Link href="/planit">
                  <Button
                    fullWidth
                    variant="gradient"
                    size="sm"
                    color="amber"
                    className="flex rounded py-3 px-6 justify-center text-white"
                  >
                    <span className="text-nowrap">Sign up</span>
                  </Button>
                </Link>
              </div>
            </div>
            {/* <ProfileMenu /> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden ms-3 md:ms-4"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex md:hidden items-center gap-x-1">
            <Link href="/login">
              <Button
                fullWidth
                variant="outlined"
                size="sm"
                color="brown"
                className="flex items-center gap-3 rounded py-3 px-6 justify-center"
              >
                <span className="text-nowrap">Login</span>
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                color="amber"
                className="flex rounded py-3 ms-1 px-6 !overflow-visible justify-center text-white"
              >
                <span className="text-nowrap">Sign up</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </nav>
    </header>
  );
}
