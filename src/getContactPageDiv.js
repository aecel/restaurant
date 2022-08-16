import emailIcon from "./images/email.svg"
import phoneIcon from "./images/phone.svg"
import storeIcon from "./images/store.svg"
import websiteIcon from "./images/website.svg"
import addElement from "./addElement.js"

const contactDetailChild = (srcImg, contactText) => {
  return addElement({
    classList: "contact-div",
    children: [
      addElement({
        type: "img",
        classList: "contact-img",
        src: srcImg,
      }),
      addElement({
        text: contactText,
      }),
    ],
  })
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
      contactDetailChild(emailIcon, "Email: kurowa-san@croissant.com"),
      contactDetailChild(phoneIcon, "Phone Number: 123 456 789"),
      contactDetailChild(storeIcon, "Location: Kurowa City, Japan"),
      contactDetailChild(websiteIcon, "Website: aecel.github.io/restaurant"),
    ],
  })
  return bgMask
}

export default getContactPageDiv
