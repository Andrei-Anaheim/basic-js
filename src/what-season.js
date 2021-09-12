import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(!date) {return 'Unable to determine the time of year!'}
  if(typeof date!=='object'||date.toString().split('GMT').length!==3||Object.keys(date).length>0) {throw Error("Invalid date!")}
  let x=date.getMonth();
  if(x>=2&&x<5){return 'spring'}
  else if(x>=5&&x<8){return 'summer'}
  else if(x>=8&&x<11){return 'autumn'}
  else if(x===11||(x>=0&&x<2)){return 'winter'}
  else {throw Error("Invalid date!")}
}
