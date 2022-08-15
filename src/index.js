import whiteLogo from "./images/kurowa-san-white.svg"
import breadBG from "./images/bread-bg.jpg"
import bakeryBG from "./images/bakery-bg.jpg"
import contactBG from "./images/contact-bg.jpg"
import emailIcon from "./images/email.svg"
import phoneIcon from "./images/phone.svg"
import storeIcon from "./images/store.svg"
import websiteIcon from "./images/website.svg"
import crosandwich from "./images/crosandwich.jpg"
import croissant from "./images/kurowasan.jpg"
import bagels from "./images/bagels.jpg"

import style from "./style.css"

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

const addElement = ({
  parent,
  type = "div",
  classList = [],
  id,
  text,
  children,
  src,
}) => {
  const element = document.createElement(type)

  if (typeof classList == "string") classList = [classList]
  for (const className of classList) {
    element.classList.add(className)
  }

  if (id) element.id = id
  if (src) element.src = src
  if (text) element.textContent = text
  if (parent) parent.appendChild(element)
  if (children) {
    if (!Array.isArray(children)) children = [children]
    for (const child of children) {
      element.appendChild(child)
    }
  }
  return element
}

// Recreate Home Page
// <div class="welcome-box">
//   <div class="welcome-1">
//     <img class="welcome-logo" src="./images/kurowa-san-white.svg" />
//     Kurowa-san
//   </div>
//   <div class="welcome-2">
//     <p>Welcome to Kurowa-san Japanese Bakery!</p>
//     <p>This is not a real bakery, sorry. The pictures look good though.</p>
//   </div>
//   <div class="welcome-3">
//     <div id="welcome-button" class="menu-button header-tab">
//       Look at the menu anyway
//     </div>
//   </div>
// </div>

const getHomePageDiv = () => {
  const welcomeBox = addElement({
    type: "div",
    classList: "welcome-box",
  })

  // Create logo part on the welcome box
  const welcome1 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-1",
    children: [
      addElement({
        type: "img",
        classList: "welcome-logo",
        src: whiteLogo,
      }),
      addElement({
        type: "div",
        text: "Kurowa-san",
      }),
    ],
  })

  // Create text part on the welcome box
  const welcome2 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-2",
    children: [
      addElement({
        type: "p",
        text: "Welcome to Kurowa-san Japanese Bakery!",
      }),
      addElement({
        type: "p",
        text: "This is not a real bakery, sorry. The pictures look good though.",
      }),
    ],
  })

  // Create button part on the welcome box
  const welcome3 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-3",
    children: addElement({
      id: "welcome-button",
      classList: "header-tab",
      text: "Look at the menu anyway",
    }),
  })

  return welcomeBox
}

const getMenuPageDiv = () => {
  const bgMask = addElement({
    type: "div",
    classList: "menu-bg-mask",
  })

  const menuCards = addElement({
    type: "div",
    classList: "menu-cards",
    parent: bgMask,
    children: [
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: croissant,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Kurowa-san",
          }),
        ],
      }),
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: crosandwich,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Kurowa-sandwich",
          }),
        ],
      }),
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: bagels,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Bagels",
          }),
        ],
      }),
    ],
  })

  return bgMask
}

const getContactPageDiv = () => {
  const bgMask = addElement({
    type: "div",
    classList: "menu-bg-mask",
  })

  const contactBox = addElement({
    type: "div",
    classList: "contact-box",
    parent: bgMask,
    children: [
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: emailIcon,
          }),
          addElement({
            text: "Email: kurowa-san@croissant.com",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: phoneIcon,
          }),
          addElement({
            text: "Phone Number: 123 456 789",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: storeIcon,
          }),
          addElement({
            text: "Location: Kurowa City, Japan",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: websiteIcon,
          }),
          addElement({
            text: "Website: aecel.github.io/restaurant",
          }),
        ],
      }),
    ],
  })
  return bgMask
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
    addEventListeners()
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

// Event Listeners for Header Tabs (Home, Menu, Contact, Welcome Button)
const addEventListeners = () => {
  const headerTabs = document.getElementsByClassName("header-tab")
  for (const tab of headerTabs) {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("chosen-tab")) {
        // You are already on the page, do nothing
        console.log("You clicked the tab that you are already on lol")
      } else {
        document.querySelector(".chosen-tab").classList.remove("chosen-tab")
        let tabName = ""
        if (tab.id == "welcome-button") {
          tabName = "menu"
          document.getElementById("menu").classList.add("chosen-tab")
        } else {
          tabName = tab.id
          tab.classList.add("chosen-tab")
        }

        clearPage()
        displayTabPage(tabName)
      }
    })
  }
}

const html = document.querySelector("html")
const content = document.querySelector("#content")

clearPage()
displayTabPage("home")
addEventListeners()
