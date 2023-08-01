-- We want to find out how many of each category of film MAE HOFFMAN has starred in.

-- So return a table with category_name and the count of the number_of_films that MAE was in that category.

-- Your query should return every category even if MAE has been in no films in that category

-- Order by the category name in descending order.


SELECT category.name AS category_name,
IFNULL(COUNT(actor.actor_id),0) AS number_of_films FROM category
JOIN film_category ON category.category_id = film_category.category_id
JOIN film ON film_category.film_id = film.film_id
JOIN film_actor ON film.film_id = film_actor.film_id
LEFT JOIN actor ON film_actor.actor_id = actor.actor_id AND (actor.first_name = "MAE" AND actor.last_name = "HOFFMAN")
GROUP BY category.name
ORDER BY category.name DESC;