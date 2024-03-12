"use client";
import React from "react";
import Link from "next/link";
import {
  BiHome,
  BiBarChartAlt2,
  BiVector,
  BiCode,
  BiSearchAlt,
} from "react-icons/bi";
function DashboardNav() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-200/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[80px] items-center border-b px-6">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-black"
            href="/dashboard"
          >
            <BiCode className="h-6 w-6" />
            <span className="">Algo Visualizer</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-400 dark:text-black dark:hover:text-gray-400"
              href="#"
            >
              <BiHome />
              Home
            </Link>
            <Link
              className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-400 dark:text-black dark:hover:text-gray-400"
              href="#"
            >
              <BiBarChartAlt2 className="h-4 w-4" />
              Sorting Algorithms
            </Link>
            <Link
              className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-400 dark:text-black dark:hover:text-gray-400"
              href="#"
            >
              <BiVector className="h-4 w-4" />
              Graph Algorithms
            </Link>
            <Link
              className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-400 dark:text-black dark:hover:text-gray-400"
              href="#"
            >
              <BiCode className="h-6 w-6" />
              Dynamic Programming Algorithms
            </Link>
            <Link
              className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-400 dark:text-black dark:hover:text-gray-400"
              href="#"
            >
              <BiSearchAlt className="h-4 w-4" />
              Searching Algorithms
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
