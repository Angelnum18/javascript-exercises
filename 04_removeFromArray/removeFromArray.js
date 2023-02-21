const removeFromArray = function(array, ...args) {
    let resultArray;
    let a;
    let b;
    
    

        for (let j = args.length -1;j >= 0; j--) {



        for (let i = array.length - 1;i >= 0; i--) {
            if (array[i] === args[j]) {
                a = array.slice(0, i);
                b = array.slice(i + 1, array.length);
                array = a.concat(b);
            } else {
                continue;
            }
        };
    }





/*     for (let i = 0; i <= array.length -1; i++) {
        if (array[i] = arg1) {
            if (i = 0) {
                array.shift();
            } else if (i = array.length - 1) {
                array.pop();
            } else {
                a = array.slice(0, i + 1);
                b = array.slice(i, array.length);
                resultArray = a.concat(b);
            }

           resultArray = array.slice(i, array.length);
            break



        } else {
            resultArray = resultArray;
            continue
        }
    } */
/*     console.log(a);
    console.log(b);
    console.log(resultArray); */

    /* resultArray = i; */
    resultArray = array;
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
