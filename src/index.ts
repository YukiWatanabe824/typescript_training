// import { createInterface } from 'readline'

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question('パスワードを入力:', (password) => {
//   if (password === "123") {
//     console.log("yes")
//   } else {
//     console.log("no")
//   }
//   rl.close
// })

const str: any = "3"
// true
console.log(str == 3)
// false
console.log(str === 3)

const x: any = undefined
// true
console.log(x == null)
// false
console.log(x === null)