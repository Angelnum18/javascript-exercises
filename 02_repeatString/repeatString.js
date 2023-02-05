const repeatString = function(text, number) {
    message = text
    let i = number;
    for (i = number;i > 0; --i) {
        if (i == 1) {
            message = message;
            break;
            } else if (i == 0) {
            message = "Please enter a number";
            } else {
            message += text;
            }
    }
return message
};

// Do not edit below this line
module.exports = repeatString;
