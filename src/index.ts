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

// type FooBar = {
//   [foo: string]: number
// }

// const obj: FooBar = {
//   foo: 123,
//   bar: 456
// }

// // プロパティの値を代入する形式で任意のプロパティと値のセットを作れる
// obj.hoge = 789

// // 値を定義していないプロパティの値を代入すると型注釈と異なるundefindが代入されてしまう
// const num: number = obj.fuga
// console.log(num) // →undefind

// type FooBar = {
//   foo: number
//   // 読み取り専用化
//   readonly bar: number
//   baz?: number
// }

// const obj = {
//   foo: 123,
//   bar: "abc",
// }

// // // これは読み取り専用プロパティなのでNG
// // obj.bar = 123456

// const num: number = 0
// // 型TはNumber型
// type T = typeof num

// type Obj = typeof obj
// // objの型を抽出して使用できる
// const object: Obj = {
//   foo: 123456789,
//   bar: "Sting型"
// }

// type FooBar{
//   foo: number
//   bar: string
// }

// type FooBarBaz{
//   foo: number
//   bar: string
//   baz: boolean
// }

// const obj: FooBarBaz = {
//   foo: 123,
//   bar: "456",
//   baz: true
// }

// // FooBarBazはFooBarの部分型であるので、FooBar型のobj2にobjを代入できる
// const obj2: FooBar = obj

// type HasName = {
//   name: String
// }

// // constraint 型制約によってparent child はHasName型しか受け付けない
// type Family<parent extends HasName, child extends HasName> = {
//   mother: parent,
//   father: parent,
//   child: child
// }

// type Test = {
//   name: String
// }

// // 制約によって{name: string}しか定義できない
// const user: Family<Test, { name: String }> = {
//   mother: {
//     name: "minami"
//   },
//   father: {
//     name: "Yuki"
//   },
//   child: {
//     name: "hinano"
//   }
// }

// console.log(user)

// let tuple: [string, number] = ["foo", 123]

// let tuple: [String, Number] = ["foo", 123]
// console.log(tuple[0]) // foo
// console.log(tuple[1]) //123

const arr = [1,2,3]
const num:number = arr[0]
console.log(arr[100])  //これはundefindになってしまう
