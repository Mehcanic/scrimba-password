const generateBtn = document.getElementById("generate-button")
const inputFieldOne = document.getElementById("input-field-one")
const inputFieldTwo = document.getElementById("input-field-two")

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


function generatePasswords() {

    const passwordOne = []
    const passwordTwo = []

    for (let i = 0; i < characters.length; i++) {
        const random = Math.floor(Math.random() * characters.length)
        const randomCharacter = characters[random]
        if (passwordOne.length <= 15) {
            passwordOne.push(randomCharacter)
        }

        if (passwordTwo.length <= 15) {
            passwordTwo.push(randomCharacter)
        }
    }
    inputFieldOne.value = passwordOne.join("")
    inputFieldTwo.value = passwordTwo.join("")
}




