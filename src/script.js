"use strict";

//import { stations } from "./stationsModule.js";

//////////////////////////////////////////////////////////
//----------------BUS AND TRAIN STATIONS ARRAY-------------

const stations = [
  {
    name: "Cromer",
    url: "assets/bus.png",
  },
  {
    name: "Cromer",
    url: "assets/train.png",
  },
  {
    name: "Diss",
    url: "assets/bus.png",
  },
  {
    name: "Great Yarmouth",
    url: "assets/bus.png",
  },
  {
    name: "Gunton",
    url: "assets/train.png",
  },
  {
    name: "Hoveton and Wroxham",
    url: "assets/train.png",
  },
  {
    name: "Hunstanton",
    url: "assets/bus.png",
  },
  {
    name: "King's Lynn",
    url: "assets/bus.png",
  },
  {
    name: "North Walsham",
    url: "assets/train.png",
  },
  {
    name: "Norwich",
    url: "assets/bus.png",
  },
  {
    name: "Norwich",
    url: "assets/train.png",
  },
  {
    name: "Roughton Road",
    url: "assets/train.png",
  },
  {
    name: "Salhouse",
    url: "assets/train.png",
  },
  {
    name: "Sheringham",
    url: "assets/train.png",
  },
  {
    name: "Thetford",
    url: "assets/bus.png",
  },
  {
    name: "West Runton",
    url: "assets/train.png",
  },
  {
    name: "Worstead",
    url: "assets/train.png",
  },
];

/////////////////////////////////////////////////////////////
//-------------------------DOM SELECTORS-------------------

const navbarList = document.querySelector(".navbar__list");
const allNavLinks = document.querySelectorAll(".navbar__link");
const hamNavList = document.querySelector(".hamburger-navbar__list");
const allHamNavLinks = document.querySelectorAll(".hamburger-navbar__link");
//const hamNavBtn = document.querySelector(".ham-nav__btn");
const hamNavBtn = document.querySelector(".navigation__button");
const hamNav = document.querySelector(".hamburger-navbar");
const hamNavIcon = document.querySelector(".ham-nav__icon");
const hamNavIconClose = document.querySelector(".ham-nav__icon--close");

const formInputs = document.querySelector(".form__inputs");
const navSearchInput = document.querySelector(".search__input");
//-----------------FORM DOM SELECTORS--------------

const stationTemplate1 = document.querySelector("[data-station-template-1]");
const stationTemplate2 = document.querySelector("[data-station-template-2]");

const destinationsContainer1 = document.querySelector(
  "[data-destinations-container-1]"
);
const destinationsContainer2 = document.querySelector(
  "[data-destinations-container-2]"
);

const searchInput1 = document.querySelector("[data-search-1]");
const searchInput2 = document.querySelector("[data-search-2]");

let stationsList = [];
let stationsList2 = [];

const destinationsList1 = document.querySelector(".form__destinations-list1");
const destinationsList2 = document.querySelector(".form__destinations-list2");

const formTimeBtn = document.querySelector(".form__time-btn");
const formTimeInput = document.querySelector(".form__time-input");

////////////////////////////////////////////////////////
//---------------NAV LINKS HOVER HANDLERS------------

const navLinkHoverHandler = (e, url, navlinks) => {
  const hoveredLink = e.target.closest(url);
  if (!hoveredLink) return;

  navlinks.forEach((link) => {
    link.classList.remove("navbar__link--default");
    link.classList.add("navbar__link--unfocused");
  });
  hoveredLink.classList.add("navbar__link--hover");
};

const navlinkOutHandler = (e, url, navlinks) => {
  const hoveredLink = e.target.closest(url);
  if (!hoveredLink) return;

  navlinks.forEach((link) => {
    link.classList.remove("navbar__link--unfocused");
    link.classList.add("navbar__link--default");
  });
  hoveredLink.classList.remove("navbar__link--hover");
};

navbarList.addEventListener("mouseover", (e) => {
  navLinkHoverHandler(e, ".navbar__link", allNavLinks);
});

navbarList.addEventListener("mouseout", (e) => {
  navlinkOutHandler(e, ".navbar__link", allNavLinks);
});

hamNavList.addEventListener("mouseover", (e) => {
  navLinkHoverHandler(e, ".hamburger-navbar__link", allHamNavLinks);
});

hamNavList.addEventListener("mouseout", (e) => {
  navlinkOutHandler(e, ".hamburger-navbar__link", allHamNavLinks);
});

/////////////////////////////////////////////////////////////////
//-------------------FOCUS SEARCH HANDLER------------------

navSearchInput.addEventListener("focus", (e) => {
  navbarList.style.opacity = 0.2;
});

navSearchInput.addEventListener("focusout", (e) => {
  navbarList.style.opacity = 1;
});

/////////////////////////////////////////////////////////
//----------HAMBURGER NAV ANIMATIONS-----------------

hamNavBtn.addEventListener("click", (e) => {
  hamNav.classList.toggle("hamburger-navbar--visible");
});

////////////////////////////////////////////////////////////
//---------------FORM INPUTS LEAVING FROM GOING TO-------

searchInput1.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  stationsList.forEach((station) => {
    const isVisible = station.name.toLowerCase().includes(value);
    station.element.classList.toggle("hide", !isVisible);
  });
});

searchInput2.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  stationsList2.forEach((station) => {
    const isVisible = station.name.toLowerCase().includes(value);
    station.element.classList.toggle("hide", !isVisible);
  });
});

stationsList = stations.map((station) => {
  const card = stationTemplate1.content.cloneNode(true).children[0];
  const name = card.querySelector("[data-name-1]");
  const image = card.querySelector("[data-image-1]");
  name.textContent = station.name;
  image.src = station.url;
  destinationsContainer1.append(card);
  return { name: station.name, src: station.url, element: card };
});

stationsList2 = stations.map((station) => {
  const card = stationTemplate2.content.cloneNode(true).children[0];
  const name = card.querySelector("[data-name-2]");
  const image = card.querySelector("[data-image-2]");
  name.textContent = station.name;
  image.src = station.url;
  destinationsContainer2.append(card);
  return { name: station.name, src: station.url, element: card };
});

//---------------------CLICK EVENT ON DESTINATION-----------------

destinationsList1.addEventListener("click", (e) => {
  const target = e.target.closest(".form__destinations-item");
  console.log(target);
  console.log(target.children);
  const text = target.children[0].textContent;
  const icon = target.children;
  console.log(text);
  searchInput1.value = text;
});

destinationsList2.addEventListener("click", (e) => {
  const target = e.target.closest(".form__destinations-item");
  console.log(target);
  console.log(target.children);
  const text = target.children[0].textContent;
  const icon = target.children;
  console.log(text);
  searchInput2.value = text;
});

formTimeBtn.addEventListener("click", (e) => {
  formTimeInput.classList.toggle("form__time-input--visible");
});
