class Main {
  solve(a, b, c) {
    if(Math.floor(a) === 0) return false;
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return false;
    const res = [];
    const D = b * b - 4 * a * c;
    if(D < 0) return [];
    if(Math.floor(D) == 0)
        res.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > 0){
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
  }
}

module.exports = Main;
