# 浙江万里学院 - 中德设计与传播学院 & 大数据与软件工程学院联合项目（万里校园访客微信小程序） REST API 接口

## 介绍

本次项目的目标，是为了改善浙江万里学院的访客系统的用户体验而搭建。

## 关于分组介绍

## 关于 REST API 的使用办法

(劳烦嘉顺帮我想一下 REST API 接口的设计，我这边考虑一下课程的设置并给你们准备后端服务器环境)

## API

### API 通用返回

```
{
"code":"001",
"content":"",
"result":{
  "id":20220531001,
  "name":"张三",
  "sex":"男",
  "tel":13800000000,
  "IdNumber":"331081200012120059",
  "startTime":"2022-05-31 08:00:00",
  "endTime":"2022-06-01 18:00:00",
  "campus":"钱湖校区",
  "unit":"浙江万里学院",
  "havenCar":"有",
  "numberPlate":"浙BBB111",
  "carColor":"黑色"
  }
}
```

### API List

| API Name              | 功能描述     | 接口返回值      |
| --------------------- | ------------ | --------------- |
| getAllApplicationById | 获取所有请求 | applicationList |
| createApplicationById | 添加访客申请 | code            |
| deleteApplicationById | 撤销访客申请 | code            |
| updateApplicationById | 修改访客申请 | code            |
| seleteApplicationById | 搜索访客申请 | applicationList |
