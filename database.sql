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
('images/img2.jpg', 'Detail from BIRCH: Woodcut.');