import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardActionArea,
} from "@mui/material";
import React from "react";

function AlgoCard({
  header,
  definition,
  category,
  difficulty,
  progress,
}: {
  header: string;
  definition: string;
  category: string;
  difficulty: string;
  progress: string;
}) {
  return (
    <Box>
      <Card className="rounded-xl">
        <CardHeader title={header}></CardHeader>
        <CardContent>
          <Typography className="text-xl">{definition}</Typography>
          <Typography className="font-medium mt-2">
            Category: {category}
          </Typography>
          <Typography className="font-medium">
            Difficulty: {difficulty}
          </Typography>
          <Typography className="font-medium">Progress: {progress}</Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className="w-full text-white bg-black p-3"
          >
            Learn / Code
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default AlgoCard;

/**
 * 
 * <Card>
              <CardHeader>
                <h2 className="font-semibold text-lg">Bubble Sort</h2>
              </CardHeader>
              <CardContent>
                <Typography className="text-lg">
                  A simple sorting algorithm that repeatedly steps through the
                  list, compares adjacent elements and swaps them if they are in
                  the wrong order.
                </Typography>
                <Typography className="font-medium mt-2">
                  Category: Sorting
                </Typography>
                <p className="font-medium">Difficulty: Beginner</p>
                <p className="font-medium">Progress: 50%</p>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-full text-white bg-black p-3"
                >
                  Learn More
                </Button>
              </CardActions>
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
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-full text-white bg-black p-3"
                >
                  Learn More
                </Button>
              </CardActions>
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
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-full text-white bg-black p-3"
                >
                  Learn More
                </Button>
              </CardActions>
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
              <Button className="w-full">Learn More</Button>
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
              <Button className="w-full">Learn More</Button>
            </Card>
 * 
 * 
 */
