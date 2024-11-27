## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

select film_id, title,release_year 



2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.

select first_name from customer where last_name like 'S%';




3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

select title, rental_duration 
from film 
order by rental_duration DESC, title ASC;




4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

select film.title, category.name
from film
join film_category ON film.film_id = film_category.film_id
join category ON film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.


select category.name as category_name, AVG(film.rental_duration) AS average_rental_duration
from film
join film_category ON film.film_id = film_category.film_id
join category ON film_category.category_id = category.category_id
group by category.name;

6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

select count(*) as film_count
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'Action';
 


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.

insert into customer (first_name, last_name, email, store_id, address_id)
values ('Sergio', 'Baguena', 'sbaguena@unca.edu', 1, 1);



8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

update film
set rental_rate = rental_rate * 1.10
where film_id in (
    select film.film_id
    from film
    join film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    where category.name = 'Comedy'
);



9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

delete from film
where film_id not in (
    select distinct film_id
    FROM rental
);



10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

create table movie_reviews (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    reviewer_name VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comments TEXT,
    constraint fk_film_id FOREIGN KEY (film_id) references film(film_id)
);

alter table movie_reviews
add constraint fk_film_id FOREIGN KEY (film_id) references film(film_id);



## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

It is a feature that relfects the schema and maps the table to python classes, which allow the developers to interact with the database using objects


2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

the use of asynchronous manages the databse interactions asynchronously. It ensures that the databse apps are not blocked the main application thread


3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax. 

select(Customer).where(
            or_(
                Customer.first_name.endswith("n"),
                Customer.first_name.endswith("a")
            )
        )
    for customer in customers.scalars().all():
        print(customer.first_name)



4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.

The pross about using a session.execute() are that you get full control of the sql syntax and in a lot of ocassions, the performance can be quicker. On the other hand, the cons are for example that the final results are given in a form ofvtuples or rows rather than mapped Python objects. It can be also harder to mantain when these queries get more complex.

The pros using ORM session with session.execute(), queries that map into pyrhon objects, they are more safe since automatically parameterizes queries and ORM queries are direcly related to application models. On the other hand, some of the cons that the ORM layer does is to contribute negatively to performance, and that some queries are more difficult to express due to the ORM sytnax.

