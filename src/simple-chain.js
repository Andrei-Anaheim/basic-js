import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    for (let i=0;i<this.arr.length;i+=1) {
      if (i>=position) {
        this.arr[i]===this.arr[i+1]
      }
      return this.arr.pop()
    }
  },
  reverseChain() {
    let result =[]
    for (let i=this.arr.length-1; i===0; i-=1) {
      result.push(this.arr[i])
    }
    return result;
  },
  finishChain() {
    let finalchain = this.arr.join('~~');
    this.arr=[];
    return finalchain;
  }
};
