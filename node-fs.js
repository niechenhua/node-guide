// 异步读取文件
// a.语法: fs.readFile(文件路径, 配置参数, 回调函数)
// b.参数:
// ● i.文件路径: 必填
// ● ii.配置参数: 不写默认是 buffer 可以手动配置为 utf-8
// ● iii.回调函数: 必填, 接受两个参数, 第一个为报错信息, 第二个为正确读取到的文件的内容(字符串格式的)
// c.回调函数:
// ● i.第一个参数: 错误信息
// ● ii.第二个参数: 正确读取到的文件的内容
const fs = require("fs");
fs.readFile("./fs.txt", "utf-8", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});

