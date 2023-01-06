`node` 版本 `16.16.0`

[type-challenges](https://github.com/type-challenges/type-challenges)

```js
//1. 进入文件夹中，初始化npm
npm init

//2. 安装typescript/tslint和NodeJS的类型声明
npm install --save-dev typescript tslint @types/node @type-challenges/utils

// 3. 配置tsconfig.json
./node_modules/.bin/tsc --init

// 4.配置tslint.json
./node_modules/.bin/tslint --init

//5 每道题目就是自己的一个文件夹，主要就是由 md，template.ts 和 test-cases.ts 组成，我们可以直接把template.ts 和 test-cases.ts 中的代码拷到自己的本地，再去做一个练习
```
