# sudo  sh  install_express_9999.sh 

echo -e '\e[32m查看镜像,拉取镜像********************************\e[0m'
# docker image rm -f node:20
docker pull node:14.18.3
docker image ls
cd /


echo -e '\e[32m查看目前运行的容器,删除指定容器*******************\e[0m'
docker ps -a
docker rm -f   express_9999


echo -e '\e[32m启动新容器**************************************\e[0m'
docker run -itd --name express_9999     -v /express_9999:/express_9999    -p 9999:9999   node:14.18.3    /bin/bash



echo -e '\e[32m进入新容器,请运行npm run dev *********************\e[0m'
docker exec -it express_9999 /bin/bash   
cd express_9999  &&  npm i && npm run dev
