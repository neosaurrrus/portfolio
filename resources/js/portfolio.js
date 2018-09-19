//global variables
let textOnLeft = true;
let projectHTML = [];
let originHTML = [];
let skillY = 0;
let backgroundX = 0;
const projectArray = [];
const originArray = [];

//defining selectors
const meNav = document.querySelector(".meLink");
const nav = document.querySelector("nav");
const projectsNav = document.querySelector(".projectsLink");
const originNav = document.querySelector(".originLink");
const body = document.querySelector("body")
const header = document.querySelector(".header");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const hero3 = document.querySelector(".hero3");
const me = document.querySelector(".me-parent");
const projects = document.querySelector(".projects-parent");
const origin = document.querySelector(".origin-parent");
const skillsScroll = document.querySelector(".skills-slider");
const title = document.querySelector(".title")

//Function to change colours and revert Scroll to the top
function colorSwitch(x, background, darkbackground, highlight) {
    header.style.setProperty('background-position-x', x + '%');
    body.style.setProperty('--background', background);
    body.style.setProperty('--darkbackground', darkbackground);
    body.style.setProperty('--highlight', highlight);
    document.documentElement.scrollTop = 0; 
};
//shift the backgrounds accordingly
function backgroundSwitch(oneLeft, twoLeft, threeLeft){
    hero1.style.setProperty('left', oneLeft);
    hero2.style.setProperty('left', twoLeft);   
    hero3.style.setProperty('left',  threeLeft);
}


// Passing parameters via add event listener
meNav.addEventListener("click", function () {
    colorSwitch(0, "rgb(44,130,89)", "rgb(30,79,54)", "rgb(255, 240, 100")
    backgroundSwitch("0%", "100%", "200%");
    title.innerHTML = "web_designer";
    me.style.setProperty('display', 'block');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'none');
    const highlightShape = this.getBoundingClientRect();
    highlight.style.setProperty('width', `${highlightShape.width}px`);
    highlight.style.setProperty('left', `${highlightShape.left}px`);
});
projectsNav.addEventListener("click", function () {
    colorSwitch(50, "rgb(189,59,4)", "rgb(79,51,30)", "rgb(255, 240, 60");
    backgroundSwitch("-100%", "0%", "100%");
    title.innerHTML = "web_developer";
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'block');
    origin.style.setProperty('display', 'none');
    const highlightShape = this.getBoundingClientRect();
    highlight.style.setProperty('width', `${highlightShape.width}px`);
    highlight.style.setProperty('left', `${highlightShape.left}px`);

    
});
originNav.addEventListener("click", function () {
    colorSwitch(100, "rgb(0,53,133)", "rgb(0,30,50)", "rgb(255,240,30)")
    backgroundSwitch("-200%", "-100%", "0%");
    title.innerHTML = "web_student";
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'block');
    const highlightShape = this.getBoundingClientRect();
    highlight.style.setProperty('width', `${highlightShape.width}px`);
    highlight.style.setProperty('left', `${highlightShape.left}px`);
});

//slider timer - changes the skills display every 5 seconds.
setInterval(function () {
    skillY -= 250;
    skillsScroll.style.setProperty('background-position-y', skillY + 'px')
}, 5000);

//defining constructors
function Project(title, text, sidePic, codeLink){
    this.title = title,
    this.text = text,
    this.sidePic = sidePic,
    this.codeLink = codeLink;
}
function Origin(title, text, sidePic, codeLink) {
    this.title = title,
    this.text = text,
    this.sidePic = sidePic,
    this.codeLink = codeLink;
}
//function to build the relevent story in HTML
function addContent(title, text, sidepic, codeLink, isLeft) {
    if (isLeft === true) {
        return `<div class="section">
            <div class="leftbox textbox">
                <h3>${title}</h3>
                <p>${text}</p>
            </div>
            <div class="sidebox"><a href="${codeLink}"><img class="sidepic" src="${sidepic}"></a></div>
        </div>
        `
    } else return `<div class="section">
            <div class="sidebox"><a href="${codeLink}"><img class="sidepic" src="${sidepic}"></a></div>
            <div class="rightbox textbox">
               <h3>${title}</h3>
                <p>${text}</p>
            </div>
            </div>`
}
//build the Project items
function projectBuild(){
    projectArray.push(new Project("Some of my finish projects" , "This is text", "../images/js.png", "https://github.com"))
    projectArray.push(new Project("Kangdemic", "A clone of a popular board game. This is the project I started as I started to learn web development. It is here purely as a sign not to give up! Purely front-end, it uses HTML, CSS and JS and a library called dragScroll.JS", "../images/js.png", "https://github.com"))
    projectArray.push(new Project("Hikr", "A web application that shows good walking locations in the UK", "../images/js.png", "https://github.com"))
    projectArray.push(new Project("To be announced!", "A project that has yet to be disclosed... or possibly made", "/resources/origin1.png", "https://github.com"))
};

