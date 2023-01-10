/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-10 10:48:54
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-10 10:53:18
 */
type Length<T extends readonly any[]> = T['length']


// 用js模拟一下
// 题目: 返回数组的长度

// function returnLength(arr) {
//     // 不是数组直接返回
//     if (!Array.isArray(arr)) return;
//     return arr.length
// }


// 元组属性是只读的数组   readonly any []
// 传入的数据是元组    T extends readonly any[]
// 返回元组长度    T['length']