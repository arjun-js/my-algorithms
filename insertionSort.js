//Time complexity - best O(n)

//Best suited when the list is almost sorted

//Loop, leave first, check if second is small than first, if yes, move it to the first, then check if third is small than second, 

//if no, find out where should it go in the previous indexes. 


//const numbers = [5,6,65,63,2,1,3232,4334,555,222,44,55577,7788888];
const numbers = [2,3,4,5,1,222,333,555,22,33,4,4211,5555555,66,333,777,55555,333,5555,77,33,222,45,56,333,23,45,78];

//const numbers = [2,2,4,4,1,1,3,3];

const insertionSort = (numbers)=>{

    const length = numbers.length;

    for(let i=0; i< length; i++){
        if(numbers[i] <= numbers[0]){
            numbers.unshift(numbers.splice(i,1)[0]);
        }
        else {
            for (let j=1; j<i; j++){
                if(numbers[i] > numbers[j-1] && numbers[i] <= numbers[j]){
                  numbers.splice(j,0, numbers.splice(i,1)[0])
                }
            }
        }
    }


    return numbers;
}

console.log(insertionSort(numbers))