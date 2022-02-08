# FILE BOXS WEB APPLICATION

File boxs is a web based application for uploading file on boxs.

## Setting up your development environment


### Step:1
Get a copy of the code from the repository.
The GIT repository called File boxs.

1. See Clone an existing GIT repo  using this url https://github.com/prakash-pra/file-boxs.git
 
### Step 2: Run the Project
 To run the project it is necessary to run both the client and the server.
 
## 1. Run the client
* switch from root directory to client directory (cd client).  
* npm install(first time only, can take some time).  
* npm start.

## 2. Run the server
* In root directory npm install.  
* Setup your mongodb atlas using this link https://www.mongodb.com/basics/mongodb-atlas-tutorial.  
* Setup your enviroment variables shown below.  
```
NODE_ENV=development  
PORT=2800 
MONGO_USER=********  
MONGO_PASSWORD=********   
MONGO_DATABASE=********  
SECRET=***********
```
* run you project using npm run dev.

