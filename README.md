# 浙江万里学院 - 中德设计与传播学院 & 大数据与软件工程学院联合项目（万里校园访客微信小程序） REST API 接口

## 介绍

本次项目的目标，是为了改善浙江万里学院的访客系统的用户体验而搭建。

## 关于分组介绍

每个小组将由 6 人组成，

## 关于 REST API 的使用办法

在制作前端应用时，会用到以下的后端接口。如果在开发过程中需要用到一些新的后端接口，请直接联系 @remaerd 或 @2016WUJI01 来实现对应的功能。

## 关于 REST API 的使用办法

### API List

| 方式   | 接口地址                             | 功能描述             | 接口返回类型 | 接口返回值 | done  |
| ------ | ------------------------------------ | -------------------- | ------------ | ---------- | ----- |
| POST   | /departments/                        | 创建新部门           | array        | 部门列表   | - [x] |
| PUT    | /departments/{:departmentId}         | 更新部门信息         | string       | 结果代码   | - [x] |
| DELETE | /departments/{:departmentId}         | 删除部门             | string       | 结果代码   | - [x] |
| GET    | /departments/{:departmentId}         | 获取部门的审批人     | array        | 审批人列表 | - [x] |
| POST   | /reviewers/                          | 新建审批人           | string       | 结果代码   | - [ ] |
| PUT    | /reviewers/{:id}                     | 更改审批人信息       | string       | 结果代码   | - [ ] |
| DELETE | /reviewers/{:id}                     | 删除审批人           | string       | 结果代码   | - [ ] |
| GET    | /reviewers/{:id}                     | 获得审批人相关的访客 | string       | 申请列表   | - [ ] |
| POST   | /applications/                       | 添加访客申请         | string       | 结果代码   | - [ ] |
| PUT    | /applications/{id}                   | 修改访客申请信息     | string       | 结果代码   | - [ ] |
| DELETE | /applications/{id}                   | 撤销访客申请         | string       | 结果代码   | - [ ] |
| GET    | /applications/{id}                   | 获取访客申请信息     | object       | 通行资格   | - [ ] |
| GET    | /applications/{id}/validate/{secret} | 通行验证             | string       | 结果代码   | - [ ] |

### 部门（departments）

```javascript
{
  "id":001, // 部门 ID
  "name":"中德设计与传播学院", // 部门名称
  "campus":001, // 校区 ID，1 钱湖校区，2 回龙校区，3 其他校区
}
```

### 审批人（reviewers）

```javascript
{
  "id":2022051001, // 工号，学生 ID
  "departmentId": 001, // 部门 ID
  "status":1, // 状态，0 是无审批能力，1 是教学部门审批能力，2 是后勤部门审批能力
  "name":"张三", // 姓名
  "tel":13800000000, // 联系
  "IdNumber":"331081200012120059", // 身份证
  "vehicleNumber":"浙BBB111",
  "validationSecret":"0b23ac80-1772-4f66-89d5-354e5c2e0898", // 用于生成访客二维码的 UUID
}
```

### 访客申请（applications）

```javascript
{
  "id":1,
  "reviewerId": 2022051001, // 审批人 ID
  "status": 0, // 审批状态，0 是未审批，1 是第一审批人通过，2 是第一审批人失败，3 是第二审批人通过，4 时第二审批人失败
  "visitorName":"张三", // 名字
  "visitorTel":13800000000, // 联系号码
  "visitorIdNumber":"331081200012120059", // 身份证 ID
  "startTime":"2022-05-31 08:00:00", // 访问开始时间
  "endTime":"2022-06-01 18:00:00", // 访问结束时间
  "vehicleNumber":"浙BBB111"
  "validationSecret":"0b23ac80-1772-4f66-89d5-354e5c2e0898", // 用于生成访客二维码的 UUID
}
```
