//global variables - tut tut
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
  title.innerHTML = "Guy";
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
  title.innerHTML = "Dev";
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
  title.innerHTML = "Student";
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
function Project(title, text, sidePic, codeLink) {
  (this.title = title),
    (this.text = text),
    (this.sidePic = sidePic),
    (this.codeLink = codeLink);
}
function Origin(title, text, sidePic, codeLink) {
  (this.title = title),
    (this.text = text),
    (this.sidePic = sidePic),
    (this.codeLink = codeLink);
}

//function to build the relevent post in HTML
function addContent(title, text, sidepic, codeLink, isLeft) {
  if (isLeft === true) {
    return `<section>
            <div class="leftbox textbox">
                <h3>${title}</h3>
                <p>${text}</p>
            </div>
            <div class="sidebox"><a href="${codeLink}"><img class="sidepic" src="${sidepic}"></a></div>
        </section>
        `;
  } else
    return `<section>
            <div class="sidebox"><a href="${codeLink}"><img class="sidepic" src="${sidepic}"></a></div>
            <div class="rightbox textbox">
               <h3>${title}</h3>
                <p>${text}</p>
            </div>
            </section>`;
}
//build the Project items
function projectBuild() {
  projectArray.push(
    new Project(
      "Stroll Trek Run",
      "An application that invites users to view, create and comment on thier favourite walking trails, with a focus on good design and clarity for the user. It was made using mostly Express, Node and MongoDB. There are a number of features I would like to build onto this one one day, but for now, its functional.",
      "resources/images/strolltrekrun.jpg",
      "https://strolltrekrun.com"
    )
  );
  projectArray.push(
    new Project(
      "Inviteli",
      "A No-fuss way to find dates between friends. Creating this taught me a lot about React. I like how State and components can be managed to bring together web application without getting a headache! Firebase handles database duties here",
      "resources/images/inviteli.jpg",
      "https://invite.li"
    )
  );
  projectArray.push(
    new Project(
      "Kangdemic",
      "A clone of a popular board game, Pandemic. This was the first real project I started for myself when I started learning Javascript. It's not terribly coded but that's the best way to appreciate good coding practise! Purely front-end, it uses HTML, CSS and JS only",
      "resources/images/kangdemic.jpg",
      "https://neosaurrrus.github.io/Kangdemic/"
    )
  );
}

//build the origin items
function originBuild() {
  originArray.push(
    new Origin(
      `Codecademy and Free Code Camp`,
      `Though I dabbled with HTML, CSS and Javascript for a decent chunk of my career, I wanted to learn it properly. Both of these sites were instrumental in getting the basics down in a non-scary way. I have come a long way since <a href="https://neosaurrrus.github.io/first-blog/">my first attempts</a>`,
      `resources/images/codecademy.jpg`,
      "https://www.codecademy.com"
    )
  );
  originArray.push(
    new Origin(
      `Udemy`,
      `I learn best by seeing an example of it done, and then replicating with my own twist so videos suit me plenty. Udemy has alot of courses but you need to do a little research to work out good ones from the bad or outdated. My most influencial ones were Colt Steele's Web Developer Bootcamp (which has a <a href="https://neosaurrrus.github.io/colour-picker">cool colour picking game</a> you make), Anthony Alicea's Understanding Javascript: The wierd parts and Stephen Grider's ES6 course`,
      `resources/images/udemy.png`,
      `https://www.udemy.com/`
    )
  );
  originArray.push(
    new Origin(
      `Wes Bos' Courses`,
      `When it comes to videos though, Wes Bos is my main guy. He has a number of free and paid courses on topics such as JS, React, Command-line and CSS. I think the JS30 course cannot be recommended enough for any budding JS dev. Check out this <a href="https://neosaurrrus.github.io/formula-flexbox/">sweet formula one</a> flexbox technique I learnt as part of Javascript30. Or just chill with some <a href="https://neosaurrrus.github.io/piano/">piano</a>?`,
      `resources/images/wesbos.jpg`,
      `https://wesbos.com/`
    )
  );
  originArray.push(
    new Origin(
      `Enlisting in the CodeWars`,
      `When I spend much of my learning time on new things and making <a href="https://neosaurrrus.github.io/KPong/">pong clones</a> its easy to forget how to do the basics. CodeWars is a great site for forcing me to practice the core stuff. It provides coding challenges to solve with the killer feature of seeing how others solved it once you are done.  `,
      `resources/images/codewars.jpg`,
      "https://www.codewars.com"
    )
  );
  originArray.push(
    new Origin(
      `Podcasts, Websites and Books`,
      `Podcasts are great for times my ears are free. Syntax and Code Newbie are my favourite Web Dev ones. CSS Tricks is my favourte website to browser for Web Dev news. I prefer books for more design based learning, I can definately recommend Don't Make me Think and Design for Hackers. The 'why?' of what we make fascinates me, though sometimes there is just <a href="https://i-am-a-bear-lukie.netlify.com/">no reason at all</a>.`,
      `resources/images/syntax.png`,
      "https://syntax.fm/"
    )
  );
  originArray.push(
    new Origin(
      `Blogging`,
      `Another plug for my blog here! When you have to think of how to write down how something is done it does help your own understanding of it. I did begin writing my own but I like the socialness of <a href="https://medium.com/@lukiek">Medium</a>. My blog started out as just a dump of my notes but slowly I am getting better at taking my time to write for an audience. If I ever get one! `,
      `resources/images/medium.jpg`,
      "https://medium.com/@lukiek"
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
      textOnLeft
    )
  );
  textOnLeft = !textOnLeft;
});
origin.innerHTML += originHTML.join("");
