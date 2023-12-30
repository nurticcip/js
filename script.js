//! for
//? for (начало; условие; шаг){
//?     действие
//? }


//! while
//? Начало
//? while (условие) {
//?     действие
//?     шаг
//? }

// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }



//! do while
//? начало
//? do{
//?   действие
//?   шаг
//?  }while (условие)

// let i = 1
// do {
//     console.log(i)
//     i++
// } while (i <= 10)



//! for (of)

// let arr = [1, 2, 3, 4, 5]
// for (let i of arr) {
//     console.log(i)
// }


//! for (in)

// let arr = [1, 2, 3, 4, 5]
// for (let i in arr) {
//     console.log(i)
// }




// const Symbol = (s1, s2) => {
//     let res = ''
//     for (i = 0; i < s1.length; i++){
//         s1[i] === s2[i] ? res += s1[i] : res += 0
//     }
//     return res
// }

// console.log(Symbol('+-+-', '+--+')); // ---> '+-00'



// tasks
//? task-1
// let i = 0
// while (i <= 50) {
//     console.log(i)
//     i++
// }

// i = 0
// do {
//     console.log(i)
//     i++
// }while(i <= 50)



//? task-2
// let i = 1
// let arr = []
// while (i <= 10) {
//     arr.push('X')
//     i++
// }
// console.log(arr)

// let arr = []
// let i = 1
// do {
//     arr.push('x')
//     i++
// }while(i <= 10)
// console.log(arr)



//? task-3
// let arr = [5, 3, 1, 2, 7]
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let arr = [5, 3, 1, 2, 7]
// let i = 0
// do {
//     console.log(arr[i])
//     i++
// }while(i < arr.length)

// let arr = [5, 3, 1, 2, 7]
// for (i of arr) {
//     console.log(i)
// }


//? task-4
// let arr = [5, 2, 1, 2]
// let i = 0
// let sum = 1
// while (i < arr.length) {
//     sum *= arr[i]
//     i++
// }
// console.log(sum)

// let arr = [5, 2, 1, 2]
// let i = 0
// let sum = 1
// do {
//     sum *= arr[i]
//     i++
// } while (i < arr.length)
// console.log(sum)

// let arr = [5, 2, 1, 2]
// let sum = 1
// for (i of arr) {
//     sum *= i
// }
// console.log(sum)



//? task-5
// let i = 1
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }

// let i = 1
// do {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }while(i <= 100)


//? task-6
// let i = 0
// let sum = 0
// while (i <= 100) {
//     sum += i
//     i++
// }
// console.log(sum)

// let sum = 0
// let i = 0
// do {
//     sum += i
//     i++
// } while (i <= 100)
// console.log(sum)


//? task-7
// let arr = [2, 4, 5, 6, 8]
// let i = 0
// let sum = 0
// while (i < arr.length) {
//     res = sum += arr[i]
//     i++
// }
// console.log(res)

// let arr = [2, 4, 5, 6, 8]
// let i = 0
// let sum = 0
// do {
//     sum += arr[i]
//     i++
// } while (i < arr.length)
// console.log(sum)

// let arr = [2, 4, 5, 6, 8]
// let sum = 0
// for (i of arr) {
//     sum += i
// }
// console.log(sum)

//? task-8
// let arr = [3, 4, 6, 12, 3, 5]
// let i = 0
// while (i < arr.length) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
//     i++
// }

// let arr = [3, 4, 6, 12, 3, 5]
// let i = 0
// do {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
//     i++
// } while (i < arr.length)

// let arr = [3, 4, 6, 12, 3, 5]
// for (i of arr) {
//     i > 3 && i < 10 ? console.log(i) : null
// }



//? task-9
// let arr = [42, -31, 13, -2, 36, 5, -13]
// let i = 0
// let sum = 0
// while (i < arr.length) {
//     arr[i] > 0 ? sum += arr[i] : null
//     i++
// }console.log(sum)

// let arr = [42, -31, 13, -2, 36, 5, -13]
// let i = 0
// let sum = 0
// do {
//     arr[i] > 0 ? sum += arr[i] : null
//     i++
// } while (i < arr.length)
// console.log(sum)

// let arr = [42, -31, 13, -2, 36, 5, -13]
// let sum = 0
// for (i of arr) {
//     i > 0 ? sum += i : null
// }
// console.log(sum)


//? task-10
// let arr = [5, 1, 3,  7, 6, 15, 3, 20]
// let i = 0
// while (i < arr.length) {
//     arr[i] == 4 ? console.log('Yes') : null
//     i++
// }

