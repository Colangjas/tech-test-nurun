let arr = [1, -28, 88, 200, 7];

function findLargest(numbers) {
    if(numbers.length > 0){
        let largest = 0;
        for(let i = 0; i < numbers.length; i++){
            let num = numbers[i];
            num > largest? largest = num: null;
        }
        console.log(largest);
        return largest;
    } else {
        return 0;
    }

}

findLargest(arr);