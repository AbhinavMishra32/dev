// Selection sort
#include<stdio.h>
void printArray(int arr[], int size) {
    for (int i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
int main(){
    int arr[10] = {6,3,5,7,3,9,2,5,8,2};
    int length = sizeof(arr) / sizeof(arr[0]);
    for(int i = 0; i<length-1; i++){
        int min_index = i;
        for(int j =i+1; j<length; j++){
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }
        int temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }

    printArray(arr, length);
}

