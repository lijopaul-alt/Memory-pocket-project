"strict";
// details in objects
const user1 = {
  username: "lijo paul",
  password: "lijo",
  facebook: ["lijo paul19", "naughty"],
  instagram: ["lijo_paul19", "13paul"],
  twitter: ["lijopaul199", "notHere"],
  Gmail: ["lijo paul", "  Bond99"],
  Github: ["lijo-alt19", "bonus"],
};

const user2 = {
  username: "livin paul",
  password: "livin",
  facebook: ["livin paul19", "naughty"],
  instagram: ["livin_paul19", "13paul"],
  twitter: ["livinpaul199", "notHere"],
  Gmail: ["livin paul", "  Bond99"],
  Github: ["livin-alt19", "bonus"],
};
let controller;
let user3 = {};
const accounts = [user1, user2];
// Getting necessary elements
const nav = document.querySelector(".navbar");
const AboutDiv = document.querySelector(".ABOUT-US");
const navDiv = document.querySelector(".nav-div");
const openAccBtn = document.querySelector(".open--account");
const signupHome = document.querySelector(".home--btn");
const signinHome = document.querySelector(".home--btn--1");
const headerSec = document.querySelector(".header--sec");
const signupSec = document.querySelector(".signup--sec");
const Aboutusection = document.querySelector(".aboutus--sec");
const signinbtn = document.querySelector(".signin--btn");
const signupNav = document.querySelector(".movedown");
const closeBtn = document.querySelector(".close--btn");
const linkTo = document.querySelector(".change--color");
const detailsPage = document.querySelector(".details");
const detailsinfo = document.querySelector(".detail--1");
const logoutBtn = document.querySelector(".detail--btn");
const signInsec = document.querySelector(".form-container");
const signInNav = document.querySelector(".signin--navigate");
const anc = document.querySelector(".anc");
const submitBtn = document.querySelector(".submit-btn");
const success = document.querySelector(".link-color");
const append = document.querySelector(".necessary");

// sigin-inputs
const Username = document.querySelector(".user--input");
const Password = document.querySelector(".pass-input");

// signup inputs
const signupUser = document.querySelector(".signup-user");
const signupPass = document.querySelector(".signup-password");
const FbUser = document.querySelector(".fb-user");
const fbPass = document.querySelector(".fb-pass");
const instaUser = document.querySelector(".insta-user");
const instaPass = document.querySelector(".insta-pass");
const twitUser = document.querySelector(".twit-user");
const twitPass = document.querySelector(".twit-pass");
const gmailUser = document.querySelector(".gmail-user");
const gmailPass = document.querySelector(".gmail-pass");
const gitUser = document.querySelector(".git-user");
const gitPass = document.querySelector(".git-pass");
// smooth scrolling
document.querySelector(".navbar").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// fade effects on link
const HandleOver = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sibling = link.closest(".nav-links").querySelectorAll(".nav-link");
    sibling.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", HandleOver.bind(0.5));
nav.addEventListener("mouseout", HandleOver.bind(1));

const navHeight = nav.getBoundingClientRect().height + 40;

// displaying form hiding other content
const revealAndHideSignup = function (e) {
  signupSec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    headerSec.classList.toggle("hidden");
    Aboutusection.classList.toggle("hidden");
  }, 500);
};

const signupBacktoHome = function (e) {
  headerSec.classList.toggle("hidden");
  Aboutusection.classList.toggle("hidden");
  const id = e.target.querySelector(".anc");
  const element = id.getAttribute("href");

  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => signupSec.classList.toggle("hidden"), 500);
};
const revealAndHideSignin = function (e) {
  signInsec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  console.log(id);

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    headerSec.classList.toggle("hidden");
    Aboutusection.classList.toggle("hidden");
  }, 500);
};

const signinBacktoHome = function (e) {
  headerSec.classList.toggle("hidden");
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  Aboutusection.classList.toggle("hidden");
  setTimeout(() => {
    signInsec.classList.toggle("hidden");
  }, 100);
};

