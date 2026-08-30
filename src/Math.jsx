const pi = 3.14;

function areaCircle(r = 0) {
  return +(pi * r * r).toFixed(2);
}
function periCircle(r = 0) {
  return pi * r * 2;
}

export { areaCircle as ac, periCircle as pc };
