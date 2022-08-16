import crosandwich from "./images/crosandwich.png"
import croissant from "./images/kurowasan.jpg"
import bagels from "./images/bagels.jpg"
import strawberry from "./images/strawberry.jpg"
import tray from "./images/tray.jpg"
import baguette from "./images/baguette.jpg"
import melonsan from "./images/melonsan.png"
import chocolat from "./images/pain.png"
import dorayaki from "./images/dorayaki.png"
import currybread from "./images/currybread.png"
import addElement from "./addElement.js"

const menuCardChild = (srcImg, menuText) => {
  return addElement({
    classList: "menu-card",
    children: [
      addElement({
        classList: "menu-img-container",
        children: addElement({
          type: "img",
          classList: "menu-img",
          src: srcImg,
        }),
      }),
      addElement({
        classList: "menu-text",
        text: menuText,
      }),
    ],
  })
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
      menuCardChild(croissant, "Kurowa-san"),
      menuCardChild(crosandwich, "Kurowa-sandwich"),
      menuCardChild(strawberry, "Strawberry Kurowa-san"),
      menuCardChild(chocolat, "Pain Au Chocolat"),
      menuCardChild(tray, "Kurowa-san Party"),
      menuCardChild(melonsan, "Melon-san"),
      menuCardChild(dorayaki, "Dorayaki"),
      menuCardChild(currybread, "Curry Bread"),
      menuCardChild(baguette, "Baguette"),
      menuCardChild(bagels, "Bagel"),
    ],
  })

  return bgMask
}

export default getMenuPageDiv
