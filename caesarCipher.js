let toAssci = (word) => {
    let list = []
    for(let i = 0; i < word.length; i++){
        let letter = word[i]
        let ascii = letter.charCodeAt()
        list.push(ascii)
    }
    return list
}
let shift = (num, key) => {
    let a_index = "a".charCodeAt();
    let z_index = "z".charCodeAt();
    let A_index = "A".charCodeAt();
    let Z_index = "Z".charCodeAt();
    let shifted_num = num + key;
    // original between a and z lower
    if(num >= a_index && num <= z_index) {
        if (shifted_num > z_index) {
            return a_index + (shifted_num - z_index - 1) % 26;
        } else if (shifted_num < a_index) {
            return z_index - (a_index - shifted_num - 1) % 26;
        } else {
            return shifted_num;
        }
    }
    // upper case A to Z
    if(num >= A_index && num <= Z_index) {
        if (shifted_num > Z_index) {
            return a_index + (shifted_num - z_index - 1) % 26;
        } else if (shifted_num < A_index) {
            return z_index - (a_index - shifted_num - 1) % 26;
        } else {
            return shifted_num;
        }
    }
    return num
   
}
let shiftbyNum = (list, key) => {
    return list.map((num) => shift(num, key))
}
let caesarCipher = (word, key) => {
    let assci_list = toAssci(word)
    let shifted_list = shiftbyNum(assci_list, key)
    let new_word = ""
    shifted_list.forEach(element => {
        new_word += String.fromCharCode(element)
    });
    return new_word
    // String.fromCharCode()
    
}
// let caesarCipher = (sentence = "", key) => {
//     return shiftword(sentence, key)
//     // add return
// }
export {caesarCipher}