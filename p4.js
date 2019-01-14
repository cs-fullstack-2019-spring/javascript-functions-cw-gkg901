//Create a function called checkPassword. Send two string variables to the checkPassword function to check if the strings are equal. Return true if they are equal and false if they are not equal. Print the function's return value.

function checkpassword(x,y) {
    if (x === y) {
        return ("TRUE")
    }

else
    if (x !== y) {
        return ("FALSE")
    }
}

console.log(checkpassword("get","get"));
console.log(checkpassword("get","lost"));
