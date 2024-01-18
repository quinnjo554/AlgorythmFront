
export interface Nodes {
  name: number;
  children?: Nodes[];
  highlight?: boolean;
}
export const treeData: Nodes = {
  name: 8, // root node
  children: [
    {
      name: 3,
      children: [
        { name: 1 },
        {
          name: 6,
          children: [
            { name: 4 },
            { name: 7 }
          ]
        }
      ]
    },
    {
      name: 10,
      children: [
        { name: 9 },
        { name: 14 }
      ]
    }
  ]
};