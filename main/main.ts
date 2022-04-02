class Main {
  solve(a:number, b:number, c:number) {
    const EPS:number = 1e-10;
    if(Math.abs(a) < EPS) return false;
    if(!(!isNaN(a) && isFinite(a)) || !(!isNaN(b) && isFinite(b)) || !(!isNaN(c) && isFinite(c))) return false;
    const res:number[] = [];
    const D:number = b * b - 4 * a * c;
    if(D < EPS) return [];
    if(-EPS <= D && D <= EPS)
        res.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > EPS){
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
  }
}

module.exports = Main;
