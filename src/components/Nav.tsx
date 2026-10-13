import "./Nav.css";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div>
        <header className="fixed inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between lg:px-8. pt-5 pb-5 m-0  px-8 md:px-20 lg:px-20 backdrop-blur-md"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="nav-logo font-semibold text-xl m-1 p-1.5">
                <span className="sr-only"> victoriaolusegun </span>
                victoriaolusegun
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-900"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs px-1 py-0.5 hover:text-white hover:bg-indigo-400  focus:bg-indigo-400 focus:text-white active:bg-zinc-950"
                  active:text-indigo-400
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 text-center right-0 z-50 w-full  h-full p-6  backdrop-blur-md sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a
                  href="/"
                  className="nav-logo font-semibold text-xl -m-1.5 p-1.5 "
                >
                  <span className="sr-only "> victoriaolusegun </span>
                  victoriaolusegun
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 "
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-white/10">
                  <div className="space-y-2 py-40">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-3 my-3 block px-3 py-2 text-lg justify-center align-middle
                        md:text-base  hover:text-indigo-400 focus:text-indigo-400  "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                  />
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
    </>
  );
}
export default Nav;
