CREATE TABLE IF NOT EXISTS product (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    description TEXT
);