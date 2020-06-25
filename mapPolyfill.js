let ar = [2, 3, 5, 7]

if (Array.prototype.myMap === undefined) {
  Array.prototype.myMap = function (cb) {

    let temp = []
    if (typeof(cb) !== 'function') {
      throw new TypeError(`${cb} is not a function`)
    }

    for (let i = 0 ; i<this.length; i++) {
      temp.push(cb(i))
    }
    return temp
  }
}

ar.myMap((item) => console.log(item*2))