import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@mui/material";
import React from "react";

export default function AuthButton() {
  const { user } = useUser();
  return user ? (
    <Button href="api/auth/logout" variant="outlined" color="info">
      Log Out
    </Button>
  ) : (
    <Button href="api/auth/login" variant="outlined" color="info">
      Sign In
    </Button>
  );
}
