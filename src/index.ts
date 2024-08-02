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

// const secret = process.env.SECRET ?? "default"
// console.log(`secretは${secret}です`)

// let userName = "yuki"
// userName ||= "test"
// console.log(userName)

// fizzbuzzを書く
// 3の倍数でfizz
// 5の倍数でbuzz
// どちらでもない場合は整数
// 3と5の倍数のときはfizzbuzz

// let ary: string[]
// ary = []

// for (let i:number = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     ary.push("fizzbuzz")
//   } else if (i % 3 === 0) {
//     ary.push("fizz")
//   } else if (i % 5 === 0) {
//     ary.push("buzz")
//   } else {
//     ary.push(`${i}`)
//   }
// }

// console.log(ary.join(" "))

// const obj1 = {
//   foo: 123,
//   bar: 456
// }

// const obj = {
//   hoge: 123,
//   ...obj1
// }
// console.log(obj.foo) //123
// console.log(obj.bar)//456

// const obj1 = {
//   foo: 123,
//   bar: 456,
//   obj2: {
//     hoge:987,
//     fuga: 654
//   }
// }

// const obj = {
//   ...obj1
// }
// console.log(obj.foo) //123
// console.log(obj.bar)//456
// console.log(obj.obj2.hoge)//987

// obj1.foo = 0
// console.log(obj.foo)//123
// obj1.obj2.hoge = 0
// console.log(obj.obj2.hoge)//0

// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "abc",
// };

type FooBar = {
  foo: number
  bar: string
}

const obj: FooBar = {
  foo: 123,
  bar: "test"
}