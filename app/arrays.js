exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(acc, cur) {
      return acc + cur;
    });
  },


  remove: function(arr, item) {
    return arr.filter(function(i){
      return i !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return (arr1.join(' ') + ' ' + arr2.join(' ')).split(' ');
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function (acc, el) {
      if (el === item) {
        return acc + 1;
      }
      return acc;
    }, 0);
  },

  duplicates: function(arr) {
    let dupes = arr.reduce(function (dupes, v) {
      if (!dupes.hasOwnProperty(v)) {
        dupes[v] = 0;
      }
      dupes[v]++;
      return dupes;
    }, {});

    let pairs = [];
    for (let item in dupes) {
      if (dupes.hasOwnProperty(item)) {
        pairs.push([item, dupes[item]]);
      }
    }

    return pairs.filter(function (pair) {
      return pair[1] > 1;
    }).map(function (pair) {
      return +pair[0];
    });
  },

  square: function(arr) {
    return arr.map(function(item) {
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function (acc, item, index) {
      if (item === target) {
        return acc + index;
      }
      return acc;
    }, '').split('');
  }
};
