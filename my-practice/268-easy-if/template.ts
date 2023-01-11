/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-11 08:46:24
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-11 08:53:46
 */
type If<C extends boolean, T, F> = C extends true ? T  :  F

// 功能：
// 实现一个If类型   传入三个参数， C只能是true或者false,  C为true 返回类型T, C为false返回类型F

// 用js 模拟
// function (C,T,F) {
//     return C ? T : F
// }


//// @ts-expect-error
// 报错的这一句注释的意思是，期望底下的这段代码抛出错误，否则这句注释就会报错



// type If<C, T, F> = C extends true ? T  :  F  
//// @ts-expect-error  报错， 期望我们让下面这行代码报错， 而我们的C没有做限制
// type error = If<null, 'a', 'b'>  