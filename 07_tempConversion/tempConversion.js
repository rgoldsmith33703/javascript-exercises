const ftoc = function(temp) {
  let newTemp = (temp - 32) * (5/9);
  return roundToOne(newTemp);
};

const ctof = function(temp) {
  let newTemp = temp * (9/5) + 32;
  return roundToOne(newTemp);
};

function roundToOne(num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
