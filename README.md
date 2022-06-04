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
  "gender":"男",
  "tel":13800000000,
  "IdNumber":"331081200012120059",
  "startTime":"2022-05-31 08:00:00",
  "endTime":"2022-06-01 18:00:00",
  "campus":"钱湖校区",
  "unit":"浙江万里学院",
  "vechile":ture,
  "numberPlate":"浙BBB111"
  }
}
```

### API List

| 方式     | 接口地址                                | 功能描述          | 接口返回类型   | 接口返回值  |
| ------- | -------------------------------------- | ---------------- | ------------ | --------- |
| POST    | /departments/                          | 创建新部门         | array        | 部门列表   |
| PUT     | /departments/{:departmentId}           | 更新部门信息       | string       | 结果代码   |
| DELETE  | /departments/{:departmentId}           | 删除部门          | string        | 结果代码  |
| GET     | /departments/{:departmentId}/reviewers | 获取部门的审批人    | array        | 审批人列表 |
| POST    | /reviewers/                            | 新建审批人         | string       | 结果代码   |
| PUT     | /reviewers/{id}                        | 更改审批人信息      | string       | 结果代码   |
| DELETE  | /reviewers/{:reviewerId}               | 删除审批人         | string       | 结果代码   |
| GET     | /reviewers/{:reviewerId}/applications  | 获得审批人相关的访客 | string       | 申请列表   |
| GET     | /applications/{id}                     | 获取访客通行证      | object       | 通行资格   |
| GET     | /reviewers/{:reviewerId}/applications/ | 获取审批人通行证    | object       | 通行资格   |
| POST    | /applications/                         | 添加访客申请       | string       | 结果代码    |
| PUT     | /applications/{id}/validate            | 审批人审批通行资格  | string       | 结果代码    |
| DELETE  | /applications/{id}                     | 撤销访客申请       | string       | 结果代码    |
