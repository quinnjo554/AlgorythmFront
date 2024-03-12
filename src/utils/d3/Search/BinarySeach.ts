import * as d3 from 'd3'
import { HierarchyPointNode } from 'd3';
import { Nodes, treeData } from './constants';


export default function BinarySearchTree(svg: d3.Selection<SVGGElement, unknown, null, undefined>){
let highlightDelay = 0;
    function search(node: Nodes | undefined, value: number): boolean {
  if (!node) {
      return false;
    }

    // Schedule the highlighting of the node
    setTimeout(() => {
      node.highlight = true;

      // Update the fill color of the node
      svg.selectAll('circle.node')
        .filter(function(d:any){return d.data === node})
        .transition()
        .duration(1000)
        .style('fill', 'blue');
    }, highlightDelay);

    // Increase the delay for the next node
    highlightDelay += 3000;

    if (node.name === value) {
      return true;
    }

    if (node.children) {
      if (value < node.name) {
        return search(node.children[0], value); // Search in the left subtree
      } else {
        return search(node.children[1], value); // Search in the right subtree
      }
    }

    return false;
  } 

search(treeData, 7);


const width = 400; // Adjust the width as needed
const height = window.innerHeight / 5; // Adjust the height as needed



let treeLayout: d3.TreeLayout<any> = d3.tree().size([width, height]);

treeLayout.separation((a, b) => (a.parent === b.parent ? 1.9 : 2));



let rootNode = d3.hierarchy(treeData) as d3.HierarchyPointNode<Nodes>;

treeLayout(rootNode);

const linkGenerator = d3.linkHorizontal<any, HierarchyPointNode<Nodes>>()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; });
svg.selectAll('path.link')
    .data(rootNode.links())
    .enter()
    .append('path')
    .classed('link', true)
    .attr('d', function(d) { return linkGenerator(d) || ''; })
    .style('stroke', 'black') // Use a lighter color for the links
    .style('stroke-width', '2px') // Make the links thicker
    .style('fill', 'none');

svg.selectAll('g.node-group')
    .data(rootNode.descendants())
    .enter()
    .append('g')
    .classed('node-group', true)
    .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y  + ')'; })
    .append('circle')
    .classed('node', true)
    .attr('r', 20)
    .style('fill', 'black')
    .style('stroke', '#fff')
    .style('stroke-width', '2px')
    .transition()
    .delay(function(d, i) { return i * 500; })
    .duration(10000);

svg.selectAll('g.node-group')
    .append('text')
    .text(function(d:any) { return d.data.name; })
    .attr('dy', '.35em') 
    .style('text-anchor', 'middle')
    .style('fill', '#fff') 
    .style('font-family', 'Arial, sans-serif'); 



}