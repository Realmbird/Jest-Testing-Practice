function capitalize (word) {
    let first = word.slice(0,1).toUpperCase()
    let second = word.slice(1)
    let newword = first + second
    return newword
}
module.exports = capitalize;