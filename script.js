function startJourney(){

    document.querySelector(".hero").style.display="none";

    document.getElementById("gallery").style.display="grid";

    document.getElementById("music").play();

}

setInterval(()=>{

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (Math.random()*20+15)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

},500);
window.onload = () => {

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2500);

};

function openLetter(){

const letter =
document.getElementById("letter");

if(letter.style.display==="block"){

letter.style.display="none";

}else{

letter.style.display="block";

}

}

const music =
document.getElementById("music");

const btn =
document.getElementById("musicBtn");

btn.addEventListener("click",()=>{

if(music.paused){

music.play();

}else{

music.pause();

}

});
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});
for(let i=0;i<100;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.width=Math.random()*3+"px";
    star.style.height=star.style.width;

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=
    Math.random()*5+"s";

    document.getElementById("stars")
    .appendChild(star);
}
const videos = [

{
file:"videos/1.mp4",
date:"Day 50",
caption:"Our first special video ❤️"
},

{
file:"videos/2.mp4",
date:"Day 120",
caption:"One of my favorite moments ❤️"
},

{
file:"videos/3.mp4",
date:"Day 300",
caption:"A memory I'll never forget ❤️"
}

];

let currentVideo = 0;

function updateVideo(){

const player =
document.getElementById("storyVideo");

player.src =
videos[currentVideo].file;

document.getElementById("videoDate")
.innerText =
videos[currentVideo].date;

document.getElementById("videoCaption")
.innerText =
videos[currentVideo].caption;

player.load();

}

function nextVideo(){

currentVideo++;

if(currentVideo >= videos.length){

currentVideo = 0;

}

updateVideo();

}

function prevVideo(){

currentVideo--;

if(currentVideo < 0){

currentVideo =
videos.length - 1;

}

updateVideo();

}