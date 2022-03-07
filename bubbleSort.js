//Space complexity is O(1)

//Time complexity in worst cases O(n*n)


// Loop through each Element, if the next element is greater than the present element, just swap, after

// one loop, the largest element will be at the last.Just loop through every element, then you will have the sorted array.


const numbers = [2,3,4,5,1,222,333,555,22,33,4,4211,5555555,66,333,777,55555,333,5555,77,33,222,45,56,333,23,45,78];


const bubbleSort = function(numbers){

    const arrayLength = numbers.length;
    
    for(let i = 0; i< arrayLength; i ++){
        for (j = 0 ; j< arrayLength; j++){
            if(numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }

    return numbers;
}


console.log(bubbleSort(numbers));