#!/bin/bash

# Replace 'your-username' with your actual MySQL username
username='root'
# No password is provided here, so the script will attempt to log in without a password
password=''
dbname='mall'

# Execute the SQL commands from the 001_setup_user.sql file
mysql -u "$username" -D "$dbname" < ./sql/001_setup_user.sql

# Check if the SQL commands were executed successfully
if [ $? -eq 0 ]; then
  echo "Setup completed successfully."
else
  echo "Error: Setup failed."
fi
