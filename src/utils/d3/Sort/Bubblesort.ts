import * as d3 from 'd3';
async function BubbleSort(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>){
 
  let array: number[] = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
  let width = window.innerWidth/ 6;
  let height = 250;
  
  let xScale = d3.scaleBand()
    .domain(d3.range(array.length).map(d => d.toString()))
    .range([0, width])
    .padding(0.13);

 
  let yScale = d3.scaleLinear()
    .domain([0, d3.max(array) as number])
    .range([height, 0]);

  
  let bars = svg.selectAll('rect')
    .data(array)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i.toString()) as number)
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d))
    .attr('fill', 'blue');

  async function Sort() {
    let swapped;
    do {
      swapped = false;
      for(let i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;

          bars.data(array)
            .transition()
            .duration(100)
            .attr('y', d => yScale(d))
            .attr('height', d => height - yScale(d));
          await new Promise(r => setTimeout(r, 110));
        }
      }
    } while(swapped);
  }
  Sort()
}

export default BubbleSort