
-- Record Label table
CREATE TABLE discografica (
  id int  not null PRIMARY KEY,
  nombre varchar(50) not null
);

-- Record Label data
INSERT INTO discografica VALUES(1,'Blackened');
INSERT INTO discografica VALUES(2,'Warner Bros');
INSERT INTO discografica VALUES(3,'Universal');
INSERT INTO discografica VALUES(4,'MCA');
INSERT INTO discografica VALUES(5,'Elektra');
INSERT INTO discografica VALUES(6,'Capitol');

-- Artist table
CREATE TABLE artista (
  id	int  not null PRIMARY KEY ,
  discografica_id 	int  not null,
  nombre varchar(50) not null,
  FOREIGN KEY (discografica_id) REFERENCES discografica (id)
);

-- Artist data
INSERT INTO artista VALUES(1, 1,'Metallica');
INSERT INTO artista VALUES(2, 1,'Megadeth');
INSERT INTO artista VALUES(3, 1,'Anthrax');
INSERT INTO artista VALUES(4, 2,'Eric Clapton');
INSERT INTO artista VALUES(5, 2,'ZZ Top');
INSERT INTO artista VALUES(6, 2,'Van Halen');
INSERT INTO artista VALUES(7, 3,'Lynyrd Skynyrd');
INSERT INTO artista VALUES(8, 3,'AC/DC');
INSERT INTO artista VALUES(9, 6,'The Beatles');


-- Album Table
CREATE TABLE album (
  id 	int not null PRIMARY KEY,
  artista_id  int not null ,
  nombre varchar(50)  not null,
  anio int not null,
  FOREIGN KEY (artista_id) REFERENCES artista (id)
);

-- Album data
INSERT INTO album VALUES(1, 1, '...And Justice For All',1988);
INSERT INTO album VALUES(2, 1, 'Black Album',1991);
INSERT INTO album VALUES(3, 1, 'Master of Puppets',1986);
INSERT INTO album VALUES(4, 2, 'Endgame',2009);
INSERT INTO album VALUES(5, 2, 'Peace Sells',1986);
INSERT INTO album VALUES(6, 3, 'The Greater of 2 Evils',2004);
INSERT INTO album VALUES(7, 4, 'Reptile',2001);
INSERT INTO album VALUES(8, 4, 'Riding with the King',2000);
INSERT INTO album VALUES(9, 5, 'Greatest Hits',1992);
INSERT INTO album VALUES(10, 6, 'Greatest Hits',2004);
INSERT INTO album VALUES(11, 7, 'All-Time Greatest Hits',1975);
INSERT INTO album VALUES(12, 8, 'Greatest Hits',2003);
INSERT INTO album VALUES(13, 9, 'Sgt. Pepper''s Lonely Hearts Club Band', 1967);


-- canciones table
CREATE TABLE canciones (
  id int not null PRIMARY KEY,
  album_id int not null,
  nombre varchar(50) not null,
  duracion real not null,
  FOREIGN KEY (album_id) REFERENCES album (id)
);


-- canciones data
INSERT INTO canciones VALUES(1,1,'One',7.25);
INSERT INTO canciones VALUES(2,1,'Blackened',6.42);

INSERT INTO canciones VALUES(3,2,'Enter Sandman',5.3);
INSERT INTO canciones VALUES(4,2,'Sad But True',5.29);

INSERT INTO canciones VALUES(5,3,'Master of Puppets',8.35);
INSERT INTO canciones VALUES(6,3,'Battery',5.13);

INSERT INTO canciones VALUES(7,4,'Dialectic Chaos',2.26);
INSERT INTO canciones VALUES(8,4,'Endgame',5.57);

INSERT INTO canciones VALUES(9,5,'Peace Sells',4.09);
INSERT INTO canciones VALUES(10,5,'The Conjuring',5.09);

INSERT INTO canciones VALUES(11,6,'Madhouse',4.26);
INSERT INTO canciones VALUES(12,6,'I am the Law',6.03);

INSERT INTO canciones VALUES(13,7,'Reptile',3.36);
INSERT INTO canciones VALUES(14,7,'Modern Girl',4.49);

INSERT INTO canciones VALUES(15,8,'Riding with the King',4.23);
INSERT INTO canciones VALUES(16,8,'Key to the Highway',3.39);

INSERT INTO canciones VALUES(17,9,'Sharp Dressed Man',4.15);
INSERT INTO canciones VALUES(18,9,'Legs',4.32);

INSERT INTO canciones VALUES(19,10,'Eruption',1.43);
INSERT INTO canciones VALUES(20,10,'Hot For Teacher',4.43);

INSERT INTO canciones VALUES(21,11,'Sweet Home Alabama',4.45);
INSERT INTO canciones VALUES(22,11,'Free Bird',14.23);

INSERT INTO canciones VALUES(23,12,'Thunderstruck',4.52);
INSERT INTO canciones VALUES(24,12,'T.N.T',3.35);

INSERT INTO canciones VALUES(25,13,'Sgt. Pepper''s Lonely Hearts Club Band', 2.0333);
INSERT INTO canciones VALUES(26,13,'With a Little Help from My Friends', 2.7333);
INSERT INTO canciones VALUES(27,13,'Lucy in the Sky with Diamonds', 3.4666);
INSERT INTO canciones VALUES(28,13,'Getting Better', 2.80);
INSERT INTO canciones VALUES(29,13,'Fixing a Hole', 2.60);
INSERT INTO canciones VALUES(30,13,'She''s Leaving Home', 3.5833);
INSERT INTO canciones VALUES(31,13,'Being for the Benefit of Mr. Kite!',2.6166);
INSERT INTO canciones VALUES(32,13,'Within You Without You',5.066);
INSERT INTO canciones VALUES(33,13,'When I''m Sixty-Four',2.6166);
INSERT INTO canciones VALUES(34,13,'Lovely Rita', 2.7);
INSERT INTO canciones VALUES(35,13,'Good Morning Good Morning', 2.6833);
INSERT INTO canciones VALUES(36,13,'Sgt. Pepper''s Lonely Hearts Club Band (Reprise)', 1.3166);
INSERT INTO canciones VALUES(37,13,'A Day in the Life', 5.65);