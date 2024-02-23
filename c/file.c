#include <stdio.h>
#include <string.h>
int main(){
    FILE *file;
    char key[20] = "is";
    char fstr[20];
    int count = 0;
    file = fopen("example.txt", "r");
    if (file == NULL)
        printf("Error while opening file");
    while((fscanf(file, "%s", fstr)) != EOF){
        if(strcmp(fstr, key)==0){
            count++;
        }
    }
    printf("Matched no. of times: %d", count);
}