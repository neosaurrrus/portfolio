
// Hey, if you are checking out how I made this portfolio. Note that I think the JS approach here is slightly mad but it is easy to work with so... :)

//global variables - tut tut.
let textOnLeft = false;
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
const body = document.querySelector("body");
const header = document.querySelector(".header");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const hero3 = document.querySelector(".hero3");
const me = document.querySelector(".me");
const projects = document.querySelector(".projects");
const origin = document.querySelector(".origin");
const meLink = document.querySelector(".meLink");
const projectsLink = document.querySelector(".projectsLink");
const originLink = document.querySelector(".originLink");
const skillsScroll = document.querySelector(".skills-slider");
const title = document.querySelector(".title");

//Function to change colours and revert Scroll to the top
function colorSwitch(x, background, darkbackground, highlight) {
  header.style.setProperty("background-position-x", x + "%");
  body.style.setProperty("--background", background);
  body.style.setProperty("--darkbackground", darkbackground);
  body.style.setProperty("--highlight", highlight);
  document.documentElement.scrollTop = 0;
}
//shift the backgrounds accordingly
function backgroundSwitch(oneLeft, twoLeft, threeLeft) {
  hero1.style.setProperty("left", oneLeft);
  hero2.style.setProperty("left", twoLeft);
  hero3.style.setProperty("left", threeLeft);
}

// Passing parameters via add event listener
meNav.addEventListener("click", function() {
  colorSwitch(0, "rgb(44,130,89)", "rgb(30,79,54)", "rgb(255, 240, 100");
  backgroundSwitch("0%", "100%", "200%");
  title.innerHTML = "Developer";
  me.style.setProperty("display", "block");
  projects.style.setProperty("display", "none");
  origin.style.setProperty("display", "none");
  meLink.style.setProperty("background", "rgba(0,0,0,0.2");
  projectsLink.style.setProperty("background", "rgba(0,0,0,0.0");
  originLink.style.setProperty("background", "rgba(0,0,0,0.0");
});
projectsNav.addEventListener("click", function() {
  colorSwitch(50, "rgb(189,59,4)", "rgb(79,51,30)", "rgb(255, 240, 60");
  backgroundSwitch("-100%", "0%", "100%");
  title.innerHTML = "Projects";
  me.style.setProperty("display", "none");
  projects.style.setProperty("display", "block");
  origin.style.setProperty("display", "none");
  meLink.style.setProperty("background", "rgba(0,0,0,0.0");
  projectsLink.style.setProperty("background", "rgba(0,0,0,0.2");
  originLink.style.setProperty("background", "rgba(0,0,0,0.0");
});
originNav.addEventListener("click", function() {
  colorSwitch(100, "rgb(0,53,133)", "rgb(0,30,50)", "rgb(255,240,30)");
  backgroundSwitch("-200%", "-100%", "0%");
  title.innerHTML = "Learnings";
  me.style.setProperty("display", "none");
  projects.style.setProperty("display", "none");
  origin.style.setProperty("display", "block");
  meLink.style.setProperty("background", "rgba(0,0,0,0.0)");
  projectsLink.style.setProperty("background", "rgba(0,0,0,0.0)");
  originLink.style.setProperty("background-color", "rgba(0,0,0,0.2)");
});

//slider timer - changes the skills display every 5 seconds.
setInterval(function() {
  skillY -= 250;
  skillsScroll.style.setProperty("background-position-y", skillY + "px");
}, 5000);

//defining constructors
function Project(title, text, sidePic, codeLink, appLink, videoLink) {
  (this.title = title),
    (this.text = text),
    (this.sidePic = sidePic),
    (this.codeLink = codeLink),
    (this.appLink = appLink),
    (this.videoLink = videoLink)
}
function Origin(title, text, sidePic, codeLink) {
  (this.title = title),
    (this.text = text),
    (this.sidePic = sidePic),
    (this.codeLink = codeLink);
}

//function to build the relevent post in HTML
function addContent(title, text, sidepic, codeLink, appLink, videoLink, isLeft) {
  if (isLeft === true) {
    return `<section>
            <div class="leftbox textbox">
                <h3>${title}</h3>
                <h5><a href="${codeLink}" target="_blank">GitHub</a> | <a href="${appLink}" target="_blank">App</a>  | <a href="${videoLink}" target="_blank">Video</a> </h5>
                <p>${text}</p>
            </div>
            <div class="sidebox"><a href="${codeLink}"  target="_blank"><img class="sidepic" src="${sidepic}"></a></div>
        </section>
        `;
  } else
    return `<section>
            <div class="sidebox"><a href="${codeLink}" target="_blank"><img class="sidepic" src="${sidepic}"></a></div>
            <div class="rightbox textbox">
               <h3>${title}</h3>
               <h5><a href="${codeLink}" target="_blank">GitHub</a> | <a href="${appLink}" target="_blank">App</a>  | <a href="${videoLink}" target="_blank">Video</a> </h5>
               <p>${text}</p>
            </div>
            </section>`;
}
//build the Project items
function projectBuild() {

  projectArray.push(
    new Project(
      "Prompt Planning Poker",
      "Easy Estimation for SCRUM Teams. This app is an online version of the popular sprint planning tool, Planning Poker. Built with React and Redux on the Front End, with Ruby on Rails on the backend.",
      "resources/images/ppp.png",
      "https://github.com/neosaurrrus/prompt-planning-poker",
      "https://github.com/neosaurrrus/prompt-planning-poker",
      "https://github.com/neosaurrrus/prompt-planning-poker"
    )
  );

  projectArray.push(
    new Project(
      "Invite.li",
      "A No-fuss way to find dates between friends. The main focus was to be quick and painless with minimal hurdles. React on the Frontend while Firebase handles database duties here",
      "resources/images/inviteli.jpg",
      "https://github.com/neosaurrrus/invitomatic",
      "https://github.com/neosaurrrus/invitomatic",
      "https://github.com/neosaurrrus/invitomatic"
    )
  );

  projectArray.push(
    new Project(
      "SubsChef",
      "An app to record ingredients that can be swapped for other ingredients. Great if you don't have a certain recipe. Built entirely with Ruby on Rails",
      "resources/images/subschef.png",
      "https://github.com/neosaurrrus/ingredient-substitutions/",
      "https://github.com/neosaurrrus/ingredient-substitutions/",
      "https://github.com/neosaurrrus/ingredient-substitutions/"
    )
  );
  projectArray.push(
    new Project(
      "Stroll Trek Run",
      "A way to record your favourite walking trails. It uses JavaScript on the Frontend, It was made using Node, Express and MongoDB on the backend.",
      "resources/images/strolltrekrun.jpg",
      "https://github.com/neosaurrrus/stroll-trek-run",
      "https://github.com/neosaurrrus/stroll-trek-run",
      "https://github.com/neosaurrrus/stroll-trek-run"
    )
  );


}

