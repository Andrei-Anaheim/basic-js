import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let s=str.split('')
  let res=1
  let result=[]
  for(let i=0;i<s.length;i+=1){
    if(s[i]===s[i+1]){
      res+=1
    } else {
      if(res===1){
        result.push(s[i])
      } else {
        result.push(res)
        result.push(s[i])
        res=1
      }
    }
  }
  return result.join('')
}
