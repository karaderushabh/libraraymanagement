# libraraymanagement


## User Stories

1. As a user I can see all the books without login but not be able to add them in any list.
2. As a user I am able to
    a. Login
    b. Logout
    c. Register into the application.
3. As a user I can see all the books available.
4. As a user I can add the book into Wishlist or completed list books
5. As a user I can see all my Wishlist books once I click on the Wishlist option.
6. As a user I can see all my completed books once I click on completed books option
7. As a user I can see all the errors while inserting the data at client side only.
8. As a user I can remove the books from completed list or wishlist.




## Instructions to run the project:

1. Please connect your server with your database, in my case I have used derby server and dbeaver DBMS, and change the database configuration inside        application.properties file as per your availaible DBMS and server(edit server config in pom.xml).

2. Run the spring boot project on port 8080, this will create tables in your DB(using JPA). Once tables are created run the SQL commands provided in data.sql file.

3. Now run the angular project(on port 4200) and in browser you can view the project on localhost:4200


