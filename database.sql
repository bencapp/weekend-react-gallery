-- Database name: 'react_gallery'

CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(200),
	"description" varchar(500),
	"likes" int default 0
);

INSERT INTO gallery ("path", "description") 
VALUES ('images/img0.jpg', 'Detail from DUST: Woodcut.'), 
('images/img1.jpg', 'GRASS, Reduction Woodcut'), 
('images/img2.jpg', 'Detail from BIRCH: Woodcut.'), 
('images/img3.jpg', 'Detail from REACHING: Woodcut.'), 
('images/img4.jpg', 'Detail from SELF PORTRAIT WITH FLOWERS: Linocut.'), 
('images/img5.jpg', 'Detail from MAP: 1: Linocut.'), 
('images/img6.jpg', 'Detail from MAP: 2: Linocut.'), 
('images/img7.jpg', 'Detail from MAP: 3: Linocut.'), 
('images/img8.jpg', 'Detail from SCULPTURE: Linocut.'), 
('images/img9.jpg', 'Detail from OTIS: Linocut.'), 
('images/img10.jpg', 'Detail from KETTLE: Woodcut.'), 
('images/img11.jpg', 'Detail from SERVICE AT VERSTOVIA: Woodcut.'), 
('images/img12.jpg', 'Detail from THE DANCE: Etching.'), 
('images/img13.jpg', 'Detail from THE DANCE: Etching.'), 
('images/img14.jpg', 'Detail from HOLDING YOU: Woodcut.'), 
('images/img15.jpg', 'Detail from ASTURIAN BRIDGE: Linocut.'), 
('images/img16.jpg', 'Detail from DUST: Woodcut and Screen Print.'), 
('images/img17.jpg', 'Detail from COATS: Linocut.'), 
('images/img18.jpg', 'Detail from CITY TREES II: Woodcut.'), 
('images/img19.jpg', 'Detail from CITY TREES: Woodcut.') ;