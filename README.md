# Todo app using PERN stack

This repository creates a simple todo list webapp using the PERN stack
- Postgres
- Express
- React
- Node

Before starting make use you have Node version 16

To get started clone this repository :

```
git clone 
```

Then run the following command to install the needed packages

```
npm i
```

Before starting you will need to create the database that will store the tasks, to do so go to /server/database.sql and run the commands in there to create the database and table needed.

Also edit the db.js to hold your database configuration.

After that you are all set you will just need to start the two servers.
From inside the folder cd into server and run 

```
node index.js
```
or install nodemon 
```
npm i nodemon
```
and run 
```
nodemon index.js
```
I suggest using nodemon as it will refresh the server if you make any changes to the project.

Now you will see your new todo list app on localhost:3000