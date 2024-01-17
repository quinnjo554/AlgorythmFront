"use client";

import LandingImg from "../../../public/landingImg.jpg";
import Link from "next/link";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import BubbleSortChart from "@/components/Sort/BubbleSortChart";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <CodeIcon />
          <span>AlgoVisualizer</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Button size="small" variant="outlined">
            Sorting
          </Button>

          <Button variant="outlined">Searching</Button>

          <Button variant="outlined">Graph Algorithms</Button>

          <Button variant="outlined">Dynamic Programming</Button>
        </nav>
        <Box sx={{ marginLeft: "auto" }}>
          <Button color="info" variant="outlined">
            Sign in
          </Button>
        </Box>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="w-content">
                <h1 className="lg:leading-tighter text-4xl m-4 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Visualize Algorithms in Action
                </h1>
                <p className="max-w-[700px] m-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn algorithms by visualizing them. Start your journey now.
                </p>
                <Button
                  className="inline-flex h-10 m-4 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Start Visualizing
                </Button>
              </div>
              <div>
                <img
                  alt="Hero"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover"
                  height="500"
                  src={LandingImg.src}
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-12 px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-4xl/tight">
                  Sorting Algorithms
                </h2>
                <p className="max-w-[900px] font-semibold text text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Understand how different sorting algorithms work with our
                  interactive visualizations.
                </p>
              </div>
              <div className="w-full max-w-[900px]">
                <BubbleSortChart></BubbleSortChart>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Example: Bubble Sort
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Searching Algorithms
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn how searching algorithms find the data you're looking for.
              </p>
            </div>
            <div className=" w-full max-w-[900px] space-y-2">
              <p className="text-center text-gray-500 dark:text-gray-400">
                Example: Binary Search
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AlgoVisualizer. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Facebook
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Instagram
          </Link>
        </nav>
        <form className="mt-4 sm:mt-0 sm:ml-auto flex items-center gap-2">
          <input
            className="max-w-lg flex-1"
            placeholder="Enter your email"
            type="email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
}

function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default LandingPage;
