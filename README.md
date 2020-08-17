# For backend to work please make the following procedures:

## Download and run image for mariadb database Docker Image, its running at 3307 for avoid conflicts with mysql local:

docker run -p 3307:3306 -d --name mariadb -e MYSQL_ROOT_PASSWORD=mypassword mariadb/server:10.4

## Conect to mysql shell using 

mysqlsh --host 127.0.0.1 -P 3307 -u root -p

## apply next instruction for accept SQL code

\sql

## Create database using the following commands


CREATE DATABASE BdB; \
USE BdB; \
SELECT DATABASE();\
CREATE TABLE Location( name VARCHAR(100) NOT NULL, area_m2 INT UNSIGNED); \
INSERT INTO Location VALUES ("colombia",10); \
INSERT INTO Location VALUES ("Francia",10); \
INSERT INTO Location VALUES ("USA",10); \
INSERT INTO Location VALUES ("Italia",10); \

## Install requirements for node using:

npm install package.json

## Run server using the following script

npm run startBackend

## you can verify services POST and GET using Postman at this endpoint

localhost:3000

# For Frontend to work please make the following procedures:

## Go to frontend folder and install all packages

npm install package.json

## after that init the server 

ng serve

## open your browser at 

http://localhost:4200/