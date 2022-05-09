# lena-cli

## 如何使用 lena-cli 创建项目？

- npm install 安装 lena-cli 到全局
- lena create xxx 安装拉取项目

## lena-cli 的搭建步骤拆解：

1. 创建项目 首先 npm init 创建初始化
2. 在 lena-处理中执行 npm link 链接到全局
3. 通过下 fs.existsSync 先判断是否文件项目名重复

- 存在？
  - 强制覆盖（如过 create 时添加--force）？删除现有的项目新建一个项目
  - 询问是否要覆盖？是-》删除现有的 否=》return 终止流程

4. create

- 获取仓库名称 repo
- 获取版本号 仓库
- downloadGitRepo(repo,tag) 拉取远端代码 download-git-repo 库

## 发布

- 发布项目 npm login==》npm publish 注意每次发布发 version 版本号一定要变更

## cli 用得时候遇到的一些问题

- node 版本，目前来说 12 版本是不行的，我一直切换的是 16 版本
