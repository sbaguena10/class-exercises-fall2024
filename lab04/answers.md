# Lab 4: Docker Tutorial

**Before you begin...**
1. Ensure that Docker is running and that you can access the Docker Dashboard
1. Open the command prompt
2. Run the following command: `docker run -dp 80:80 docker/getting-started`
3. Open [http://localhost](http://localhost) in your browser to complete the tutorial.


Complete the following tutorial sections (note that #4 and #9 are optional) and answer the questions below:

## 1. Getting Started
Consider the command you just ran: `docker run -d -p 80:80 docker/getting-started`

Answer the following:
1. Explain what the -p flag is doing (in your own words)

-p flag stands for "publish" and what it does is that it publishes a port for our container.

2. How do you think [http://localhost](http://localhost) is communicating with Docker?

The way that our local machine communicated with Docker is through a bridge that Docker creates, it allows network traffic to exist between them.

## 2. Our Application
When you download and unzip `app`, save it inside of the `lab04` directory (while on your `lab04` branch). Then follow the instructions for this section. When you're done, answer the following questions about the `Dockerfile` you just made:
1. What is `node:18-alpine` and where did it come from?

`node:18-alpine` is a docker image and it comes from Node.js 

2. Which commands in the Dockerfile instructed Docker to copy the code from `app` onto the Docker image? Explain.
COPY . /app. This command will copy everything from the directory on to our host.

3. What do you think would happen if you forgot to add `CMD ["node", "src/index.js"]` in your Dockerfile? Why?

It will not be possible to start our application because Docker will not know how to do it. CMD tells what specific command to execute.

## 3. Updating Our App
In this section, you learned that if you make a change to the code, you have to 
* Rebuild the Docker image,
* Delete the container that you previously made (which is still running), and
* Create a brand new container

Answer the following:
1. What are two ways you can delete a container?

docker rm <container_id>
docker rm -f <container_id>



## 4. Sharing Our App (Optional)
You don't have to complete this section, but I do want you to navigate to the Docker Image repository and take a look: [https://hub.docker.com/search?q=&type=image&image_filter=official](https://hub.docker.com/search?q=&type=image&image_filter=official). These are all of the potential Docker Images you can utilize to build your own containers (which will save you a lot of time)!

## 5. Persisting our DB

1. What is the difference between the `run` and the `exec` command?

'run' starts and creates a new container and `exec` executes a command from an already running container.

2. What does the `docker exec -it` command do, exactly. Try asking ChatGPT!

It allows you to interact with an already running container.

The flag -i,  Keeps the input stream open, so you can provide input while the command runs.
The flag -t, Allocates a pseudo-terminal, which enables the terminal-like behavior within the container.

3. What was the purpose of creating a volume?

The purpose of the volume is to keep the data, the volume permits to store and manage data separatedly from the container filesystem.

4. Optional: How does the TODO app code know to use the volume you just made? Hint: open `app/src/persistence/sqlite.js` and see if you can figure it out.

The TODO app’s code, specifically in the SQLite configuration, contains the file path where it expects to store or access the SQLite database.
When you create a volume and map a directory on the host machine to a directory in the container, Docker ensures that the container's code interacts with the mapped volume.



## 6. Using Bind Mounts
1. Why are bind mounts useful? 

We control the exact mountpoint on the host. We can use this to persist data, but is often used to provide additional data into containers. 
When working on an application, we can use a bind mount to mount our source code into the container to let it see code changes, respond, and let us see the changes right away.

2. Note that the commands below can also be represented in a Dockerfile (instead of in one big string of commands on the terminal). What are the advantages of using a Dockerfile?

```
docker run -dp 3000:3000 \
    -w /app -v "$(pwd):/app" \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```

Reusability: we can define how a image is built, which makes it reusable.
Version Control: in a dockerfile, changes can be tracked
Automation: building and deploying containers are easier to automate in a dockerfile
Portability: Dockerfile can esaily be shared 

## 7. Multi-Container Apps
If you have never worked with network applications, this section may be confusing. That said, try to answer this question as best you can:

1. If you have two containers running that are sandboxed (i.e., one container can't reach into another container and see its internal state or code), how did you get your two containers to communicate with one another? In other words, how was the web application container able to communicate with the database container?

One of the apporoches that we used in the lab is Docker Compose which is a tool that was developed to help define and share multi-container applications.
With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down. It allows us to control the container networking by using the YAML file.


## 8. Using Docker Compose
1. What is the purpose of the `docker-compose.yml` file?

The docker-compose.yml file allows us as i said in the question before to configure and connect and manage multiple container throughout that samee YAML file.
It organizes the process of running multi container Docker applications by specificating their configurations


## 9. Image Building Best Practices (Optional)
Optional section. Only complete if you want to.


## What to turn in
After answering all of the questions above...
1. Make sure that your `app` folder is inside of your `lab04` folder (including your `Dockerfile` and `docker-compose.yml` files).
1. Then, stage, commit, and push your 'lab04' branch to GitHub. 
1. Create a Pull Request (but do not merge your pull request -- that doesn't happen until Sarah reviews it).
1. Paste a link to your pull request in the Lab04 submission
