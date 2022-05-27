# Mean-stack-problem
- Server folder contains the API build in NodeJs
- App folder contains the applicaiton build in Angular 13

## Dependencies
- angular Cli verison 12+ (13.3.10)
- node version 12.2.9
- MongoDb package
- express package
- cors package

##Steps to run the Angular app
- Install angular @cli from https://angular.io/
- Open the app folder and run ``` npm install ``` It will install the npm packages.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.  

##Steps to run the NodeJs API
- Install Node from https://nodejs.org/en/
- Open the server folder and run ``` node server.js ``` in the terminal 
- It will start listening on `http://localhost:8080`.

## My Though process while solving the coding problem
- Which approach for data sharing would be best while working with the current data and for the future scallability.
- How can I make the UI and designs interactive with less and optimized data.
- To develop and implement an algorithm which will find the data related to movies over the web on different websites and will return the final data, which later can be used to serve our the websit, but piracy interrupted me while thinking

## Design Choices maded and why
- I choosen up a dark theme which is relaxing to eyes and gives and experience similar to one can memorize in theatre.
- I used containers with `display:flex ` property of css to make it responsive for each and every viewport.
- I created a small modal which opens up on bottom right, It gives a classic and royal feel to the user.

## How the solution can be optimized in the production mode
- I used google drive to store posters and trailers, In production mode we can use a fast, robust and reliable solution to serve data while compressing and encrypting the files for optimization and security.
- I used shared cluster in mongoDb to store data, In production mode we can use private cluster with a handson configuration, enabling load balancers for better solution.
- I writed a mvp version of this code not focusing much on the security, and optimization parts which can be improved in production mode.

## Potential designs issue in current code and how the can be improved
- Cards on the home page can be improved to attract audience, and to increase readibility and usability.
- More details can be shown in an attractive way to engage audience, which is lacking somwhere in current solution due to lack of data and designs.
- Movie page need to be optimized and redisgned to make it better than pre built solutions.

## Output
