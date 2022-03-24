class Main {
  solve(a, b, c) {
    const EPS = 1e-10;
    if(Math.abs(a) < EPS) return false;
    if(!(!isNaN(parseFloat(a)) && isFinite(a)) || !(!isNaN(parseFloat(b)) && isFinite(b)) || !(!isNaN(parseFloat(c)) && isFinite(c))) return false;
    const res = [];
    const D = b * b - 4 * a * c;
    if(D < EPS) return [];
    if(-EPS <= D <= EPS)
        res.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > EPS){
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
  }
}

module.exports = Main;
