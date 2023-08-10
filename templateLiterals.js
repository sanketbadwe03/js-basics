/**
 * It becomes messy when using escape chars or formatted chars in String quotes.
 * Template literals come handy.
 * It will render the way you write in the code, also easy to have dynamic values in between.
 */


const normalString = 'This is js\'s \n a new line'  // The slashes makes messy to read
const name = "John"

const formatted = `Hi John
This line should automaticaaly come on the next line.
Also, the appostrophy s here 's shouldn't bother the compiler now.
Funnily enough, you can also add dynamic content like this ${5 +3} number.
or a variable like this name ${name}.

Thank you!`

console.log(normalString)
console.log(formatted)