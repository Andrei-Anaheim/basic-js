import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!members||members.length<1) {
    return false
  }
  let result = []
  for (let i=0; i<members.length;i+=1) {
    if (typeof members[i]==='string') {
      let first = members[i].split('').filter(el=>el!==" ")[0]
      result.push(first.toString().toUpperCase())
    }
  }
  result.sort((a, b) => a!== b? a< b? -1 : 1 : 0);
  if (result.join('')==='') {
    return false
  }
  return result.join('')
}
