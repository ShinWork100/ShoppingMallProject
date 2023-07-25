USE mall;

-- Create the 'users' table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  login VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- Insert data into 'users' table if it's empty
INSERT INTO users (username, login, password) VALUES
  ('user1', 'user1_login', 'user1_password'),
  ('user2', 'user2_login', 'user2_password'),
  ('user3', 'user3_login', 'user3_password')
  ON DUPLICATE KEY UPDATE id=id; -- This line does nothing, but it's required for the INSERT statement

-- The ON DUPLICATE KEY UPDATE line is used to do nothing when there is a duplicate key (id) in the table.
