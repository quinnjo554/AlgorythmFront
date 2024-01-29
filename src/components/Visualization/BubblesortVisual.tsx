import BubbleSort from "@/utils/d3/Lessons/BubbleSort/bubblesort";
import {
  Box,
  Card,
  IconButton,
  Paper,
  Slider,
  SvgIcon,
  Typography,
} from "@mui/material";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
// ... (imports)

export default function BubbleSortVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const isPlayingRef = useRef(false);
  const cancellationToken = useRef({ isCancelled: false });
  const [barSize, setBarSize] = useState(20);

  const togglePlay = () => {
    isPlayingRef.current = !isPlayingRef.current;

    if (isPlayingRef.current && ref.current) {
      cancellationToken.current.isCancelled = false;
      const svg = d3.select(ref.current);

      // Start or resume sorting
      BubbleSort(svg, barSize, cancellationToken.current);
    } else {
      // Stop sorting
      cancellationToken.current.isCancelled = true;
    }
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    setBarSize(value as number);
  };

  useEffect(() => {
    if (ref.current && isPlayingRef.current) {
      const svg = d3.select(ref.current);
      BubbleSort(svg, barSize, cancellationToken.current);
    }
  }, [isPlayingRef.current, barSize]);
  console.log({ cancellationToken });
  return (
    <Box className="w-full h-full">
      <Box>
        <IconButton onClick={togglePlay}>
          {cancellationToken.current.isCancelled ? (
            <PlayArrowIcon fontSize="large" />
          ) : (
            <PauseIcon fontSize="large" />
          )}
        </IconButton>
        <Typography id="bar-size-slider" gutterBottom>
          Number of Bars
        </Typography>
        <Slider
          value={barSize}
          onChange={handleSliderChange}
          aria-labelledby="bar-size-slider"
          min={5}
          max={100}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}`}
        />
      </Box>
      <Box className="rounded-2xl" boxShadow={5}>
        <svg
          className="w-full h-full rounded-lg justify-center aspect-square"
          ref={ref}
        />
      </Box>
    </Box>
  );
}
