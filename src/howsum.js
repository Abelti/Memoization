// const howSum = (targetSum, numbers) => {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers);
//         if (remainderResult !== null){
//             targetSum = [ ...remainderResult, num];
//             return targetSum;
//         }
//     }


//     targetSum = null;
//     return null;
// };


const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null){
            memo[targetSum] = [ ...remainderResult, num];
            return memo[targetSum];
        }
    }


    memo[targetSum] = null;
    return null;
};


console.log(howSum(100, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]));//[3, 2, 2]
console.log(howSum(7, [5,3,4]));//[4, 3]
console.log(howSum(7, [2,4]));//null
console.log(howSum(8, [2,3,5]));//[2, 2, 2, 2]
console.log(howSum(300, [7,14]));//null
console.log(howSum(300, [1,2]));