show DATABASES;

use ytdatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password, email) 
VALUES 
('Ramesh', 'Ramesh@12#', 'Ramesh@example.com'),
('Jayseelan', 'Jayseelan123', 'Jayseelan@example.com'),
('Kaviya', 'Kaviya123', 'Jayseelan@example.com');

SELECT * FROM users;