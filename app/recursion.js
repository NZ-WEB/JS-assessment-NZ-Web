exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let directoryFilter = (dirName === void(0) ?
            function () { return true; } :
            function (dn) { return dn === dirName; }
    );

    let files = [];

    data.files.forEach(function (file) {
      if (typeof file === "string" && directoryFilter(data.dir)) {
        files.push(file);
      } else if (typeof file === "object") {
        files = files.concat(exports.recursionAnswers.listFiles(file, directoryFilter(data.dir) ? undefined : dirName));
      }
    });

    return files;
  },

  permute: function(arr) {
    let concat = function (x, y) { return x.concat(y); };

    return arr.map(function (v, i, a) {
      let prefix = [v], remainder = a.filter(function (v, idx) { return i !== idx; });
      return (
          (remainder.length > 1) ?
              exports.recursionAnswers.permute(remainder) :
              remainder
      ).map(concat.bind(undefined, prefix));
    }).reduce(concat);
  },

  fibonacci: function(n) {
    let iterate = function (fn, seed, times) {
      if (times > 0) {
        return iterate(fn, fn(seed), times - 1);
      }

      return seed;
    };

    let fib = function (fibPair) {
      let a = fibPair[0], b = fibPair[1];
      return [b, a + b];
    };

    return iterate(fib, [0, 1], n)[0];
  },
    validParentheses: function (n) {
      let operations = [
        function wrap(s) {
          return '(' + s + ')';
        },
        function prepend(s) {
          return '()' + s;
        },
        function append(s) {
          return s + '()';
        }
      ];

      let range = function (n) {
        let r = [];
        for (let i = 0; i < n; i++) {
          r.push(i);
        }
        return r;
      };

      let lookup = function (a) {
        return function (i) {
          return a[i];
        };
      };

      let buildWorkItem = function (i) {
        let inOtherBase = Number(i).toString(operations.length);
        while (inOtherBase.length < operations.length) {
          inOtherBase = "0" + inOtherBase;
        }
        return inOtherBase.split('').map(lookup(operations));
      };

      let processWorkItem = function (workItem) {
        return workItem.reduce(function (s, wi) {
          return wi(s);
        }, '');
      };

      let toSet = function (s, ps) {
        s[ps] = ps;
        return s;
      };

      let keys = function (o) {
        let ks = [], p;
        for (p in o) {
          if (o.hasOwnProperty(p)) {
            ks.push(p);
          }
        }
        return ks;
      };

      let numCombinations = Math.pow(operations.length, n);

      return keys(
          range(numCombinations)
              .map(buildWorkItem)
              .map(processWorkItem)
              .reduce(toSet, {})
      );
  }
};
