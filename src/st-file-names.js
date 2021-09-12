import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let result=[];
  for(let i=0;i<names.length;i+=1){
    if(result.indexOf(names[i])===-1){
      result.push(names[i])
    } else {
      let x = Array.from(names)
      x.splice(i);
      let numbers = x.filter(el=>el===names[i]).length;
      if(numbers===0){
        let numbers2 = result.filter(el=>el===names[i]).length;
        result.push(`${names[i]}(${numbers2})`)
      }else{
        result.push(`${names[i]}(${numbers})`)
      }
      
    }
  }
  return result
}
