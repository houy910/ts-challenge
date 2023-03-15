/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-09 11:38:12
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-09 11:46:38
 */
type TupleToObject<T extends readonly (string| number)[]> = {
    [P in T[number]] : P
}

// 传入的数组值中假如有对象类型的话，会报错

// 题目： 传入一个数组，返回一个对象，属性和值都是数组元素  [1,'2',3]  => {1:1, '2':'2', 3: 3}


// 用js写一下

// function returnObject (arr) {
//     const obj = {}
//     for(p in arr) {
//         obj[p] = p
//     }
//     return obj
// }


// 知识点： 
// as const
// T[number] 得到一个联合类型 1 | '2' | 3
// P in 1 | '2' | 3  // 联合类型的遍历
// {  [P in T[number]] : P }   {1:1, '2':'2', 3: 3}

// T[number]  参考链接 https://bbs.tampermonkey.net.cn/forum.php?mod=viewthread&tid=2766

// 理解 { [P in T[number]] : P }   

// type Item = {
//     a: string
//     b: number
//     c: boolean
// }
// Item 的所有属性的一个 联合类型
// type ItemKeys = 'a' | 'b' | 'c';
// 也可以简写为： type ItemKeys = keyof Item;
// type Copy = { [K in ItemKeys]: Item[K] }; 得到 type Copy = { a: string, b: number, c: boolean };