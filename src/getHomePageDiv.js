import whiteLogo from "./images/kurowa-san-white.svg"
import addElement from "./addElement.js"

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
        // classList: "header-tab",
        text: "Look at the menu anyway",
      }),
    })
  
    return welcomeBox
  }

  export default getHomePageDiv