/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-10 17:29:15
 * @LastEditors: houyan
 * @LastEditTime: 2023-03-15 15:35:08
 */
type MyExclude<T, U> = T extends U ? never : T

// type b = MyExclude<'a' | 'b' | 'c', 'a'>

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
// 当T1和T2不相等的时候  返回 "22" | "11"  注意这个顺序
// 1 extends 2 | 3  false  得到 '22'
// 2 extends 2 | 3  true   得到 '11'
// 3 extends 2 | 3  true   得到 '11'
// 最终得到 "22" | "11"


//将 T 当中的每一项，取出与 U 当中的每一项进行比较，相同返回 never，不同则返回 T 当中的项
//MyExclude<'a' | 'b' | 'c', 'a'>
// 'a' extends  'a'  返回 never    'b' extends  'a'  返回 'b'    'c' extends  'a'  返回 'c'
// 最终得到联合类型  never | 'b' | 'c'   得到  'b' | 'c' 
