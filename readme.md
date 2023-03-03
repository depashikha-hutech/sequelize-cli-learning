add read me file



SequelizeCLI---------SequelizeCommand-lineInterface
CLI supports for migrations and projectbootstrapping


1.  To install the Sequelize CLI
----------------------------------      
    npm i sequelize-cli

2. To create an  project have to  execute init command
--------------------------------------------------------
  npx sequelize-cli init

it will create 4 folders
. config---- contains config file, which tells CLI  to connect with database
. models--- contains all models for a project
. migrations-- contains all migration files
. seeders-- contains all seed files

In config folder config.json file will created
{
  "development": {
    "username": "postgres",  
    "password": "postsql@", ---------------password db
    "database": "student-info",----------------databasename 
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postsql@",
    "database": "student-info",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "postsql@",
    "database": "student-info",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
mofdify config.json according to your preference 
then
to create database
npx sequelize db:create

database is created as student-info

 command to delete database:  npx sequelize db:drop


To create a model named  Student
----------------------------------------------
npx sequelize-cli model:generate --name student --attributes id:uuid,name:string,mobile:string,email:string
 
then this will fill will create

Create a model file index.js and student.js in models folder;
Create a migration file with name like XXXXXXXXXXXXXX-create-student.js in migrations folder.

nothing is inserted anything into the database. We have just created the required model and migration files for a first model, student. 
to create that table in the database  need to run db:migrate command
--------------------------------------------------------------------------------
  npx sequelize-cli db:migrate
when this command will execute then 
  . SequelizeMeta table create in database and students with all coloumns will created

to delete the tables from db 
------------------------------------
npx sequelize-cli db:migrate:undo ( all table will deleted)
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-organization.js(to delete specific tabel from database)

Creating the seed(add data in  tabels)
----------------------------------------------
to insert some data into the a tables have to create a seed file in the seederfolder 

npx sequelize-cli seed:generate --name studentinfo
 after this XXXXXXXXXXXXXX-studentinfo.js will be created
modify in according to your preference  which data  have to insert
then
npx sequelize-cli db:seed:all (to insert all coloumns in the table)

delete data from tables
-------------------------------
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:undo --seed 20230301065241-orginfo.js(delete data from specfic table organizations)

to generate file in migration folder
npx sequelize-cli migration:generate --name migration-address

