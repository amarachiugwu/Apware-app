function convertETH2Wei(ETHValue) {
    var result = ETHValue;
    result =  parseFloat(result.value);
    result = result * 1000000000000000000;
    return result.toString();
}

export default convertETH2Wei;

