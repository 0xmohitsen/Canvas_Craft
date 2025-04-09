"use client";

import Link from "next/link";
import React from "react";

function header() {
  return (
    <header className="min-h-[10vh] border-b border-white bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block text-teal-600">
          <span className="text-2xl font-bold text-red-600">Canvas</span>
          <span className="text-2xl font-bold text-sky-600">Craft</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-sky-300"
                  href="#"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-sky-300"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-sky-300"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-sky-300"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                href="signin"
                className="block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