// let arr = [5, 1, 3, 4, 7, 6, 15, 3, 20]
// let i = 0
// do {
//     arr[i] == 4 ? console.log('Yes!') : null
//     i++
// }while(i < arr.length)

// let arr = [5, 1, 3, 4, 7, 6, 15, 3, 20]
// for (i of arr) {
//     i == 4 ? console.log('Yes') : null
// }


//? task-11
// let arr = [10, 20, 30, 40, 135, 2000]
// let res = []
// let i = 0
// while (i < arr.length) {
//     let str = arr[i].toString()[0]
//     if (str == 1 || str == 2 || str == 5) {
//         res.push(arr[i])
//     }
//     i++
// }
// console.log(res)

// let arr = [10, 20, 30, 40, 135, 2000]
// let res = []
// let i = 0
// do {
//     let str = arr[i].toString()[0]
//     if (str == 1 || str == 2 || str == 5) {
//         res.push(arr[i])
//     }
//     i++
// } while (i < arr.length)
// console.log(res)

// let arr = [10, 20, 30, 40, 135, 2000]
// let res = []
// for (i of arr) {
//     let str = i.toString()[0]
//     str == 1 || str == 2 || str == 5 ? res.push(i) : null
// }
// console.log(res)


//? task-12
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = '-'
// let i = 0
// while (i < arr.length) {
//     res += arr[i] + '-'
//     i++
// }
// console.log(res.split())

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = '-'
// let i = 0
// do {
//     res += arr[i] + '-'
//     i++
// } while (i < arr.length)
// console.log(res.split())

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = '-'
// for (i of arr) {
//     res += i + '-'
// }
// console.log(res)


//? task-13
// let num = 0
// let n = 1000
// while (n >= 50) {
//     num += 1
//     n = n / 2
// }
// console.log(num)

// let num = 0
// let n = 1000
// do {
//     num += 1
//     n = n / 2
// } while (n >= 50)
// console.log(num)


//? task-14
// let arr = [1, 2, 3, 7, 6, 9]
// let sum = 0
// let i = 0
// while (i < arr.length) {
//     sum += arr[i]
//     i++
// }
// console.log(sum / arr.length)

// let arr = [1, 2, 3, 7, 6, 9]
// let sum = 0
// let i = 0
// do {
//     sum += arr[i]
//     i++
// } while (i < arr.length)
// console.log(sum / arr.length)

// let arr = [1, 2, 3, 7, 6, 9]
// let sum = 0
// for (i of arr) {
//     sum += i
// }console.log(sum / arr.length)


//? task-15
// let arr = [1, 2, 3, 4, 5]
// let i = 0
// let sum = 0
// while (i < arr.length) {
//     sum += arr[i] ** 2
//     i++
// }console.log(sum)

// let arr = [1, 2, 3, 4, 5]
// let i = 0
// let sum = 0
// do {
//     sum += arr[i] ** 2
//     i++
// } while (i < arr.length)
// console.log(sum)

// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// for (i of arr) {
//     sum += i * i
// }
// console.log(sum)


//? task-16
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let i = 0
// while (i < arr.length) {
//     arr[i] > 0 && arr[i] < 10 ? console.log(arr[i]) : null
//     i++
// }

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let i = 0
// do {
//     arr[i] > 0 && arr[i] < 10 ? console.log(arr[i]) : null
//     i++
// }while(i < arr.length)

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (i of arr) {
//     i > 0 && i < 10 ? console.log(i) : null
// }


//? task-17
// let arr = []
// let i = 0
// while (i < 10) {
//     arr.push(Math.round(Math.random() * 10))
//     i++
// }
// console.log(arr)


//? task-18
// let i = 1
// let sum = 0
// while (i < 1000) {
//     i % 3 === 0 && i % 5 === 0 ? sum += i : null
//     i++
// }
// console.log(sum)

// let i = 1
// let sum = 0
// do {
//     i % 3 === 0 && i % 5 === 0 ? sum += i : null
//     i++
// } while (i < 1000)
// console.log(sum)


//? task-19
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// let i = 0
// while (i < arr.length) {
//     i % 2 !== 0 && i > 10 ? console.log(i) : null
//     i++
// }

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// let i = 0
// do {
//     i % 2 !== 0 && i > 10 ? console.log(i) : null
//     i++
// }while(i < arr.length)

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (i of arr) {
//     i % 2 == 0 && i > 10 ? console.log(i) : null
// }


//? task-20
// let str = 'jzvzszrzpz'
// let res = ''
// for (i of str.split('')) {
//     str.split('').indexOf(i) % 2 !== 0 ? res += i.toUpperCase() : res += i
// }
// console.log(res)