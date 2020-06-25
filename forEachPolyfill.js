let arr = [1,2,3]

if (Array.prototype.forEachPolyfill === undefined) {
  Array.prototype.forEachPolyfill = function (cbFunc, args) {
    // console.log('this', this)

    if (typeof(cbFunc) !== 'function') {
      throw new TypeError(`${cbFunc} is not a function`)
    }

    for (let i = 0; i < this.length; i++) {
      cbFunc.call(args, this[i], i, this) 
    }
  }
}

arr.forEachPolyfill((item, index, fullArray) => console.log('item, index, array', item, index, fullArray))