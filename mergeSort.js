//It is best sort, bigO is n(logn)

//It is based on recursion, split, in to one element, compare and merge to complete is the basis of this
//algorithm


//const numbers = [5,6,65,63,2,1,3232,4334,555,222,44,55577,7788888];
const numbers = [2,3,4,5,1,222,333,555,22,33,4,4211,5555555,66,333,777,55555,333,5555,77,33,222,45,56,333,23,45,78];

//const numbers = [2,2,4,4,1,1,3,3];


function mergeSort(array){
    if(array.length==1){
        return array;
    }

    let middle = Math.floor(array.length/2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left,right){

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        console.log(result);
    }

    console.log(left, right);

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


const solution = mergeSort(numbers);

console.log(solution);