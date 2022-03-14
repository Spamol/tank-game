class Main {
  solve(a, b, c) {
    if(Math.abs(a) < 1e-10) return false;
    if(!(!isNaN(parseFloat(a)) && isFinite(a)) || !(!isNaN(parseFloat(b)) && isFinite(b)) || !(!isNaN(parseFloat(c)) && isFinite(c))) return false;
    const res = [];
    const D = b * b - 4 * a * c;
    if(D < 1e-10) return [];
    if(-1e-10 <= D <= 1e-10)
        res.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > 1e-10){
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
  }
}

const m = new Main();
m.solve(0, 1, 1);

module.exports = Main;
