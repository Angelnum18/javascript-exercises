const reverseString = function(message) {
    let string = '';
    let i = message.length;
    let piece = '';

    while (i > 0) {
        piece = message.substr(i - 1, 1);
        string += piece;
        i--;
    }

    return string

};

// Do not edit below this line
module.exports = reverseString;