//build the origin items
function originBuild() {
  originArray.push(
    new Origin(
      `Codecademy and Free Code Camp`,
      `Both of these sites are fully recommended in getting the basics down in a non-scary way. There is a mountain of knowledge to climb, and these are a pretty decent starting point. We all have to take our <a href="https://neosaurrrus.github.io/guessing-game"  target="_blank">first steps</a> to get anywhere.`,
      `resources/images/codecademy.jpg`,
      "https://www.codecademy.com"
    )
  );


  originArray.push(
    new Origin(
      `Udemy`,
      `I always learnt best with seeing an example, and then recreating with my own ideas on what I'd like to see. Udemy has alot of courses with plenty of ideas but you need to do a little research to work out good ones from the bad or outdated. I used to recommend Colt Steele's Web Developer Bootcamp (which has a <a href="https://neosaurrrus.github.io/colour-picker"  target="_blank">cool colour picking game</a> you make), Anthony Alicea's Understanding Javascript: The wierd parts and Stephen Grider's ES6 course. I bet there is newer nowadays though`,
      `resources/images/udemy.png`,
      `https://www.udemy.com/`
    )
  );
  originArray.push(
    new Origin(
      `Wes Bos' Courses`,
      `When it comes to videos however, Wes Bos is top drawer stuff. He has a number of free and paid courses on topics such as JS, React, Command-line and CSS. I think the Javascript Basics and JS30 courses cannot be recommended enough for any budding JS dev. Check out this <a href="https://neosaurrrus.github.io/formula-flexbox/"  target="_blank">sweet formula one</a> flexbox technique I learnt from Javascript30. Or just chill with some <a href="https://neosaurrrus.github.io/piano/"  target="_blank">piano</a>?`,
      `resources/images/wesbos.jpg`,
      `https://wesbos.com/`
    )
  );
  originArray.push(
    new Origin(
      `Enlisting in the CodeWars`,
      `When you spend time on projects and making <a href="https://neosaurrrus.github.io/KPong/"  target="_blank">pong clones</a> its easy to get sloppy about the core techniques behind it all. CodeWars is a great site (amoung others) to practice the core stuff, solving challenges in an efficient way. It provides coding challenges to solve with the killer feature of seeing how others solved it once you are done.`,
      `resources/images/codewars.jpg`,
      "https://www.codewars.com"
    )
  );
  originArray.push(
    new Origin(
      `Podcasts, Websites and Books`,
      `Podcasts are great for times when your ears are free. Code Newbie is a great place to hear about people's coding journies and getting motivated, Syntax is great for keeping abreast of whats going on in Web Dev and plenty of tasty tips to try. CSS Tricks and Dev.to are my favourte websites to browse for Web Dev news. I prefer books for more UX related things, I can definately recommend Don't Make me Think and Design for Hackers. The 'why?' of what we make fascinates me, though sometimes there is just <a href="https://optimistic-shaw-3fa4ae.netlify.app/"  target="_blank">no reason at all</a>.`,
      `resources/images/syntax.png`,
      "https://syntax.fm/"
    )
  );

  originArray.push(
    new Origin(
      `FlatIron Software Engineering Bootcamp`,
      `The glue that put it all together for me, Flatiron was instrumental in bringing things together and explaining the 'why' of the things we do.  I built a bunch of things as part of the course, but I have a sweet spot for the first project which was building a CLI app using Ruby: <a  target="_blank" href="https://github.com/neosaurrrus/f1_competitors/">F1 Competitors</a>`,
      `resources/images/flatironschool.png`,
      "https://flatironschool.com/"
    )
  );
}

projectBuild();
originBuild();

//build projects
projectArray.forEach(section => {
  projectHTML.push(
    addContent(
      section.title,
      section.text,
      section.sidePic,
      section.codeLink,
      section.appLink, 
      section.videoLink,
      textOnLeft
    )
  );
  textOnLeft = !textOnLeft;
});
projects.innerHTML += projectHTML.join("");

//Reset the text back to the left for the next section.
textOnLeft = !textOnLeft;

//build origin;
originArray.forEach(section => {
  originHTML.push(
    addContent(
      section.title,
      section.text,
      section.sidePic,
      section.codeLink,
      section.appLink, 
      section.videoLink,
      textOnLeft
    )
  );
  textOnLeft = !textOnLeft;
});
origin.innerHTML += originHTML.join("");
