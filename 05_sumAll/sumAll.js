const sumAll = function(suma1, suma2) {
let finalResult = 0;
let a = 0;
let b = 0; 

if (typeof(suma1) == 'number' && typeof(suma2) == 'number') {
        if ((suma1 > 0) && (suma2 > 0)) {
            if (suma1 > suma2) {
                for (let i = 1; i <= suma1; i++) {
                    a += i;
                };
                finalResult = a;
            } else {
                for (let i = 1; i <= suma2; i++) {
                    b += i;
                };
                finalResult = b;
            };


            
        } else {
            finalResult = 'ERROR';
        }
    } else {
        finalResult = 'ERROR';
    };

    
return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
