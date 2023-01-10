/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-10 17:29:15
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-10 17:39:33
 */
type MyExclude<T, U> = T extends U ? never : T

// 解释： T和U不相等的时候，返回T


// 功能： 从联合类型T中剔除属性U


// 用js 模拟
// function myExclude(T, U) {
//     const arr = []
//     T.forEach(item => {
//         if(!U.includes(item)) {
//             arr.push(item)
//         }
//     })
//     return arr
// }

// 用extends 来比对
// type MyExclude<T, U> = T extends U ? '11' : '22'
// type  T1 = 1|2|3
// type  T2 = 2|3

// type a = MyExclude<T1, T2>
// 当T1和T2相等的时候  返回"11"
// 当T1和T2不相等的时候  返回 "22" | "11"