var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function thatInterval (arr, a, b){

    let onlyNumeriInt = arr.slice(a, b+1);

    return onlyNumeriInt;
}


function forThatInterval (arr, a, b){

    let onlyNumeriInt = [];
    for (let i = 0; i < arr.length; i++) {
         
        if (arr.indexOf(arr[i]) >= a && arr.indexOf(arr[i]) <= b) {
            onlyNumeriInt.push(arr[i]);
        } 

    }

    return onlyNumeriInt;
}
var slice = forThatInterval(numeri, 2, 8);

console.log(slice);