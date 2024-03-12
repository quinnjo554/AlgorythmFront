export const bubbleSortCode = () => `
#include <iostream>
#include <vector>

void bubble_sort(std::vector<int>& nums) {
    //This boolean is initalized for knowing when elements have been swapped
    bool swapped = true;
    while (swapped) {
        swapped = false;
        //1. Fill in the missing for loop(remember size-1)
        for () {
            if (nums[i] > nums[i + 1]) {
                //2. Swap adjacent elements if they are out of order
                // remember to use std::swap
                swapped = true;
            }
        }
    }
}
`;
