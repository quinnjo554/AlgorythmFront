import BinarySearchTree from "@/utils/d3/Search/BinarySeach";
import { Box } from "@mui/material";
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

function BinarySearch() {
  const ref = useRef<SVGSVGElement | null>(null);

  const margin = { top: 20, right: 20, bottom: 20, left: 20 }; // Adjust as needed
  const width = 400 - margin.left - margin.right; // Adjust the width as needed
  const height = 450 - margin.top - margin.bottom; // Adjust the height as needed

  useEffect(() => {
    if (ref.current) {
      const svg: d3.Selection<SVGSVGElement, unknown, null, undefined> = d3
        .select(ref.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      const g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      BinarySearchTree(g);
    }
  }, []);

  return (
    <Box className="w-full h-full aspect-[5/2] -z-10 ml-60">
      <svg className="w-full h-[100%]" ref={ref} />
    </Box>
  );
}

export default BinarySearch;
