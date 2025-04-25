帮我创建一个nest.js初始化项目

# prisma教程
pnpm install prisma --save-dev     安装包   
npx prisma init                    初始化一次
schema.prisma                      拷贝以前的模版

# 创建数据库和生成代码
npx prisma db push                 创建数据库
npx prisma generate                生成代码

# 测试链接数据库
// prisma/schema.prisma    公司     D:\AAA\xx_work\electron_desktop_01\prisma\dev.db
// prisma/schema.prisma    家里     E:\AAA\xp_study\electron_desktop_01\prisma\dev.db