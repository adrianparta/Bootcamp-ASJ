--CONSULTAS

--1 - Listar todos los artitas por Discografica, ordenados por el nombre del artista

select a.nombre as artista, d.nombre as discografica
from artista a 
inner join discografica d on d.id = a.discografica_id
order by a.nombre

--2 - Que Discográfica NO tiene artistas?

select d.nombre from artista a
right join discografica d
on d.id = a.discografica_id
where a.nombre is null

--3 - Listar el numero de canciones por artista en orden descendiente

select count(c.id) as cant, ar.nombre as artista from canciones c
inner join album a
on a.id = c.album_id
inner join artista ar
on ar.id = a.artista_id
group by ar.nombre
order by cant desc

--4 - Que artista grabó el mayor numero de canciones?

select top 1 ar.nombre as artista from canciones c
inner join album a
on a.id = c.album_id
inner join artista ar
on ar.id = a.artista_id
group by ar.nombre
order by count(c.id) desc

--canciones por artista
select a.nombre, canciones.nombre, album.nombre, canciones.duracion from canciones inner join album on album.id = canciones.album_id
inner join artista a on a.id = album.artista_id

--5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?

select ar.nombre as artista, al.nombre as album, count(c.duracion) as cant from artista ar
inner join album al
on ar.id = al.artista_id
inner join canciones c
on c.album_id = al.id
where c.duracion < 5.00
group by ar.nombre, al.nombre

--6 - En relación con la consulta anterior, muestra también las canciones y su duración

select  ar.nombre as artista, al.nombre as album, c.nombre as cancion, c.duracion as duracion,
(select count(canciones.id) from artista
inner join album
on artista.id = album.artista_id
inner join canciones
on canciones.album_id = album.id
where canciones.duracion < 5.00
and al.id = album.id
and ar.id = artista.id) as cant
from artista ar
inner join album al
on ar.id = al.artista_id
inner join canciones c
on c.album_id = al.id
where c.duracion < 5.00

--7 - Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?

select ar.nombre as artista, count(c.duracion) as cant from artista ar
inner join album al
on ar.id = al.artista_id
inner join canciones c
on c.album_id = al.id
where c.duracion > 5.00
group by ar.nombre

--8 - En que año se grabaron la mayoría de las canciones?

select top 1 a.anio as año from album a
inner join canciones c
on c.album_id = a.id
group by a.anio
order by count(a.anio) desc

--9 - Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas

select top 5 ar.nombre, al.nombre, c.nombre, al.anio
from artista ar, album al, canciones c
where ar.id = al.artista_id
and al.id = c.album_id
order by c.duracion desc

--10 - Duración total de todas las canciones grabadas por cada artista en orden descendente

select ar.nombre, round(sum(c.duracion), 2) as 'duracion total' from artista ar, album al, canciones c
where ar.id = al.artista_id
and c.album_id = al.id
group by ar.nombre
order by 'duracion total' desc

--11 - Que artistas y album no tienen canciones de menos de 5 minutos?

select aux2.artista, aux2.album from 
(select ar.nombre as artista, al.nombre as album
from artista ar, album al, canciones c
where ar.id = al.artista_id
and c.album_id = al.id
and c.duracion < 5
group by ar.nombre, al.nombre) aux
right join
(select ar.nombre as artista, al.nombre as album
from artista ar, album al
where ar.id = al.artista_id) aux2
on aux2.artista = aux.artista 
and aux2.album = aux.album
where aux.artista is null
and aux.album is null

--12 - Mostrar el top 3 de artistas con el promedio de duración de las canciones, 
--en orden descendente con la canción mas larga primero 

select top 3 ar.nombre as artista, round(avg(c.duracion),2) as promedio from artista ar, album al, canciones c
where ar.id = al.artista_id
and c.album_id = al.id
group by ar.nombre
order by promedio desc

--13 - Qué artistas no lanzaron un album durante la decada de 1980 y 1990?

SELECT ar.nombre
FROM   artista ar
       LEFT JOIN (SELECT DISTINCT artista.nombre AS artista
                  FROM   artista,
                         album al
                  WHERE  artista.id = al.artista_id
                         AND al.anio >= 1980
                         AND al.anio <= 1990) AS aux
              ON aux.artista = ar.nombre
WHERE  aux.artista IS NULL 

--14 - Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)

select floor(sum(c.duracion)) as minutos, round((sum(c.duracion) - floor(sum(c.duracion)))*60, 0) as segundos
from album a, canciones c
where a.nombre = 'Sgt. Pepper''s Lonely Hearts Club Band'
and c.album_id = a.id
