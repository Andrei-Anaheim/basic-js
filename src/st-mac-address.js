import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let possible='0123456789abcdef'
  let addresspairs=n.toString().split('-')
  let address = n.toString().split('').filter(el=>el!=='-')
  if(address.length===12&&addresspairs.length===6){
    for (let i in address){
      if (possible.indexOf(address[i].toLowerCase()) === -1) {
        return false;
      }  
    }
  } else {
    return false
  }
  return true
}
