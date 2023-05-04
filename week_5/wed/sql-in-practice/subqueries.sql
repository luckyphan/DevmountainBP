SELECT *
FROM authors
WHERE author_id IN (
  SELECT author_id FROM books WHERE pages > 1000
);

-- selects all authors where the books that have more than 1000 pages

UPDATE books
SET pages = 7
WHERE book_id IN(
    SELECT book_id
    FROM books
    WHERE title = 'Tiny Book'
)

-- selects the tiny book without knowing the book_id

DELETE
FROM books
WHERE author_id IN (
  SELECT author_id
  FROM authors
  WHERE author = 'Williams'
);

-- deletes the books authored by Williams


-- https://postgres.devmountain.com/. Save your answers in a file subqueries.sql. Push to GitHub when you’re done.

-- Get all invoices where the unit_price on the invoice_line is greater than $0.99.
SELECT *
FROM invoice
WHERE invoice_id IN (
  SELECT invoice_id
  FROM invoice_line
  WHERE unit_price > .99
  )
-- Get all playlist tracks where the playlist name is Music.
SELECT *
FROM playlist_track
WHERE playlist_id IN (
  SELECT playlist_id
  FROM playlist
  WHERE name = 'Music'
  )

-- Get all track names for playlist_id 5.
SELECT *
FROM track
WHERE track_id IN(
  SELECT track_id 
  FROM playlist
  WHERE playlist_id = 5
  )
-- Get all tracks where the genre is Comedy.
SELECT *
FROM track
WHERE genre_id IN(
  SELECT genre_id
  FROM genre
  WHERE name = 'Comedy'
  )

-- Get all tracks where the album is Fireball.
SELECT *
FROM track
WHERE album_id IN(
  SELECT album_id
  FROM album
  WHERE title = 'Fireball'
  )

-- Get all tracks for the artist Queen ( 2 nested subqueries ).
SELECT *
FROM track
WHERE album_id IN(
  SELECT album_id
  FROM album
  WHERE artist_id IN(
    SELECT artist_id
    FROM artist
    WHERE name = 'Queen'
    )
  )
