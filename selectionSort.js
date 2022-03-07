//Time complexity is O(n*n)

// loop through the array, use indexes to track the minimum, after one iteration, the minimum should be at first

//then move on to next iteration

const numbers = [2,3,4,5,1,222,333,555,22,33,4,4211,5555555,66,333,777,55555,333,5555,77,33,222,45,56,333,23,45,78];


const selectionSort = (numbers) =>{

    let numbersLength = numbers.length;

    for(let i = 0; i< numbersLength; i++){
        let min = i;
        let temp = numbers[i];

        for(j = i+1; j < numbersLength;j++){
            if(numbers[j] < numbers [min]){
                min = j;
            }
        }

        numbers[i] = numbers[min];
        numbers[min]= temp;

    }


    return numbers;

}


console.log(selectionSort(numbers));