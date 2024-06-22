"use client";

import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AstricLogo from "@/svg/AstricLogo";
import LogoIcon from "@/svg/logoIcon";
import Button from "../buttons/Button";

const popoverClass = "text-[14px] font-semibold leading-6 text-gray-900";
const navLinkCLass =
  "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50";

const navLinks = [
  { name: "Services", href: "#" },
  { name: "Results", href: "#" },
  { name: "Packages", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Client Login", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white w-full flex justify-center ">
      <div className="w-[82%]">
        <nav
          className="bg-white mx-auto flex items-center justify-between px-6 lg:px-12 py-2 max-w-[100vw] "
          aria-label="Global"
        >
          <div className="hidden lg:block">
            <a href="#">
              <AstricLogo />
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#">
              <LogoIcon />
            </a>
          </div>

          <Popover.Group className="hidden lg:flex lg:justify-around lg:w-3/5">
            {navLinks.map((data, index) => (
              <a key={index} href={data.href} className={popoverClass}>
                {data.name}
              </a>
            ))}
          </Popover.Group>
          <Button
            label="FREE CONSULTATION"
            className="font-medium md:text-[10px] text-sm text-white md:px-4"
            href='https://calendly.com/astric/digital-business-solutions'
          />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <AstricLogo />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((data, index) => (
                  <a key={index} href={data.href} className={navLinkCLass}>
                    {data.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
