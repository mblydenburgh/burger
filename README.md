# Brgr Bar
## Express/Handlebars app for keeping track of burgers to eat.

## Main Features
Homebrew ORM calls to MySQL database through server rendered app powered by Handlebars and Express.

App/ORM supports the following queries:
1. `selectAll(tableName)`
2. `insertOne(tableName,colName,col2Name,value,value2)`
3. `updateOne(tableName,colName,updatedValue,param,location)`
4. `deleteOne(tableName,colName,value)`

## Installation
To run, first run `npm install` from the terminal to install packages. Then, to setup the database and to populate the initial datset, run the `schema.sql`.