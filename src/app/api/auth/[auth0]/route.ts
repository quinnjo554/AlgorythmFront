// app/api/auth/[auth0]/route.js
import { AfterCallback, AfterCallbackAppRoute, Session, handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { handleCallback } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';





export const GET = handleAuth({
   login: handleLogin({
    returnTo: "/dashboard",
  }),
});
//fix call back