# Blogs

This is a mini project/task for the company **Pepper Cloud Private Limited** as an application for internship for the role of web development.
This is blog where users can view,create,edit or delete a blog. I have made REST APIs for using _NodeJS_ and frontend using _React_

## Table of contents
* [How to run](https://github.com/tarun201/blogs/blob/master/README.md#how-to-run)
  * [Import databse](#imdb)
  * [Change the server configuration](#csc)
  * [Run the server and the app](#rsa)
* [Known Issues](#ki)


## How to run


### Import database
I have included my database with the file name [blogs.sql](./blogs.sql).
First login in your database and then create a new database

```
mysql> CREATE DATABASE new_database;
```
Then exit the MySQL shell by pressing `CTRL+Z`. From the normal command line, you can import the dump file with the following command:
```
mysql -u username -p new_database < blogs.sql
```
<a name="csc" />
### Change the server configuration
In the file [index.js](./node/config/index.js) you can change the configuration according to your database.
```
var config = {};
config.host = 'localhost';
config.port = '3306';
config.db = 'internship';
config.user = 'root';
config.passwd = '1234';
config.servicePort = 8080; //Don't change this

module.exports = config;
```
<a name="rsa" />
### Run the server and the app
Open two terminals from the project folder
in one terminal run the following command:
```
$ node node/app.js
```
and in the other terminal:
```
$ npm start
```

This should hopefully make the app run smoothly. If faced some difficulties do inform.

<a name="ki" />
## Known Issues
- For editing field we can't select a single parameter. Have to fill all the parameters
