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
              src: strawberry,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Strawberry Kurowa-san",
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
              src: chocolat,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Pain Au Chocolat",
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
              src: tray,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Kurowa-san Party",
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
              src: melonsan,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Melon-san",
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
              src: dorayaki,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Dorayaki",
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
              src: currybread,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Curry Bread",
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
              src: baguette,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Baguette",
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
            text: "Bagel",
          }),
        ],
      }),
    ],
  })

  return bgMask
}

export default getMenuPageDiv
