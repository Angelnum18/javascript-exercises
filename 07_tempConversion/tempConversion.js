const convertToCelsius = function(tempF) {
  let f = tempF;
  let x = 1;
  let result = 0;


  result = Math.round(((f - 32) * (5/ 9) * x) * 10) / 10;
   /*  f = tempF * 2; */

  console.log(result);


return result
};

const convertToFahrenheit = function(tempC) {
  let c = tempC;
  let x = 1;
  let result = 0;

  result = Math.round(((c * (9/ 5) + 32) * x)* 10) / 10;

/*     c = tempC * 3; */

  console.log(result);
return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
