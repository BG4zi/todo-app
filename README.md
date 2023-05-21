Todo App in Nodejs
====


Introduction
------
This is just a training project. I want to sharpen my skills.

Features
------
It's just a basic todo-list app.

Requirements
------
- Nodejs v19.9.0
- Mysql (mysqld  Ver 10.11.2-MariaDB for Linux on x86_64)

Installation
------
* Base Installation
```bash
git clone https://github.com/BG4zi/todo-app.git
cd todo-app/server
touch .env
# you should type the requirements of this project in terms of database, otherwise program won't work properly
# DB_HOST="hostname"
# DB_USER="database username"
# DB_PASSWD="username password"
# DB_NAME="database name"
#
npm install
npm start
```

* DB SETUP
### There is going to be a table which name is tasks and it is going to have 3 columns id(autofill), title(char), is_done(boolean).


Status Of This Project
------
I learned a lot of things about db management and sqli(but this project is really vulnerable in terms of sql injection right now)
For now, I just wrote the entire app cursory.
So thats enough, following days I'll progress to develop this project and make this project prevented from sqli.

* I got the design from this site -> https://codepen.io/mostafa_abdallah/pen/wvjgQEE
