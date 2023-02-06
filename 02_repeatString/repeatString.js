const repeatString = function(text, number) {
    message = text
    

    if (number < 0) {
        message = "ERROR";
    } else if (number == 0) {
        message = "";
    } else if (number == 1) {
        message = message;
    } else {
        for (let i = number-1;i > 0; i--) {
            message += text;
        }
    }




/*     for (i = number;i > 0; --i) {
        if (i == 1) {
            message = message;
            break;
            } else if (i == 0) {
                message = "";
                break;
            } else if (i < 0) {
                message = text
            } else {
            message += text;
            }
    }  */
return message
};

// Do not edit below this line
module.exports = repeatString;
