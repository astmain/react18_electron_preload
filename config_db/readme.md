# 删除就的容器名
docker rm -f dayu_postgresql_5555



# 安装镜像
docker-compose up -d
docker ps -a
docker exec -it    dayu_postgresql_5555      /bin/bash


# 其他命令
查看容器      docker ps -a
进入容器      docker exec -it        dayu_postgresql_5555     /bin/bash
查看日志      docker-compose  logs   dayu_postgresql_5555


# 数据库连接
103.119.2.223:5555
dayu
dayu




npm  run  prisma:generate
npm  run     prisma:push
npx  prisma   db   seed    初始化数据   生产基础menus metas


pnpm dev

