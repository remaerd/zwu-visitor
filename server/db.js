var mysql = {
    host: process.env.mysql_server_url, // The ip address of cloud database instance, 云数据库实例ip地址
    user: process.env.mysql_server_username, // The name of cloud database, for example, root, 云数据库用户名，如root
    password: process.env.mysql_server_password, // Password of cloud database, 云数据库密码
    database: process.env.mysql_server_database, // Name of the cloud database, 数据库名称
    port: 22791
}
module.exports = mysql;