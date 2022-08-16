import emailIcon from "./images/email.svg"
import phoneIcon from "./images/phone.svg"
import storeIcon from "./images/store.svg"
import websiteIcon from "./images/website.svg"
import addElement from "./addElement.js"

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

  export default getContactPageDiv