import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {};
  for (let i=0; i<domains.length;i+=1) {
    let s=domains[i].split('.')
    let domen='';
    for(let j=s.length-1; j>=0; j-=1) {
      domen += `.${s[j]}` 
      if(Object.keys(result).indexOf(domen)===-1) {
        result[domen] = 1
      } else {
        result[domen] += 1
      }

    }
  }
  return result
}
