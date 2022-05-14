exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let count = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        count++;
        if (count < amount) {
          result += str[i];
        }
      } else {
        count = 0;
        result += str[i];
      }
    };
    return result;
  },

  wordWrap: function(str, cols) {
    let formatedString = '',
        wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatedString += '\n' + wordsArray[i];
      } else {
        if (formatedString.length + wordsArray[i].length > cols) {
          formatedString += '\n' + wordsArray[i];
        } else {
          formatedString += ' ' + wordsArray[i];
        }
      }
    }

    return formatedString;
  },

  reverseString: function(str) {
    if (!str.includes(' ')) {
       return str.split('').reverse().join('');
    } else {
      return str.split(' ').map(function (item) {
        return item.split('').reverse().join('');
      }).reverse().join(' ');
    }
  }
};
