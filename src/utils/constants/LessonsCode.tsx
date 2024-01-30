export const bubbleSortCode = (userText1: string, userText2: string) => `
void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) { 
        //code here    
        for (${userText1}) { 
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                //code here
                ${userText2}
            }
        }
    }
`;
