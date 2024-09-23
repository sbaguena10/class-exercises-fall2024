# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
Homebrew: It is a package manager for macOS that simplifies the installation of software.

2. What does the `update` command do (either `brew update` or `apt-get update`)?

It upgrades Homebrew package lists to make sure that the latest versions are available.

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?

It is stored on an specific directory that it comes after the homebrew instalation.


## Part 2.
1. What is a python virtual environment?

A python virtual enviroment is a directory that contains Python libraries, scripts, and packages and that it is isolated from other virtual enviroments and the systems Python installations.

2. What is Poetry, and how is it different from other Python package managers like pip?
Poetry is a dependency manager for Python projects that handles dependencies and packaging. The main differnece between Poetry and pip is that poetry manages the whole entire cycle related to packages,
installations, or virtual enviroments while pip does not.


3. What happened when you issued the `poetry new poetry-demo` command?
This created a new python template inside the poetry-demo directory.

4. How do you run a python file using the poetry virtual environment?
poetry run python thescript

5. What is the purpose of the `poetry.lock` file?
The poetry.lock file  makes sure that all dependencies and subdependencies of the project are using the same version. This checks out that the whole project is using the same version of packages across
all of the different enviroments.

## Part 3.
1. What are some of the things that `package.json` is used for?

It defines the Node.js project metadata and manages all of it is dependencies

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?

It is something that is not necessary since all of the dependencies can be installed again using package.json and it will make the project size increase which is not necessary either.


