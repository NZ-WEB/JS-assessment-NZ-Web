exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let asBinary = num.toString(2).substring(-8);
    while (asBinary.length < 8) {
      asBinary = "0" + asBinary;
    }
    return asBinary;
  },

  multiply: function(a, b) {
    let deDecimalify = function (n) {
      let numDecimalPlaces = (n.toString().split('.')[1] || []).length,
          magnitude = Math.pow(10, numDecimalPlaces),
          deDecimaled = n * magnitude;

      return [deDecimaled, magnitude];
    };

    let result = [a, b].map(deDecimalify).reduce(function (productPair, factorPair) {
      let product = productPair[0];
      let pMagnitude = productPair[1];

      let factor = factorPair[0];
      let fMagnitude = factorPair[1];

      return [product * factor, pMagnitude * fMagnitude];
    }, [1, 1]);

    let finalProduct = result[0];
    let finalMagnitude = result[1];
    return finalProduct / finalMagnitude;
  }
};
