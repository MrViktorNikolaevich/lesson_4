arr = [2,3,4,5]
const fafaf = getArray(arr);
fafaf(10);

function getArray(arr) {
    return function addArray(a) {
        arr.push(a);
        console.log(arr);
        return arr;

    };
};