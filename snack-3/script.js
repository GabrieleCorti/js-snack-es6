var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function thatOne (arr, a, b){

    let onlyNumeriInt = arr.slice(a, b+1);

    return onlyNumeriInt;
}

var slice = thatOne(numeri, 2, 8);

console.log(slice);