# libraraymanagement
Instructions to run the project:

1) Please connect your server with your database, in my case I have used derby server and dbeaver DBMS, and change the database configuration inside application.properties file as per your availaible DBMS and server(edit server config in pom.xml).

2) Run the spring boot project on port 8080, this will create table in your DB using JPA. Once tables are created run the SQL command provided in data.sql file.

3) Now run the angular project(on port 4200) and in browser you can view the project on localhost:4200
