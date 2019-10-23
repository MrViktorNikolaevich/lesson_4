const summ = (array = {key: String, value: Number}) => {
    let numbers = Object.values(array);
    let i = numbers.length - 1;
    let sum = 0;
    while ( i >= 0) {
        sum += numbers[i];
        i--;
    }
    console.log(sum);
    return sum;
}