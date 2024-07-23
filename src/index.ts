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

// const str: any = "3"
// // true
// console.log(str == 3)
// // false
// console.log(str === 3)

// const x: any = undefined
// // true
// console.log(x == null)
// // false
// console.log(x === null)

// const input1 = "123", input2 = ""

// const input1isNotEmpty = !!input1
// console.log(input1isNotEmpty)
// const input2isNotEmpty = !!input2
// console.log(input2isNotEmpty)

const secret = process.env.SECRET ?? "default"
console.log(`secretは${secret}です`)