/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-06 16:06:23
 * @LastEditors: houyan
 * @LastEditTime: 2023-02-24 17:09:39
 */

// 自己实现Pick
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// 知识点： 
// keyof 会返回该对象的属性名组成的联合类型, P的类型就是 'title' | 'completed' | 'invalid'
// P in K  联合类型的遍历
// extends


// 一下是对keyof  P in K 的例子理解
// type Item = {
//     a: string
//     b: number
//     c: boolean
// }

// // Item 的所有属性的一个 联合类型
// type ItemKeys = 'a' | 'b' | 'c';
// // 也可以简写为：
// // type ItemKeys = keyof Item;

// type Copy = { [K in ItemKeys]: Item[K] };
// // 得到 type Copy = { a: string, b: number, c: boolean };