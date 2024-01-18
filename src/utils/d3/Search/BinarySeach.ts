import * as d3 from 'd3'
import { HierarchyPointNode } from 'd3';
import { root } from 'postcss';
import { Nodes, treeData } from './constants';


export default function BinarySearchTree(svg: d3.Selection<SVGGElement, unknown, null, undefined>){
// Define the data for the binary tree


// Define the binary search function
function search(node: Nodes, value: number): boolean {
  if (node.name === value) {
    node.highlight = true;
    return true;
  }
  if (node.children) {
    let found = false;
    for (let child of node.children) {
      found = search(child, value);
      if (found) {
        node.highlight = true;
        return true;
      }
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
    .duration(1000)
    .style('fill', function(d) { return d.data.highlight ? 'blue' : 'black'; });

svg.selectAll('g.node-group')
    .append('text')
    .text(function(d:any) { return d.data.name; })
    .attr('dy', '.35em') 
    .style('text-anchor', 'middle')
    .style('fill', '#fff') 
    .style('font-family', 'Arial, sans-serif'); 



}