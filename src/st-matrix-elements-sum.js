import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const transpose = array => array.reduce((r, a) => a.map((v, i) => [...(r[i] || []), v]), []);
  let transposematrix = transpose(Array.from(matrix));
  let result=0
  for(let i=0;i<transposematrix.length;i+=1){
    for(let j=0;j<transposematrix[i].length;j+=1){
      if (transposematrix[i][j]!==0){
        result+=transposematrix[i][j]
      } else {
        break
      }
    }
  }
  return result
}
