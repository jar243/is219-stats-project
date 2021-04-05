class RandomGen {
  static randomNum(min, max) {
    let num = Math.random()
    return this._process(num, min, max)
  }

  static seededNum(seed, min, max) {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    let num = ((t ^ (t >>> 14)) >>> 0) / 4294967296
    return this._process(num, min, max)
  }

  static _process(num, min, max) {
    let floatnum = min + num * (max - min)
    return Math.random() > 0.5 ? floatnum : Math.floor(floatnum)
  }

  static randomNumArr(size, min, max) {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(this.randomNum(min, max))
    }
    return arr
  }

  static seededNumArr(size, seed, min, max) {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(this.seededNum(seed, min, max))
    }
    return arr
  }

  static randomSelect(arr) {
    let index = Math.floor(this.randomNum(0, arr.length - 1))
    return arr[index]
  }

  static seededSelect(arr, seed) {
    let index = Math.floor(this.seededNum(seed, 0, arr.length - 1))
    return arr[index]
  }

  static randomSelectMany(arr, selSize) {
    let sel = []
    for (let i = 0; i < selSize; i++) {
      sel.push(this.randomSelect(arr))
    }
    return sel
  }

  static seededSelectMany(arr, selSize, seed) {
    let sel = []
    for (let i = 0; i < selSize; i++) {
      sel.push(this.seededSelect(arr, seed))
    }
    return sel
  }
}

module.exports = { RandomGen }
