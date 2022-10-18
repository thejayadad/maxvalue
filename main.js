
//Max Num in Array


function maxValue(nums){
    let total = 0;
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if( num > total){
            total = num
        }
    }
    return total
}

function highNum(nums){
    return Math.max(...nums)
}

console.log(maxValue([8, 10, 6, 4]))
console.log(highNum([11, 7, 3, 33]))
