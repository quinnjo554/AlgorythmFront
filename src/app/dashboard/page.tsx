"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

function Dashboard() {
  const { user, error, isLoading } = useUser();
  return <div>{user?.email}</div>;
}

export default Dashboard;
