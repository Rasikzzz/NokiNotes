const audio = document.getElementById("audio");
const lyricsBox = document.getElementById("lyrics");
const playBtn = document.getElementById("play-btn");
const recordDot = document.getElementById("record-dot");

let currentIndex = 0;
let playing = false;

const lyrics = [
  { time: 0.14, text: "Who's callin' my phone?" },
  { time: 1.04, text: "Who's callin' that ****?" },
  { time: 2.02, text: "Who's callin' my, callin' my, callin' my?" },
  { time: 2.99, text: "Who's callin' that ****?" },
  { time: 3.95, text: "Who's callin' my phone?" },
  { time: 4.94, text: "Who's callin' that ****?" },
  { time: 5.81, text: "Who's callin' my phone?" },
  { time: 6.80, text: "Who's callin' that ****?" },
  { time: 7.73, text: "Who's callin' my phone?" },
  { time: 8.65, text: "Who? Who?" },
  { time: 9.68, text: "Who's callin' my phone?" },
  { time: 10.61, text: "Who? Who?" },
  { time: 11.59, text: "Who's callin' my phone?" },
  { time: 12.03, text: "Yeah, yeah" },
  { time: 13.48, text: "Who's callin' my phone?" },
  { time: 13.68, text: "OVO Sound, 2025" },
  { time: 15.39, text: "Who's callin' my phone?" },
  { time: 16.38, text: "Who's callin' that ****?" },
  { time: 17.28, text: "Who's callin' my phone?" },
  { time: 18.49, text: "Is it Stacy?" },
  { time: 19.28, text: "Who's callin' my phone?" },
  { time: 20.38, text: "Is it Becky?" },
  { time: 21.09, text: "Who's callin' my phone?" },
  { time: 22.29, text: "Is it Keisha?" },
  { time: 22.99, text: "Who's callin' my phone?" },
  { time: 24.19, text: "Is it Ellie?" },
  { time: 24.86, text: "Who's callin' my phone?" },
  { time: 26.09, text: "Was it Dani?" },
  { time: 26.78, text: "Who's callin' my phone?" },
  { time: 27.99, text: "Is it PARTY?" },
  { time: 28.72, text: "Who's callin' my phone?" },
  { time: 29.90, text: "Where's the function?" },
  { time: 31.06, text: "Where the **** the function?" },
  { time: 31.70, text: "Send the addy" },
  { time: 33.00, text: "Where the **** the function?" },
  { time: 34.08, text: "The way I feel right now, I feel like we need to be all alone" },
  { time: 38.36, text: "So if you just playin' around, you need to tell your girl, \"Take your fine **** home,\" and that's real" },
  { time: 42.46, text: "Stop teasin' me, yeah, what? Stop teasin' me" },
  { time: 45.44, text: "I could change your life so easily" },
  { time: 47.16, text: "I keep beggin' you to stay, but you're leavin' me" },
  { time: 50.39, text: "Leavin' me, we got sticks in the club illegally" },
  { time: 53.07, text: "Got the whole 6ix Side, they believe in me" },
  { time: 54.78, text: "We got members east of the DVP" },
  { time: 56.67, text: "We got members west on the 401" },
  { time: 58.67, text: "We had a lock on the game, but it's more to come" },
  { time: 60.58, text: "You gotta pop that **** till the morning come" },
  { time: 62.42, text: "You want shots for the girls? Then order some" },
  { time: 64.90, text: "Who's callin' my phone?" },
  { time: 65.87, text: "Who's callin' it?" },
  { time: 66.74, text: "Who's callin' my, callin' my, callin' my?" },
  { time: 67.70, text: "Who's callin' that ****?" },
  { time: 68.72, text: "Who's callin' my phone?" },
  { time: 69.63, text: "Who's callin' that ****?" },
  { time: 70.60, text: "Who's callin' my phone?" },
  { time: 71.59, text: "Who's callin' that ****?" },
  { time: 72.46, text: "Who's callin' my phone?" },
  { time: 73.50, text: "Who? Who?" },
  { time: 74.37, text: "Who's callin' my phone?" },
  { time: 75.37, text: "Who? Who?" },
  { time: 76.35, text: "Who's callin' my phone?" },
  { time: 77.29, text: "Who? Who?" },
  { time: 78.16, text: "Who's callin' my—" },
  { time: 79.19, text: "Aye" },
  { time: 79.44, text: "Is it Stacy?" },
  { time: 80.17, text: "Who's callin' my phone?" },
  { time: 81.31, text: "Is it Becky?" },
  { time: 82.10, text: "Who's callin' my phone?" },
  { time: 83.17, text: "Is it Keisha?" },
  { time: 84.02, text: "Who's callin' my phone?" },
  { time: 85.16, text: "Is it Ashley?" },
  { time: 85.92, text: "Who's callin' my phone?" },
  { time: 87.06, text: "Was it Dani?" },
  { time: 87.72, text: "Who's callin' my phone?" },
  { time: 88.96, text: "Is it PARTY?" },
  { time: 89.63, text: "Who's callin' my phone?" },
  { time: 90.85, text: "Where's the function?" },
  { time: 91.62, text: "Who's callin' my phone?" },
  { time: 91.98, text: "Where the **** the function?" },
  { time: 92.70, text: "Send the addy" },
  { time: 93.50, text: "Who's callin' my phone?" },
  { time: 93.91, text: "Where the **** the function?" },
  { time: 94.80, text: "Baby girl" },
  { time: 99.33, text: "Baby girl" },
  { time: 103.84, text: "Baby girl" },
  { time: 113.55, text: "Baby girl" },
  { time: 114.65, text: "Let me see you do your dance, let me see you twirl" },
  { time: 116.87, text: "Shakin' **** in the club with your homegirls" },
  { time: 119.21, text: "Take a pic for the 'Gram, show the whole world, yeah" },
  { time: 122.42, text: "Is that your bestie?" },
  { time: 123.71, text: "I'ma ice both of y'all like Gretzky" },
  { time: 126.01, text: "I'ma at you like bless me" },
  { time: 128.23, text: "Hit the dance floor, get nasty, impress me" },
  { time: 131.63, text: "Baby girl" },
  { time: 132.82, text: "Let me see you do your dance, let me see you twirl" },
  { time: 135.01, text: "Shakin' **** in the club with your homegirls" },
  { time: 137.32, text: "Take a pic for the 'Gram, show the whole world, yeah" },
  { time: 140.52, text: "Is that your bestie?" },
  { time: 141.88, text: "I'ma ice both of y'all like Gretzky" },
  { time: 144.10, text: "I'ma at you like bless me" },
  { time: 146.42, text: "Hit the dance floor, get nasty, impress me" },
  { time: 149.72, text: "Aye, how many **** in this club?" },
  { time: 152.02, text: "Is it just me and you, my love?" },
  { time: 154.27, text: "I don't mean to call you no ****" },
  { time: 156.06, text: "I just heard about the things that you do, my love" },
  { time: 158.21, text: "And you're just like me, if it's true, my love, aye" },
  { time: 161.12, text: "You could see right through my love, aye" },
  { time: 163.42, text: "I see your waist shrunk, my love, aye" },
  { time: 165.51, text: "You got some bass in the trunk, my love, damn" },
  { time: 168.30, text: "How many **** in this club?" },
  { time: 170.15, text: "Is it really just me, my love?" },
  { time: 172.23, text: "You know my dadnem pimpin' for real" },
  { time: 174.07, text: "You ever been down to Memphis, Tennessee, my love? Uh" },
  { time: 176.90, text: "I ain't sayin' I agree, my love" },
  { time: 178.63, text: "I'm just tellin' you the things that I seen, my love" },
  { time: 180.82, text: "I got drinks, jokes, sex, and cash" },
  { time: 183.19, text: "Those are four things I can guarantee, my love, aye" },
  { time: 185.93, text: "Baby girl" },
  { time: 187.12, text: "Let me see you do your dance, let me see you twirl" },
  { time: 189.38, text: "Shakin' **** in the club with your homegirls" },
  { time: 191.63, text: "Take a pic for the 'Gram, show the whole world, yeah" },
  { time: 194.90, text: "Is that your bestie?" },
  { time: 196.20, text: "I'ma ice both of y'all like Gretzky" },
  { time: 198.42, text: "I'ma at you like bless me" },
  { time: 200.71, text: "Hit the dance floor, get nasty, impress me" },
  { time: 204.01, text: "Baby girl" },
  { time: 205.21, text: "Let me see you do your dance, let me see you twirl" },
  { time: 207.47, text: "Shakin' **** in the club with your homegirls" },
  { time: 209.72, text: "Take a pic for the 'Gram, show the whole world, yeah" },
  { time: 212.98, text: "Is that your bestie?" },
  { time: 214.35, text: "I'ma ice both of y'all like Gretzky" },
  { time: 216.51, text: "I'ma at you like bless me" },
  { time: 218.82, text: "Hit the dance floor, get nasty, impress me" }
];


/* PLAY BUTTON */
playBtn.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    playing = true;
    playBtn.textContent = "❚❚";
    recordDot.classList.add("blink");
  } else {
    audio.pause();
    playing = false;
    playBtn.textContent = "▶";
    recordDot.classList.remove("blink");
  }
});

/* SYNC LYRICS */
audio.addEventListener("timeupdate", () => {
  if (
    currentIndex < lyrics.length - 1 &&
    audio.currentTime >= lyrics[currentIndex + 1].time
  ) {
    currentIndex++;
    lyricsBox.textContent = lyrics[currentIndex].text;
  }
});

/* RESET */
audio.addEventListener("ended", () => {
  playing = false;
  currentIndex = 0;
  playBtn.textContent = "▶";
  recordDot.classList.remove("blink");
  lyricsBox.textContent = "Press Play";
});

const progress = document.getElementById('progress');

audio.addEventListener('timeupdate', () => {
  // update lyrics (existing code)
  if (currentIndex < lyrics.length - 1 && audio.currentTime >= lyrics[currentIndex + 1].time) {
    currentIndex++;
    lyricsBox.textContent = lyrics[currentIndex].text;
  }

  // update progress bar
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
});


