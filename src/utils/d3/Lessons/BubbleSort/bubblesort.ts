import * as d3 from 'd3';
async function BubbleSort(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  barSize: number,
  cancellationToken: { isCancelled: boolean }
) {
  // Define your data (array to sort)
  //let data = Array.from({length: 100}, () => Math.floor(Math.random() * 100));


  let data: number[] = Array.from({ length: barSize }, () => Math.floor(Math.random() * barSize));
  let parentNode = d3.select(svg.node()?.parentNode as Element);
  let width = parentNode.node()?.getBoundingClientRect().width ?? innerWidth;
  let docHeight = parentNode.node()?.getBoundingClientRect().height ?? innerHeight;

  let height = docHeight;

  let xScale = d3.scaleBand()
    .domain(d3.range(data.length).map(d => d.toString()))
    .range([0, width])
    .padding(0.13);


  let yScale = d3.scaleLinear()
    .domain([0, d3.max(data) as number])
    .range([height, 0]);


  let bars = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i.toString()) as number)
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d))
    .attr('fill', '#20C20E');

  async function bubbleSort() {
    let len = data.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (cancellationToken.isCancelled) {
          svg.selectAll("*").remove();
          return;
        }
        bars.filter((d, idx) => idx === j || idx === j + 1)
          .attr('fill', 'red');

        // If the current bar is taller than the next one, swap them
        if (data[j] > data[j + 1]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
          // Update bars
          bars.data(data)
            .transition()
            .duration(1000 / barSize)
            .attr('y', d => yScale(d))
            .attr('height', d => height - yScale(d));
        }

        // Wait for animation to finish and revert color
        await new Promise(r => setTimeout(r, 2000 / barSize));
        bars.attr('fill', '#20C20E');
      }
    }
  }
  bubbleSort()
}

export default BubbleSort
