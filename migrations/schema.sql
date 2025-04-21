CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);

INSERT INTO users (name, email) VALUES
('山田太郎', 'taro@example.com'),
('佐藤花子', 'hanako@example.com');
