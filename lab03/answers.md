# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
drwxr-xr-x   4 sergiobaguenamartinez  staff  128 Sep  5 10:33 .
drwxr-xr-x   6 sergiobaguenamartinez  staff  192 Sep  5 10:23 ..
drwxr-xr-x  10 sergiobaguenamartinez  staff  320 Sep  5 10:34 .git
-rw-r--r--   1 sergiobaguenamartinez  staff   19 Sep  5 10:26 README.md


```

### 1.2. Paste the output of your `git status` command
```
(base) sergiobaguenamartinez@Sergios-MacBook-Air lab03-exercises % git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
(base) sergiobaguenamartinez@Sergios-MacBook-Air lab03-exercises % git status
On branch main
nothing to commit, working tree clean

```

### 1.4. Copy your `git log` output
```
commit 7696d99fca3e3737d430bcebdb2f9e715e2e0732 (HEAD -> main)
Author: Sergio Baguena Martinez <sergiobaguenamartinez@Sergios-MacBook-Air.local>
Date:   Thu Sep 5 10:50:46 2024 -0400

    add README.md to the repository


```

### 1.5. Copy your `git diff` output
```
diff --git a/README.md b/README.md
index 0d2627e..16d27c1 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,3 @@
 # README.md lab03
 
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.

```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init: Iniatiates a new repository, also a main branch.
* git status: changes that can be or will not be commmited.
* git add: adds selected files to list of files that changes will be commmited unless they cannot be commited
* git commit: it allows you to see the latest changes commited. 
* git log: List commits that are reachable by following the parent links from the given commit(s), but exclude commits that are reachable from the one(s) given with a ^ in front of them.
* git diff: You can see what has changed between the previous commit. 


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
# paste your new repo link here...

```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

1.- Create a merge commit

It creates a new commit in the target branch that merges the changes from the source branch.
It preserves all the history of commits from the feature branch.

2.- Squash and merge

This type of merging combiens all the commits form the source branch into jsut one commmit before merging it into 
the target branch

3.- Rebase and merge

This kind of merging applies all the changes from the feauture branch on top of the target branch without merge commiting it.
It makes it look like that all the changes were done directly on top of the top branch.


