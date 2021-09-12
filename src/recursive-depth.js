import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        let curDepth = this.calculateDepth(el)
        if (curDepth > depth) {
          depth = curDepth
        }
      }
    });
    depth+=1
    return depth
  }
}
