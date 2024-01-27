"use client";
import React from "react";
import Link from "next/link";

import { cardArray } from "@/utils/constants/algoCardConstants";
import {
  CardHeader,
  CardContent,
  Card,
  Button,
  Input,
  Box,
  Avatar,
  Typography,
  Container,
  CardActions,
} from "@mui/material";
import ProfileMenu from "./components/ProfileMenu";
import AlgoCard from "./components/AlgoCard";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useUserEmail } from "@/hooks/user/getUser";
import createDefaultUser from "@/models/User/DeafultUser";
import { BiCode, BiHome } from "react-icons/bi";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";
function DashboardPage() {
  const { user, error } = useUser();
  let userP;
  if (user && user.email) {
    const dUser = createDefaultUser(user);
    const { data: users } = useUserEmail(user.email, dUser);
    userP = users;
  }
  if (!userP) {
    return <LinearDeterminate />;
  }
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-200/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <BiCode className="h-6 w-6" />
              <span className="">Algo Visualizer</span>
            </Link>

            <Button className="ml-auto h-8 w-8" variant="outlined">
              <BiCode className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"
                href="#"
              >
                <BiHome />
                Home
              </Link>
              <Link
                className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"
                href="#"
              >
                <BiCode className="h-4 w-4" />
                Sorting Algorithms
              </Link>
              <Link
                className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"
                href="#"
              >
                <BiCode className="h-4 w-4" />
                Graph Algorithms
              </Link>
              <Link
                className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"
                href="#"
              >
                <BiCode className="h-5 w-5" />
                Dynamic Programming Algorithms
              </Link>
              <Link
                className="flex text-lg items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900"
                href="#"
              >
                <BiCode className="h-4 w-4" />
                Searching Algorithms
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-200/40">
          <Link className="lg:hidden" href="#">
            <BiCode className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Input
                  className="w-full h-8 text-white bg-white shadow-none appearance-none pl-2 md:w-2/3 lg:w-1/3 pr-2 dark:bg-gray-950 rounded-lg "
                  placeholder="Search algorithms..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button className="rounded-full border w-16 h-16 ">
            <ProfileMenu img={userP.data.user.profileurl ?? ""}></ProfileMenu>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Algorithms</h1>
            <Button className="ml-auto">Add Algorithm</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardArray.map((card, index) => (
              <AlgoCard
                key={index}
                header={card.header}
                definition={card.definition}
                progress={card.progress}
                category={card.category}
                difficulty={card.difficulty}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
