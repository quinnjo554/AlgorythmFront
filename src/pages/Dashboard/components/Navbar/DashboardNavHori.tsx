"use client";
import Link from "next/link";
import { Divider, IconButton, Input, InputBase, Paper } from "@mui/material";
import React, { ReactNode } from "react";
import { BiCode, BiSearch } from "react-icons/bi";
import ProfileMenu from "../ProfileMenu";
import { User } from "@/models/User/User";

function DashboardNavHori({
  user,
  children,
}: {
  user: User;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="flex h-26 lg:h-[80px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-200/40">
        <Link className="lg:hidden" href="#">
          <BiCode className="h-6 w-6" />
        </Link>
        <div className="w-full flex-1">
          <Paper
            component="form"
            sx={{
              p: "8px 4px",
              display: "flex",
              alignItems: "center",
              width: 500,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Algorithm..."
              inputProps={{ "aria-label": "Search Algorithm..." }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <BiSearch />
            </IconButton>
          </Paper>
        </div>
        <ProfileMenu img={user.data.user.profileurl ?? ""}></ProfileMenu>
      </header>
      {children}
    </div>
  );
}

export default DashboardNavHori;
