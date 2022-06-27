module.exports = function reverse(n) {
  let result = ''
  for (let i = String(n).length - 1; i >= 0; i--) {
    if(String(n)[i] == '-') continue;
    result += String(n)[i];
  }

  return result;
}
