import OD from '../components/OD'

export const Projects = {
  "tetris_ai": {
    "name": "Tetris AI",
    "image": "/img/work/Tetris_ai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_Tetris",
    "content":[
      <p>Tetris is a well-know 80's game from nintendo. It's a classical game that still popular till this day. Since I'm not a good Tetris player, I have had an Idea that It would be great if I have created some AI that could play this game for me</p>,
      <p>First of I started coding this game with python useing a library called pygame. Hours of coding and debugging passed by. FInaly I have created this game</p>,
      <p>I coded a generic algorithm which determind how each position score is. Factoring Aggrigation height, Holes, and line clear</p>,
      <p>Aggregation height is calculated by block in each row times its height. e.g. 5 block in line 1 and 2 block in line 2 would have a penalty of 9</p>,
      <p>After applying generic algorithm, I use a neural network called NEAT in my game.</p>,
      <p>By using process of elimination where genome with best performance get to stay alive and be a mother genome of the next generation, This AI performed quite well in the first 10 line. After that the AI just place block randomly</p>,
      
    ]
  },
  "flappybird_ai": {
    "name": "Flappybird AI",
    "image": "/img/work/flappybird.jpg",
    "source": "https://github.com/Retaehc-pop/Flappybird-Al",
    "content": [
      <p>Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company .Gears. The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them. </p>,
      <p>I coded this game with python using library called pygame. After I finished my game, NEAT. a neural network model is used in my project bu passing three input which is height of bird to the top-pipe,height of bird to the bottom-pipe, and distance from bird to the pipe </p>,
      <p>Each generation have a population of 50, and not long after that, around 3-4 generation this AI is unstopable</p>,
      <p>I would say that this AI could improve more when dealing with different game speed but overall. I rated this a 10/10</p>,
    ]
  },
  "Retaehc_Bot": {
    "name": "Retaehc_Bot",
    "image": "/img/work/rtbot.png",
    "source": "https://github.com/Retaehc-pop/Retaehc_BOT",
    "content": [
      <p>Discord is a very popular application amoung my friends. We use it quite often to communicate while gaming and studying. Since I use this application a lot I start interested to create a bot of my own</p>,
      <p>This Discord bot was created using python and a help from Discord.py which is a discord API library</p>,
      <h5>Admin:</h5>,
      <p><code>status</code> Server status</p>,
      <h6>Basic:</h6>,
      <p><code>invite</code> Creates an invite link to the channel</p>,
      <p><code>owo</code> Change to owo text</p>,
      <p><code>ping</code> Respond PONG</p>,
      <p><code>poke</code> POKE SOMEONE</p>,
      <p><code>reminder</code> Set reminder (time d.h.m.s or dd:mm:yy:hh:mm:ss) (reminder)</p>,
      <p><code>time</code> Display time</p>,
      <p><code>users</code> Display user in this server</p>,
      <h6>Channel:</h6>,
      <p><code>mk</code> make channel c,t,v,n [name]</p>,
      <p><code>rm</code> remove category or channel [name] [category]</p>,
      <h6>Gamble:</h6>,
      <p><code>coin</code> Heads or Tails</p>,
      <p><code>dice</code> Random number between 1 and 6</p>,
      <p><code>randint</code> Give a random number between [start] and [stop]</p>,
      <h6>Games:</h6>,
      <p><code>guess</code> User need to guess from 1 - 10</p>,
      <p><code>hangman</code> Play hangman</p>,
      <p><code>rps</code> Play Rock Paper Scissors</p>,
      <h6>Images:</h6>,
      <p><code>cat</code> Random picture of a meow</p>,
      <p><code>dog</code> Random picture of a woof</p>,
      <p><code>fox</code> Random picture of a floofy</p>,
      <p><code>reddit</code> Get a random picture from given category [category]</p>,
      <h6>Music:</h6>,
      <p><code>clear</code> Deletes entire queue of upcoming songs.</p>,
      <p><code>join</code> Connect to voice.</p>,
      <p><code>leave</code>Stop the currently playing song and destroy the player.</p>,
      <p><code>np</code> Display information about the currently playing song.</p>,
      <p><code>pause</code> Pause the currently playing song.</p>,
      <p><code>play</code> Request a song and add it to the queue.</p>,
      <p><code>queue</code> Retrieve a basic queue of upcoming songs.</p>,
      <p><code>remove</code> Removes specified song from queue</p>,
      <p><code>resume</code> Resume the currently paused song.</p>,
      <p><code>skip</code> Skip the song.</p>,
      <p><code>volume</code> Change the player volume.</p>,
      <h6>NSFW:</h6>,
      <p><code>insult</code> yo mama (member)</p>,
      <h6>No Category:</h6>,
      <p><code>help</code> Shows this message</p>,
      <p><code>setrole</code> create embed which can self assigned role to each person</p>,
    ]
  },
  "Pong": {
    "name": "Ping Pong",
    "image": "/img/work/pong.jpg",
    "source": "https://github.com/Retaehc-pop/Pygame_Pingpong",
    "content":[
      <p>Ping pong is a classical game and a easy one to play</p>,
      <p>The rules is simple, just make the ball slip through opponents gate and you score a point</p>,
      <p>I code this game with python and pygame</p>,

    ]
  },
  "krub_cafe": {
    "name": "Krub cafe",
    "image": "/img/work/krubcafe.png",
    "source": "https://github.com/Retaehc-pop/Krub-cafe-Cashier-app",
    "content":[
      <p>My High school, Assumption College, started a club called Krub cafe. It is a start-up model where students can learn how to do buisness. I was one of the first few people who apply for this club.</p>,
      <p>At first, I attended as a Barista, creating recipe for this shop and measure each ingredient. After a while more student start joining this club and I thought it would be interesting to have a cashier app to handel all the money we've made.</p>,
      <p>This Application design to be simple and easy to use. It was created with Tkinter in python. This application turnout pretty useful and is being use by the entire duration of this club</p>,
    ]
  },
  "Profile": {
    "name": "Retaehc Profile",
    "image": "/img/work/retaehcweb.png",
    "source": "https://github.com/Retaehc-pop/react_portfolio",
    "content":[
      <p>This is one of my very first time creating a website of my own to represent who I am.</p>,
      <p>This website is created by react!</p>,
    ]
  },
  "Foodbuster": {
    "name": "Foodbuster",
    "image": "/img/work/Foodbuster.png",
    "source": "https://github.com/Food-Busters",
    "content":[
      <p>Hackaton is one of many young programmer dream event to participate. My friends and I started this project by forming a team and create an innovation buisness under a topic of Air pollution. Usually, when people thik of air pollution they this of cars, combusion, factory, etc. My team wanted to stand out and pick a topic which falls to waste food management</p>,
      <p>As an AI developer in this team, I had created a AI useing a tensorflow zoo model which is a classification model. Then I was able to fine tune it to the right about which it can detect which food it is in the mobile application.</p>,
      <p>This AI can be improve useing feature extraction to classified more food with lesser memory use in the processor, I also want this model to be able to detect how much food was left after the eating is done. Calculating the carbon footprint created by the food and convince more people to take the right amount for their plate</p>,
      <img src="/img/work/Foodbuster_present.png" alt='presentation'/>,
      <img src="/img/work/Foodbuster_certificate.jpg" alt='presentation'/>
    ]
  },
  "Sporos": {
    "name": "Sporos",
    "image": "/img/work/sporos.jpg",
    "source": "https://github.com/Retaehc-pop/US-cansat",
    "content":[

    ]
  },
  "ChessAI": {
    "name": "ChessAI",
    "image": "/img/work/chessai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_ChessEngine",
    "content":[

    ]
  },
  "AlienSat": {
    "name": "AlienSat",
    "image": "/img/work/alien.jpeg",
    "source": "https://github.com/Retaehc-pop/Thailand-cansat",
    "content":[

    ]
  },
  "SpaceAC": {
    "name": "SpaceAC",
    "image": "/img/work/spaceac.png",
    "source": "https://github.com/Retaehc-pop/SpaceAc_tools",
    "content":[

    ]
  },
  "DinoAI": {
    "name": "DinoAI",
    "image": "/img/work/dinoai.png",
    "source": "https://github.com/Retaehc-pop/Pygame_dino",
    "content":[

    ]
  },
  "PSG1": {
    "name": "PSG1",
    "image": "/img/work/passenger1.png",
    "source": "https://github.com/Retaehc-pop/PSG-I",
    "content":[

    ]
  },
  "PSG2": {
    "name": "PSG2",
    "image": "/img/work/passenger2.png",
    "source": "https://github.com/Retaehc-pop/PSG-I",
    "content":[

    ]
  },
  "PSG3": {
    "name": "PSG3",
    "image": "/img/work/passenger3.png",
    "source": "https://github.com/Retaehc-pop/PSG-I",
    "content":[

    ]
  },
  "TFOD": {
    "name": "TFOD",
    "image": "/img/TFOD.jpg",
    "source": "https://github.com/Retaehc-pop/Django_Reminder",
    "type": false,
    "link": "https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json",
    "content": [
      <OD link="https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json" box={4} cls={5} score={6} 
      label={
        {"1": { "name": "ThumbsUp", "color": "red" },
        "2": { "name": "ThumbsDown", "color": "yellow" },
        "3": { "name": "ThankYou", "color": "lime" },
        "4": { "name": "LiveLong", "color": "blue" }}} />,
    ]
  },
  "Reminder": {
    "name": "Reminder",
    "image": "/img/work/django.png",
    "source": "https://github.com/Retaehc-pop/Django_Reminder"
  }
};
