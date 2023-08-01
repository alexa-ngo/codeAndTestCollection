-- Find the film_title of all films which feature both RALPH CRUZ and WILL WILSON
-- Order the results by film_title in ascending order.
--  Warning: this is a tricky one and while the syntax is all things you know, you have to think a bit oustide the box to figure out how to get a table that shows pairs of actors in movies.


-- Put your query for q5 here.


SELECT rc.title as film_title FROM (SELECT f.film_id, f.title FROM film as f
JOIN film_actor ON f.film_id = film_actor.film_id
JOIN actor on film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 80) as rc
JOIN (SELECT f.film_id, f.title FROM film as f
JOIN film_actor ON f.film_id = film_actor.film_id
JOIN actor on film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 168) as ww
WHERE rc.film_id = ww.film_id;

