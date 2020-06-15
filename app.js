// console.log('test');

// Given an integer, return an integer that is the reverse

const reverseInt = (num) => {
    let numArr = num.toString().split('') // turn # into string and then store in array 
    numArr = parseInt(numArr.reverse().join('')); // reverse the order of the array and then turn back into a string, which then gets parsed into an integer
    // Math.sign() returns either a pos or neg 1
    return numArr * Math.sign(num);
}

// console.log(reverseInt(-15));


// Given a string, return the character that is most commonly used in the string
const maxChar = (string) => {
    let countObj = {};
    let newArr = string.split('');
    // for (let i = 0; i < newArr.length; i++) {
    //     countObj[i] = (countObj[i] || 0) + 1
    // } // returned the index number as key and the count which was 1
    for (char of newArr) {
        countObj[char] = (countObj[char] || 0) + 1
    } // returns each letter as a key and the count for each letter, but still returns the whole countObj object
    let maxCount = 0; // frequency count starts off at 0
    let freqChar; // this will be assigned a value based on which character has the maxCount
    for (character in countObj) {
        if (countObj[character] > maxCount) {
            maxCount = countObj[character];
            freqChar = character;
        } //else {
        //    freqChar = 'they all have equal count'
        //} // returns this phrase when theres an even count for each letter, but once I add numbers, it only prints this, even though a single number clearly had the max count
    }
    return freqChar;
}

console.log(maxChar('apple 123111111'))