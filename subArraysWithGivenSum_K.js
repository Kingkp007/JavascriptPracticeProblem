let arr = [3, 4, -7, 1, 3, 3, 1, -4]
const k = 7
// This is working
function subArrays(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        let subArr = [];
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            subArr.push(arr[j]);
            if (sum === k) {
                console.log(subArr);
            }
        }
    }
}
subArrays(arr, k)
// console.log(subArrays(arr,k));










// 1. first take array values one by one in for loop i. Now subtract this value from k.
// 2. If subtracted value is less than 0 return null/0/not possible. Else now use subtracted value and go in below for loop.
// 3. Inside that for loop start with one more for loop and start from next j = i+1.
// now again subtract this value and if subtracted vallue ==0 return that array. if less than 0 skip that vlaue. if greater than 0, j++.



function giveSubArrays(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let remaining = k; // remaining = 7 
        let subArray = [];
        if (k - arr[i] < 0) {
            continue;
        }
        if (k - arr[i] == 0) {
            return subArray.push(arr[i]);
        }
        if (k - arr[i] > 0) {
            remaining = k - arr[i]; //remaining = 
            subArray.push(arr[i]); //subArray = []
            for (let j = i + 1; j < arr.length; j++) {
                if (remaining - arr[j] < 0) {
                    continue;
                }
                if (remaining - arr[j] == 0) {
                    return subArray.push(arr[j]); //subArray=[]
                }
                if (remaining - arr[j] > 0) {
                    subArray.push(arr[j]); //subArray = []
                    remaining = remaining - arr[j]; //remaining = 
                    continue;
                }
                if (j == arr.length - 1 && remaining != 0) {
                    return;
                }
            }
        }
        if (i == arr.length - 1 && remaining != 0) {
            return;
        }
    }
}

// console.log(giveSubArrays(arr, k));
