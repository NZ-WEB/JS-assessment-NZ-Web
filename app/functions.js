exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function (next) {
      return [str, next].join(', ');
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function (n) { return function () { return fn.call(this, n); } });
  },

  partial: function(fn, str1, str2) {
    return function (arg) {
      return fn.call(this, str1, str2, arg);
    }
  },

  useArguments: function() {
    return [].slice.apply(arguments).reduce(function (a, b) {return a + b});
  },

  callIt: function(fn) {
    let args =  [].slice.call(arguments, 1, arguments.length);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let firstArgs = [].slice.call(arguments, 1, arguments.length);

    return function () {
      return fn.apply(this, firstArgs.concat([].slice.call(arguments)));
    }
  },

  curryIt : function(fn) {
    let args = [];

    let curried = function (x) {
      args.push(x);
      let result = curried;

      if (args.length === fn.length) {
        result = fn.apply(this, args);
        args = [];
      }

      return result;
    };

    return curried;
  }
};