//build the origin items
function originBuild() {
    originArray.push(new Origin(
        'How on earth did I get here?', 
        "This is a collection of little things written as part of my learning in roughly cronological order. I haven't changed a single line of code, no matter how much I cringe now!", 
        "../images/origin1.jpg",
        "https://github.com"
    ))
    originArray.push(new Origin(
        `#1 - Hello world, here is a simple blog layout`,
        `Dabbled with HTML, CSS and Javascript for a decent chunk of my early career, but at some I realised I kinda liked making stuff with code, and perhaps I'd like it more if I actually knew what I was doing. Much of my early attempts have been lost to time but this is an early go with HTML and CSS: a rather strange blog layout`,
        `resources/images/origin1.jpg`,
        "https://neosaurrrus.github.io/first-blog/"
    ))
    originArray.push(new Origin(
        `#2 - Learning some colour restraint`,
        `Now, armed with Code Academy, Free Code Camp, and Udemy, I started actually understanding how HTML and CSS worked. I learn best seeing it done, replicating and messing around with it. Every "intro to web development" course seems to have a different perspective. I would recommend doing them all. Here is a photo gallery which had a little more care around layout. It developed my understanding of CSS some more and yes, I was proud of it!`,
        `resources/images/origin2.jpg`,
        "https://neosaurrrus.github.io/first-photo-gallery"
    ))
    originArray.push(new Origin(
        `3 - Enter the Javascript`,
        `Turns out that Javascript is really good at making thigns happen in the browser. But everyone has to start somewhere and this is where I did: a guessing game. You guess a number, the computer tells you if you are right or not. Back in my day this would have kept kids entertained all day!`,
        `resources/images/origin3.jpg`,
        `https://neosaurrrus.github.io/guessing-game/`
    ))
    originArray.push(new Origin(
        `4 - Putting it all together`,
        `Thanks to Colt Steele's excellent web bootcamp course, I soon began to codealong with projects and started to make some things I actually don't shudder to look at now. The colour picking game is a great marriage of HTML, CSS and JS and learning colours`,
        `resources/images/origin4.jpg`,
        "https://neosaurrrus.github.io/colour-picker/"
    ))
    originArray.push(new Origin(
        `5 - The first voyages to the backend`,
        `After getting a feel for front-end its typical to want to move straight to back end. So using cloud 9, Express, Node, Mongo and friends, I began understanding REST, DBs, Routing and all that good stuff. However, I never really completed anything, dashing from one tutorial to the next. I couldn't shake the feeling that I was missing something. Anyhow, there is no link to this one other than a website I threw up on AWS/Lightsail using Node`,
        `resources/images/origin5.jpg`,
        "https://brightdragon.co.uk"
    ))
    originArray.push(new Origin(
      `6 - Woah now, lets get back to basics`,
      `At this point I actually stopped and went back to first principles. This entailed learning basic Computer Science, Algorithms and Data Structures. Doing exercises on Codewars really helped train my mind in how to think about programming. Really wish I had something cool to show you here but really, a bubble sort algorithm isn’t really all that pretty. So here is a pong game I did for fun instead.`,
      `resources/images/origin6.jpg`,
      "https://neosaurrrus.github.io/KPong/"
  ))
    originArray.push(new Origin(
        `7 - I got the fever, the front-End Fever!`,
        `Before delving back into back-end, I then worried that I have forgotten my front-end skill! Wes Bos has a lot to answer for here but I came away with a new appreciation of what pure HTML, CSS, JS  with ES6 and a little care of design can do! This was quite a fun period: If you like <a href="https://neosaurrrus.github.io/piano/">piano</a>,  <a href="https://neosaurrrus.github.io/formula-flexbox/">formula one</a> and <a href="">capital cities</a> I have the links for you!  While learning is never done, I felt it was time to draw a line under the front-end work I had done.`,
        `resources/images/origin7.jpg`,
        "https://neosaurrrus.github.io/piano/"
    ))
    originArray.push(new Origin(
        `8 - All roads lead to here`,
        `This all led to the portfolio you see today! This is actually the 2nd portfolio site I created after an initial attempt for FreeCodeCamp. I have tried to keep it simple to last, hopefully you can see the difference a little Front-end maturity makes... (please say you do!).`,
        `resources/images/origin8.jpg`,
        "https://neosaurrrus.github.io/first-portfolio"
     ))
};
projectBuild();
originBuild();

// origin.innerHTML = '';
// projects.innerHTML='';

//build projects
projectArray.forEach(section => {
    projectHTML.push(addContent(section.title, section.text, section.sidePic, section.codeLink, textOnLeft))
    textOnLeft = !textOnLeft;
});
projects.innerHTML = projectHTML.join('');
textOnLeft = false;

//build origin;
originArray.forEach(section =>{
    originHTML.push(addContent(section.title, section.text, section.sidePic, section.codeLink,textOnLeft))
    origin.innerHTML = originHTML.join('');
    textOnLeft=!textOnLeft;
});

//add the highlighter element
const highlight = document.createElement('span');
highlight.classList.add('highlight');
nav.appendChild(highlight);

//