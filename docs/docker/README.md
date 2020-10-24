# docker 常用命令

## 列出当前所有正在运行的容器

```
docker ps
```

## 列出所有的容器

```
docker ps -a
```

## 列出最近创建的容器

```
docker ps -l
```

## 列出最近创建的 3 个容器

```
docker ps -n 3
```

## 只显示容器 ID

```
docker ps -q
```

## 启动容器

```
docker start [id|name]
```

## 重启容器

```
docker restart [id|name]
```

## 停止容器

```
docker stop [id|name]
```

## 强制停止容器

```
docker kill [id|name]
```

## 删除容器

```
docker rm [id|name]
```

## 强制删除容器

```
docker rm -f [id|name]
```

## 查看容器日志

```
docker logs -f -t --since --tail [id|name]
```

- `-f`:查看实时日志
- `-t`:查看日志产生的日期
- `--since` :此参数指定了输出日志开始日期，即只输出指定日期之后的日志
- `--tail=10`: 查看最后的 10 条日志

## 查看容器内运行的进程

```
docker top [id|name]
```

## 查看容器内部细节

```
docker inspect [id|name]
```

## 进到容器内

```
docker attach id
docker exec id
```

## 退出并停止容器

```
exit
```

## 只退出容器，不停止容器

```
Ctrl+p+q
```

## 修改容器名称

```
docker rename  原名称  新名称
```
