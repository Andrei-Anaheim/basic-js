import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n=n.toString().split('');
  let startlength=n.length
  for (let i=0; i<startlength;i+=1) {
    if(n[i]<n[i+1]) {
      n.splice(i,1)
      return Number(n.join(''))
    }
  }
  if (startlength===n.length) {
    return (Math.floor(Number(n.join(''))/10))
  }
}
