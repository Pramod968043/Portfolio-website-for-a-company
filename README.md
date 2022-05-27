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
<img src="output/1.png">
<img src="output/2.png">
<img src="output/3.png">
<img src="output/4.png">
<img src="output/5.png">
## Api response
```
[
    {
        "_id": "628f65399d6925d350d945c4",
        "duration": "1h 52m",
        "rating": "PG-13",
        "summary": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
        "title": "The Lost City",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=14xXb6adsAdpKbatQz1aT4TYLZMWend-v",
        "trailer": "https://drive.google.com/uc?id=1kK8B2sY4SCtwFIKng5v-nMaj4mv7sHfj"
    },
    {
        "_id": "628f67f5c58443d3dc0a744c",
        "duration": "50m",
        "rating": "TV-14",
        "summary": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        "title": "Stranger Things",
        "year": "2016",
        "poster": "https://drive.google.com/uc?id=1UzrDuCM208ZXMxPdS2Gq4tvJTGkfaC49",
        "trailer": "https://drive.google.com/uc?id=1WIaZj5HW9-v9kt9mPT2QIqcQINm0hVZT"
    },
    {
        "_id": "628f680bc58443d3dc0a744d",
        "duration": "30m",
        "rating": "12",
        "summary": "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
        "title": "Heartstopper",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=1udIRof0ibiyf65yS4gG1BsUW50L4LWBD",
        "trailer": "https://drive.google.com/uc?id=19Y3QrtVSTkaNLNGtC4NELclksrLEKSXI"
    },
    {
        "_id": "628f681ac58443d3dc0a744e",
        "duration": "2h 4m",
        "rating": "PG-13",
        "summary": "World famous movie star Olivia faces a PR disaster when a paparazzi snaps a photo of her with her married lover, Vincent. The hard-working valet Antonio accidentally appears in the same photo and is enlisted to pose as Olivia’s new boyfriend as a cover-up. This ruse with Olivia thrusts Antonio into the spotlight and unexpected chaos.",
        "title": "The Valet",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=1F4gg2P2RuuTpnjnwmg8Wlgvio4MoBtg2",
        "trailer": "https://drive.google.com/uc?id=1Irl98OVwbow1NYtkt2fdS-Xri1IhU6h2"
    },
    {
        "_id": "628f681fc58443d3dc0a7450",
        "duration": "25m",
        "rating": "TV-14",
        "summary": "After a global financial crisis, the world is engulfed in an AI-driven \"sustainable war.\" It's up to Section 9 to counter new forms of cyber threats",
        "title": "Ghost in The Shell:SAC_2045",
        "year": "2020",
        "poster": "https://drive.google.com/uc?id=1L1GRwB32zELyv2ztlrhpVzfKBXKRaT1W",
        "trailer": "https://drive.google.com/uc?id=1mZSGHqgFfHa9-fI1EORQRaQsKnnJKGc0"
    },
    {
        "_id": "628f682fc58443d3dc0a7452",
        "duration": "40m",
        "rating": "TV-MA",
        "summary": "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.",
        "title": "Who Killed Sara",
        "year": "2021",
        "poster": "https://drive.google.com/uc?id=1jYIV3MIzTQq4lLLHEhoYjonNcB5b4e_B",
        "trailer": "https://drive.google.com/uc?id=1MUaGWkWUnRaUOaunIRw8qUrn-BkiXsWG"
    },
    {
        "_id": "628f6835c58443d3dc0a7453",
        "duration": "45m",
        "rating": "TV-MA",
        "summary": "This new Colombian telenovela is about a man who has to watch his wife die and have her heart extracted to give to another woman. He’s out for revenge in the world of organ trafficking.",
        "title": "The Marked Heart",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=1vRDrYJEi9Lmnu05_OU4oLGw6lRLwDzF8",
        "trailer": "https://drive.google.com/uc?id=1Lrvm6v_s7MPoVLjVVLmi_ZNsDghcr-Oe"
    },
    {
        "_id": "628f683ac58443d3dc0a7454",
        "duration": "24m",
        "rating": "TV-14",
        "summary": "Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head!\n\nNot one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn't know is that the wife he's chosen is an assassin and the child he's adopted is a telepath!",
        "title": "SPY x FAMILY",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=1IbI-MEi1TNfalJtxmL6qDeugA4GdKeX0",
        "trailer": "https://drive.google.com/uc?id=1nCNXtTW4bFFfrCbvGmWcVHsuBQIXab7d"
    },
    {
        "_id": "628f683fc58443d3dc0a7455",
        "duration": "1h 36m",
        "rating": "R",
        "summary": "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
        "title": "No Exit",
        "year": "2022",
        "poster": "https://drive.google.com/uc?id=1hQZ2eFVf6bbHtWSbMNmr_NbXsRthvVBg",
        "trailer": "https://drive.google.com/uc?id=152eILE6K71avDd5csgtm4mGkrVS8RDxF"
    }
]
```
