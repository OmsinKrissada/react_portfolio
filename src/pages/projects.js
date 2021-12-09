import OD from '../components/OD'

export const Projects = {
  "Sporos": {
    "name": "Sporos",
    "image": "/img/work/sporos/sporoscover.jpg",
    "bg": "/img/work/sporos/sporosbg.jpg",
    "source": "https://github.com/Retaehc-pop/US-cansat",
    "content":[
      <p>Role: Programmer</p>,
      <p>&emsp;&emsp;CanSat Competition hosted by AIAA was the most challenging aspect in my life. SPACE AC has formed a team call SPOROS including me and my four other friends. This competition is about desinging an auto rotationg payload which can be deploy without parachute. The container also able to relay data from science payload to the ground station. There are 4 round in this competition. It was all reall hard and challenging considered that we are all just a high-school student that has to compete against undergrads.</p>,
      <h2>My Team</h2>,
      <p style={{textAlign: "center"}}>left to right; James, Ping, Peace, Pop(me), Gino</p>,
      <img src="/img/work/sporos/team.jpg" alt=""/>,
      <h2>PDR 97.76% </h2>,
      <img src="/img/work/sporos/pdr.jpg" alt=""/>,
      <h2>CDR 97.86%</h2>,
      <img src="/img/work/sporos/cdr.jpg" alt=""/>,
      <h2>Environmental test</h2>,
      <img src="/img/work/sporos/env.jpg" alt=""/>,
      <h2 style={{textAlign: "center"}}>Demonstration 100% #1st </h2>,
      <h2 style={{textAlign: "center"}}> We won overall score #3rd place!!</h2>,
      <img src="/img/work/sporos/demonstration.jpg" alt=""/>,
      <h2 style={{textAlign: "center"}}>TNN reporting our placement in the news : <a style={{color: 'white'}}href="https://www.youtube.com/watch?v=SsPL1c-oBug&t=64s">link</a></h2>,
      <img src="/img/work/sporos/news.jpg" alt=""/>,
    ]
  },
  "tetris_ai": {
    "name": "Tetris AI",
    "image": "/img/work/Tetris_ai.png",
    "bg": "/img/work/Tetris_ai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_Tetris",
    "content":[
      <p>Role: Owner</p>,
      <p>&emsp;&emsp;Tetris is a well-know 80's game from nintendo. It's a classical game that still popular till this day. Since I'm not a good Tetris player, I have had an Idea that It would be great if I have created some AI that could play this game for me.First of I started coding this game with python useing a library called pygame. Hours of coding and debugging passed by. FInaly I have created this game I coded a generic algorithm which determind how each position score is. Factoring Aggrigation height, Holes, and line clear. Aggregation height is calculated by block in each row times its height. e.g. 5 block in line 1 and 2 block in line 2 would have a penalty of 9. After applying generic algorithm, I use a neural network called NEAT in my game.By using process of elimination where genome with best performance get to stay alive and be a mother genome of the next generation, This AI performed quite well in the first 10 line. After that the AI just place block randomly</p>  ]
  },
  "flappybird_ai": {
    "name": "Flappybird AI",
    "image": "/img/work/flappybird.jpg",
    "bg": "/img/work/flappybird.jpg",
    "source": "https://github.com/Retaehc-pop/Flappybird-Al",
    "content": [
      <p>Role: Owner</p>,
      <p>&emsp;&emsp;Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company .Gears. The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.I coded this game with python using library called pygame. After I finished my game, NEAT. a neural network model is used in my project bu passing three input which is height of bird to the top-pipe,height of bird to the bottom-pipe, and distance from bird to the pipe. Each generation have a population of 50, and not long after that, around 3-4 generation this AI is unstopable. I would say that this AI could improve more when dealing with different game speed but overall. I rated this a 10/10</p>,
    ]
  },
  "Retaehc_Bot": {
    "name": "Retaehc Bot",
    "image": "/img/work/rtbot/rtbot.png",
    "bg": "/img/work/rtbot/rtbot.png",
    "source": "https://github.com/Retaehc-pop/Retaehc_BOT",
    "content": [
      <p>Role: Owner</p>,
      <p>&emsp;Discord is a very popular application amoung my friends. We use it quite often to communicate while gaming and studying. Since I use this application a lot I start interested to create a bot of my own. This Discord bot was created using python and a help from Discord.py which is a discord API library.</p>,
      <div>
      <img style={{objectFit: 'contain'}} alt="" src="/img/work/rtbot/bot.png"/>
      <div>
      <h3>Admin:</h3>
      <p><code>status</code> Server status</p>
      <h3>Basic:</h3>
      <p><code>invite</code> Creates an invite link to the channel</p>
      <p><code>owo</code> Change to owo text</p>
      <p><code>ping</code> Respond PONG</p>
      <p><code>poke</code> POKE SOMEONE</p>
      <p><code>reminder</code> Set reminder (time d.h.m.s or dd:mm:yy:hh:mm:ss) (reminder)</p>
      <p><code>time</code> Display time</p>
      <p><code>users</code> Display user in this server</p>
      <h3>Channel:</h3>
      <p><code>mk</code> make channel c,t,v,n [name]</p>
      <p><code>rm</code> remove category or channel [name] [category]</p>
      <h3>Gamble:</h3>
      <p><code>coin</code> Heads or Tails</p>
      <p><code>dice</code> Random number between 1 and 6</p>
      <p><code>randint</code> Give a random number between [start] and [stop]</p>
      <h3>Games:</h3>
      <p><code>guess</code> User need to guess from 1 - 10</p>
      <p><code>hangman</code> Play hangman</p>
      <p><code>rps</code> Play Rock Paper Scissors</p>
      <h3>Images:</h3>
      <p><code>cat</code> Random picture of a meow</p>
      <p><code>dog</code> Random picture of a woof</p>
      <p><code>fox</code> Random picture of a floofy</p>
      <p><code>reddit</code> Get a random picture from given category [category]</p>
      <h3>Music:</h3>
      <p><code>clear</code> Deletes entire queue of upcoming songs.</p>
      <p><code>join</code> Connect to voice.</p>
      <p><code>leave</code>Stop the currently playing song and destroy the player.</p>
      <p><code>np</code> Display information about the currently playing song.</p>
      <p><code>pause</code> Pause the currently playing song.</p>
      <p><code>play</code> Request a song and add it to the queue.</p>
      <p><code>queue</code> Retrieve a basic queue of upcoming songs.</p>
      <p><code>remove</code> Removes specified song from queue</p>
      <p><code>resume</code> Resume the currently paused song.</p>
      <p><code>skip</code> Skip the song.</p>
      <p><code>volume</code> Change the player volume.</p>
      <h3>NSFW:</h3>
      <p><code>insult</code> yo mama (member)</p>
      <h3>No Category:</h3>
      <p><code>help</code> Shows this message</p>
      <p><code>setrole</code> create embed which can self assigned role to each person</p>
      </div>
      </div>
    ]
  },
  "Pong": {
    "name": "Ping Pong",
    "image": "/img/work/pong.jpg",
    "bg": "/img/work/pong.jpg",
    "source": "https://github.com/Retaehc-pop/Pygame_Pingpong",
    "content":[
      <p>Role: Owner</p>,
      <p>&emsp;&emsp;Ping pong is a classical game and a easy one to play. The rules is simple, just make the ball slip through opponents gate and you score a point. I code this game with python and pygame</p>,

    ]
  },
  "krub_cafe": {
    "name": "Krub cafe",
    "image": "/img/work/krubcafe.png",
    "bg": "/img/work/krubcafe.png",
    "source": "https://github.com/Retaehc-pop/Krub-cafe-Cashier-app",
    "content":[
      <p>Role: Programmer</p>,
      <p>&emsp;&emsp;My High school, Assumption College, started a club called Krub cafe. It is a start-up model where students can learn how to do buisness. I was one of the first few people who apply for this club.At first, I attended as a Barista, creating recipe for this shop and measure each ingredient. After a while more student start joining this club and I thought it would be interesting to have a cashier app to handel all the money we've made.This Application design to be simple and easy to use. It was created with Tkinter in python. This application turnout pretty useful and is being use by the entire duration of this club</p>,
    ]
  },
  "Profile": {
    "name": "Retaehc Profile",
    "image": "/img/work/retaehcweb.png",
    "bg": "/img/work/retaehcweb.png",
    "source": "https://github.com/Retaehc-pop/react_portfolio",
    "content":[
      <p>Role: Owner</p>,
      <p>This is one of my very first time creating a website of my own to represent who I am.</p>,
      <h2>This website is created by react!</h2>,
    ]
  },
  "Foodbuster": {
    "name": "Food Buster",
    "image": "/img/work/Foodbuster/Foodbuster.png",
    "source": "https://github.com/Food-Busters",
    "bg": "/img/work/Foodbuster/poster.png",
    "content":[
      <p>Role: AI developer</p>,
      <p>&emsp;&emsp;Hackaton is one of many young programmer dream event to participate. My friends and I started this project by forming a team and create an innovation buisness under a topic of Air pollution. Usually, when people thik of air pollution they this of cars, combusion, factory, etc. My team wanted to stand out and pick a topic which falls to waste food management. As an AI developer in this team, I had created a AI useing a tensorflow zoo model which is a classification model. Then I was able to fine tune it to the right about which it can detect which food it is in the mobile application. This AI can be improve useing feature extraction to classified more food with lesser memory use in the processor, I also want this model to be able to detect how much food was left after the eating is done. Calculating the carbon footprint created by the food and convince more people to take the right amount for their plate</p>,
      <img src="/img/work/Foodbuster/Foodbuster_present.png" alt='presentation'/>,
      <p>&emsp;&emsp;It was a very fun and interesting event for me. I get to learn how to start makeing Innovation to save the world. Many amazing and hard working people have come to this competition to win the tital of Hackaton champion. Unfortunately for us, we only want to the final round which has only 20 teams left. There is only one winner in this competition sadly for us we cant win. but it was a great experience for my team.</p>,
      <img src="/img/work/Foodbuster/Foodbuster_certificate.jpg" alt='presentation'/>
    ]
  },
  "AlienSat": {
    "name": "AlienSat",
    "image": "/img/work/alien/alien.jpeg",
    "bg": "/img/work/alien/alien.jpeg",
    "source": "https://github.com/Retaehc-pop/Thailand-cansat",
    "content":[
      <p>Role: Programmer</p>,
      <h2>A cansat design to analyze the particulate matter with a thermal camera</h2>,
      <h2>Under development</h2>,

    ]
  },
  "ChessAI": {
    "name": "ChessAI",
    "image": "/img/work/chessai.png",
    "bg": "/img/work/chessai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_ChessEngine",
    "content":[
      <p>Role: Owner</p>,
    ]
  },
  "SpaceAC": {
    "name": "SpaceAC",
    "image": "/img/work/spaceac.png",
    "bg": "/img/work/spaceac.png",
    "source": "https://github.com/SPACE-AC",
    "content":[
      <p>Role: Vice president, Programmer, Treaserur</p>,

    ]
  },
  "DinoAI": {
    "name": "DinoAI",
    "image": "/img/work/dinoai.png",
    "bg": "/img/work/dinoai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_dino",
    "content":[
      <p>Role: Owner</p>,
    ]
  },
  "PSG": {
    "name": "Passenger",
    "image": "/img/work/PSG/passenger.png",
    "bg": "/img/work/PSG/psg1.jpg",
    "source": "https://github.com/Retaehc-pop/PSG-I",
    "content":[
    <p>Role: Programmer</p>,
    <div style={{display: "flex",flexDirection: "row",padding:"3rem"}}>
      <img src="/img/work/PSG/passenger1.png" alt="" style={{width: "30vmin",margin:"0rem 2rem"}}/>
      <img src="/img/work/PSG/passenger2.png" alt="" style={{width: "30vmin",margin:"0rem 2rem"}}/>
      <img src="/img/work/PSG/passenger3.png" alt="" style={{width: "30vmin",margin:"0rem 2rem"}}/>
    </div>,
    <h3>Exploring the Startosphere with high-altitude balloon using a cubesat.</h3>,
    <img src="/img/work/PSG/psg1.jpg" alt="" style={{width: "90vmin",margin:"1rem"}}/>,
    <img src="/img/work/PSG/psg2.jpg" alt="" style={{width: "90vmin",margin:"1rem"}}/>,
    <img src="/img/work/PSG/psg3.jpg" alt="" style={{width: "90vmin",margin:"1rem"}}/>,
    <img src="/img/work/PSG/psg4.jpg" alt="" style={{width: "90vmin",margin:"1rem"}}/>,

    ]
  },
  "TFOD": {
    "name": "TFOD",
    "image": "/img/TFOD.jpg",
    "bg": "/img/TFOD.jpg",
    "source": "https://github.com/Retaehc-pop/Django_Reminder",
    "content": [
      <p>Role: Owner</p>,
      <OD link="https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json" box={4} cls={5} score={6} 
      label={
        {"1": { "name": "ThumbsUp", "color": "red" },
        "2": { "name": "ThumbsDown", "color": "yellow" },
        "3": { "name": "ThankYou", "color": "lime" },
        "4": { "name": "LiveLong", "color": "blue" }}} />,
      <h2>This can detect finger</h2>
    ]
  },
  "Reminder": {
    "name": "Reminder",
    "image": "/img/work/django.png",
    "bg": "/img/work/django.png",
    "source": "https://github.com/Retaehc-pop/Django_Reminder",
    "content":[

    ],
  }
};
