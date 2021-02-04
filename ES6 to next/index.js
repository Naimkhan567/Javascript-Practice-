// let si = `good boy`
// let bibi = `bad girl`

// console.log(`Naim is a ${si} and akhi is a ${bibi}.`)

// const adress = {
//     name: 'Naim',
//     contury: 'Bangladesh',
//     region:'Islam',
// }
// const {contury: desh, name} = adress

// console.log(name, desh)

// const adress = {
//     name: {
//         fir:'naim',
//         sec: 'akhi',
//         thir: 'tisha'
//     },
//     contury: 'Bangladesh',
//     region:'Islam',
// }
// const {contury: desh, name: {sec: second}, name} = adress

// console.log(second, name, desh)



// const arr = [1, 2, 3, 4, 5]

// const [fir, , thir, four] = arr

// console.log(fir, thir, four)


// function printCity({name: {sec}, region}) {
//     console.log(sec, region)
// }
// printCity(adress)


// const city = 'Dhaka'
// const contury = 'Banglaesh'
// const na = 'name'
// const nam = 'Naim'


// const adress = {
//     ci: city,
//     contury,
//     [na]:nam,
// }

// console.log(adress)


// const arr = [1, 2, 3, 4, 5]

// arr.forEach(e => {
//     console.log(e)
// })

// for([i, e] of arr.entries()) {
//     if(e === 3) {
//      break;
//     }
//     console.log(i, e)
// }



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hi si')
//     }, 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Akhi')
//     }, 2000)
// })

// Promise.all([p1, p2])
// .then(data => console.log(data))
// .catch(err => console.error(err))

// // p2
// .then(data => console.log(data.toUpperCase()))
// // .then(data => console.log(data))
// // .then(data => console.log(data[1]))
// .catch(err => console.error(err))






// const arr = [1, 2, 3, 4, 5]

// const arr2 = [...arr, 6, 7]

// const [fir, sec, ...other] = [1, 2, 3, 4, 5, 6, 7]

// console.log(other)


// const obj = {
//     si: 'Naim',
//     bibi: 'Akhi',
//     sis: 'Anni' 
// }

// const obj2 = {
//     ...obj
// }
// console.log(obj2)


// const s = new Set(['naim, akhi'])

// s.add('anni')
// s.delete('anni')
// s.clear('naim')

// console.log(s)

// const arr = [1, 2, 3, 4, 5]
 
// console.log(arr.indexOf(5))
// console.log(arr.includes(6))



// const obj = {
//     a: 'Anni',
//     n: 'Naim',
//     t: 'tishu'
// }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))