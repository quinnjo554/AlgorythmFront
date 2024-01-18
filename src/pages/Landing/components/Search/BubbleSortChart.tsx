import React, { HTMLAttributes, useEffect, useRef } from "react";
import * as d3 from "d3";
import BubbleSort from "@/utils/d3/Sort/Bubblesort";
import { Box, BoxClasses, BoxProps } from "@mui/material";

function BubbleSortChart() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current);
      BubbleSort(svg);
    }
  }, []);

  return (
    <Box className="w-full aspect-[5/2] -z-10 ml-64">
      <svg className="w-full h-full justify-center" ref={ref} />
    </Box>
  );
}

export default BubbleSortChart;
