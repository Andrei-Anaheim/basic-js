import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let repeatTimes = 1
  let separator = '+'
  if (options.separator) {
    separator = options.separator
  }
  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes
  }
  let addition = ''
  if (typeof(options.addition)!=='undefined') {
    addition = options.addition
  } 
  let additionRepeatTimes = 1
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes
  }
  let additionSeparator = '|'
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator
  }
  let result=''
  for (let i=0; i<repeatTimes;i+=1) {
    result+=str
    for (let j=0;j<additionRepeatTimes;j+=1) {
      result+=addition
      if(additionSeparator&&additionRepeatTimes-j!==1) {
        result+=additionSeparator
      }
    }
    if(repeatTimes-i!==1){
      result+=separator
    }
  }
  return result
}


console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la'); //ОТКУДА ТУТ ВЗЯЛСЯ +???