openAccBtn.addEventListener("click", revealAndHideSignup);
signupNav.addEventListener("click", revealAndHideSignup);
signupHome.addEventListener("click", signupBacktoHome);
signInNav.addEventListener("click", revealAndHideSignin);
signinHome.addEventListener("click", signinBacktoHome);

// making nav sticky
const handleObserver = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    navDiv.classList.add("sticky");
  }
  if (!entry.isIntersecting) {
    navDiv.classList.remove("sticky");
  }
};
const NavdivObserver = new IntersectionObserver(handleObserver, {
  root: null,
  threshold: 0.8,
});
NavdivObserver.observe(AboutDiv);

// collecting info
const collectData = function (e) {
  e.preventDefault();
  user3 = {
    username: signupUser.value,
    password: signupPass.value,
    facebook: [FbUser.value, fbPass.value],
    instagram: [instaUser.value, instaPass.value],
    twitter: [twitUser.value, twitPass.value],
    Gmail: [gmailUser.value, gmailPass.value],
    Github: [gitUser.value, gitPass.value],
  };
  accounts.push(user3);

  signupSec.classList.toggle("hidden");
  headerSec.classList.toggle("hidden");
  Aboutusection.classList.toggle("hidden");
  const value = [
    signupUser,
    signupPass,
    FbUser,
    fbPass,
    instaUser,
    instaPass,
    twitUser,
    twitPass,
    gmailUser,
    gmailPass,
    gitUser,
    gitPass,
  ];
  value.forEach((val) => (val.value = ""));

  // Aboutusection.classList.toggle(".hidden");
};

submitBtn.addEventListener("click", collectData);

// rendering details
let toRemove;
const updateUI = function (obj) {
  const html = `
  <div class="row "id="Details">
    <h1 >welcome To Memory Power </h1>
  </div>
  <div class="row info--1">
    <h4>Hello ${obj.username}!</h4>

  </div>
  <div class="row user">
   <div class="col-4 paint">
     <h3 class="name">USERNAME</h3>
   </div>
   <div class="col-1">

   </div>
   <div class="col-4 paint">
      <h3 class="name">PASSWORD</h3>
   </div>
  </div>
  <div class="user--saved">
  <div class="row ">
    <div class="col-1">
    <i class="fa fa-facebook-official fa-2x"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail">${obj.facebook[0]}</h4>
    </div>
    <div class="col-1">
     
    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail">${obj.facebook[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-instagram fa-2x"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail">${obj.instagram[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail">${obj.instagram[1]}</h4>
    </div>
  </div>
  <div class="row space ">
    <div class="col-1">
    <i class="fa fa-twitter-square fa-2x"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail">${obj.twitter[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail">${obj.twitter[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-envelope fa-2x"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail">${obj.Gmail[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail">${obj.Gmail[1]}</h4>
    </div>
  </div>
  <div class="row space">
    <div class="col-1">
    <i class="fa fa-github fa-2x"></i>
    </div>
    <div class="col-3 detail--paint">
      <h4 class="name--detail">${obj.Github[0]}</h4>
    </div>
    <div class="col-1">

    </div>
    <div class="col-3 detail--paint left">
       <h4 class="name--detail">${obj.Github[1]}</h4>
    </div>`;
  append.insertAdjacentHTML("afterbegin", html);
};

const RenderShow = function (acc) {
  console.log(acc);
  controller = acc.find((user) => user.username === Username.value);
  console.log(controller);

  if (controller.password === Password.value) updateUI(controller);
  (Username.value = ""), (Password.value = "");
};

// navugating to details page

const navigate = function () {
  RenderShow(accounts);
  if (RenderShow) {
    signInsec.classList.toggle("hidden");

    detailsPage.classList.remove("hidden");
    headerSec.classList.add("hidden");
    Aboutusection.classList.add("hidden");
  }
};

const AlterNative = function () {
  detailsPage.classList.toggle("hidden");
  headerSec.classList.toggle("hidden");
  Aboutusection.classList.toggle("hidden");
  append.innerHTML = "";
};
signinbtn.addEventListener("click", navigate);
logoutBtn.addEventListener("click", AlterNative);
