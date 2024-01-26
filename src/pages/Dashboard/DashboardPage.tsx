import React from "react";
import Link from "next/link";
import CodeIcon from "@/components/icon/CodeIcon";
import {
  CardHeader,
  CardContent,
  Card,
  Button,
  Input,
  Box,
} from "@mui/material";
function DashboardPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <CodeIcon className="h-6 w-6" />
              <span className="">AlgoLearn</span>
            </Link>

            <Button className="ml-auto h-8 w-8" variant="outlined">
              <CodeIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CodeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CodeIcon className="h-4 w-4" />
                Sorting Algorithms
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <CodeIcon className="h-4 w-4" />
                Graph Algorithms
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CodeIcon className="h-4 w-4" />
                Dynamic Programming Algorithms
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CodeIcon className="h-4 w-4" />
                Searching Algorithms
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <CodeIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <CodeIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search algorithms..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Algorithms</h1>
            <Button className="ml-auto" size="sm">
              Add Algorithm
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Bubble Sort</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A simple sorting algorithm that repeatedly steps through the
                  list, compares adjacent elements and swaps them if they are in
                  the wrong order.
                </p>
                <p className="font-medium mt-2">Category: Sorting</p>
                <p className="font-medium">Difficulty: Beginner</p>
                <p className="font-medium">Progress: 50%</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Dijkstra's Algorithm</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  An algorithm for finding the shortest paths between nodes in a
                  graph, which may represent, for example, road networks.
                </p>
                <p className="font-medium mt-2">Category: Graph Theory</p>
                <p className="font-medium">Difficulty: Intermediate</p>
                <p className="font-medium">Progress: 75%</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Knapsack Problem</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A problem in combinatorial optimization: Given a set of items,
                  each with a weight and a value, determine the number of each
                  item to include in a collection so that the total weight is
                  less than or equal to a given limit and the total value is as
                  large as possible.
                </p>
                <p className="font-medium mt-2">
                  Category: Dynamic Programming
                </p>
                <p className="font-medium">Difficulty: Advanced</p>
                <p className="font-medium">Progress: 30%</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Quick Sort</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  An efficient sorting algorithm, serving as a systematic method
                  for placing the elements of a random access file or an array
                  in order.
                </p>
                <p className="font-medium mt-2">Category: Sorting</p>
                <p className="font-medium">Difficulty: Intermediate</p>
                <p className="font-medium">Progress: 100%</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Binary Search</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A search algorithm that finds the position of a target value
                  within a sorted array.
                </p>
                <p className="font-medium mt-2">Category: Searching</p>
                <p className="font-medium">Difficulty: Beginner</p>
                <p className="font-medium">Progress: 100%</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
