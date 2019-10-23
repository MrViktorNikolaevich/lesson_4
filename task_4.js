function capitalize(string) {
    let upperString = [];
    for (let i = 0; i < string.length; i++) {
        if (i === 0 && string[0] === 'w')
            upperString += string[0].toUpperCase();
        else if ((string[i] === 'w') && ((string[i-1]) === ' ')) {
            upperString += string[i].toUpperCase();
        }
        else upperString += string[i];
    }
    console.log(upperString)
    return upperString;
}