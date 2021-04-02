const defaultResult = 00
let currentResult = defaultResult;
let calculationDescription
let errorMessage = 'An error occured!'

currentResult = (currentResult + 10)*3/2-1
calculationDescription = `( ${defaultResult} + 10)*3/2-1`



outputResult(currentResult, calculationDescription)