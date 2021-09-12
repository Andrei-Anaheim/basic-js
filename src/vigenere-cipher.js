import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(flag = true) {
    this.reverseMode = !flag;
  }
  encrypt(mess, code) {
    if (!mess || !code) throw Error('Incorrect arguments!');
    if (this.reverseMode) mess = mess.split('').reverse().join('');
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let number = 0
    let text=mess.split('')
    for (let i=0;i<text.length;i+=1){
      if(alphabet.indexOf(text[i].toLowerCase())!==-1){
        text[i]=alphabet[(alphabet.indexOf(text[i].toLowerCase())+alphabet.indexOf(code[number%code.length].toLowerCase()))%26]
        number+=1
      }
    }
    return text.join('').toUpperCase()
  }
  decrypt(mess,code) {
    if (!mess || !code) throw Error('Incorrect arguments!');
    if (this.reverseMode) mess = mess.split('').reverse().join('');
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let number = 0
    let text=mess.split('')
    for (let i=0;i<text.length;i+=1){
      if(alphabet.indexOf(text[i].toLowerCase())!==-1){
        text[i]=alphabet[(26+alphabet.indexOf(text[i].toLowerCase())-alphabet.indexOf(code[number%code.length].toLowerCase()))%26]
        number+=1 
      }
    }
    return text.join('').toUpperCase()
  }
}
