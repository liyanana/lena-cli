#! /usr/bin/env node

//创建脚手架启动命令（使用 commander） command 命令参数有两种 尖括号<必选>和方括号[可选]
const program = require("commander");
const chalk = require("chalk"); //美化控制台输出
const figlet = require("figlet");
program
  // 配置版本号信息
  .version(`v${require("../package.json").version}`)
  .usage("<command> [option]");

// 解析用户执行命令传入参数
program.parse(process.argv);
program
  .command("config [value]")
  .description("检查并修改配置")
  .option("-g, --get <path>", "get value from option")
  .option("-s, --set <path> <value>")
  .option("-d, --delete <path>", "delete option from config")
  .action((value, options) => {
    console.log(value, options);
  });

program
  // 监听 --help 执行
  .on("--help", () => {
    // 新增说明信息
    console.log(
      "\r\n" +
      figlet.textSync("lena", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    );
    // 新增说明信息
    console.log(
      `\r\nRun ${chalk.cyan(`lena <command> --help`)} show details\r\n`
    );
  });

// 解析用户执行命令传入参数

program
  // 定义命令和参数
  .command("create <app-name>")
  .description("创建项目")
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option("-f, --force", "overwrite target directory if it exist")
  .action((name, options) => {
    // 打印执行结果
    require("../lib/create.js")(name, options);
  });
program.parse(process.argv);
