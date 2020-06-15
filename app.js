// console.log('test');

// Given an integer, return an integer that is the reverse

const reverseInt = (num) => {
    let numArr = num.toString().split('') // turn # into string and then store in array 
    numArr = parseInt(numArr.reverse().join('')); // reverse the order of the array and then turn back into a string, which then gets parsed into an integer
    // Math.sign() returns either a pos or neg 1
    return numArr * Math.sign(num);
}

console.log(reverseInt(-15));