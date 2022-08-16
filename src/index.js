import style from "./style.css"

import breadBG from "./images/bread-bg.jpg"
import bakeryBG from "./images/bakery-bg.jpg"
import contactBG from "./images/contact-bg.jpg"

import getHomePageDiv from "./getHomePageDiv.js"
import getMenuPageDiv from "./getMenuPageDiv.js"
import getContactPageDiv from "./getContactPageDiv.js"

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// Clear the main body of the page
// Remove all children of div with id="content"
const clearPage = () => {
  removeAllChildNodes(content)

  // Remove background image of html
  const html = document.querySelector("html")
  html.style.background = "none"
}

// Change html background to the home page background
const changeBackgroundTo = (breadBG) => {
  html.style.background = `url(${breadBG}) no-repeat center center fixed`
  html.style.backgroundSize = "cover"
}

const displayTabPage = (tabName) => {
  if (tabName == "home") {
    console.log("Going to the home page")
    content.appendChild(getHomePageDiv())
    changeBackgroundTo(breadBG)
    addWelcomeButtonEvent()
  } else if (tabName == "menu") {
    console.log("Going to the menu page")
    content.appendChild(getMenuPageDiv())
    changeBackgroundTo(bakeryBG)
  } else if (tabName == "contact") {
    console.log("Going to the contact page")
    content.appendChild(getContactPageDiv())
    changeBackgroundTo(contactBG)
  } else {
    console.log("This can't happen")
  }
}

// Add Event Listeners for Header Tabs (Home, Menu, Contact)
const addEventListeners = () => {
  const headerTabs = document.getElementsByClassName("header-tab")
  for (const tab of headerTabs) {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("chosen-tab")) {
        // You are already on the page, do nothing
        console.log("You clicked the tab that you are already on lol")
      } else {
        document.querySelector(".chosen-tab").classList.remove("chosen-tab")

        const tabName = tab.id
        tab.classList.add("chosen-tab")

        clearPage()
        displayTabPage(tabName)
      }
    })
  }
}

// Add event listener to red welcome button on the home page
const addWelcomeButtonEvent = () => {
  const welcomeButton = document.getElementById("welcome-button")
  welcomeButton.addEventListener("click", () => {
    document.querySelector(".chosen-tab").classList.remove("chosen-tab")
    document.getElementById("menu").classList.add("chosen-tab")
    clearPage()
    displayTabPage("menu")
  })
}

const html = document.querySelector("html")
const content = document.querySelector("#content")

clearPage()
displayTabPage("home")
addEventListeners()
