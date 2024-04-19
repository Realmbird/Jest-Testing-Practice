function reverseString(word) {
    let wordlength = word.length
    let reverse = ""
    for(let i = 0; i < wordlength; i++){
        reverse += word.charAt(wordlength - 1 - i)
    }

    return reverse
  }
  module.exports = reverseString;