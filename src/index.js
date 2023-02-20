import { pageLoad } from "./page-load";
import { displayHomePageContent } from "./home";

pageLoad();
displayHomePageContent();
const buttons = document.querySelectorAll("button");

[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    // Delete child node, then create/display new node
    deleteChild();
    switch (e.target.parentElement.className) {
      case "home":
        console.log("Clicked home button");
        displayHomePageContent();
        break;
      case "menu":
        console.log("Clicked menu button");
        break;
      case "contact":
        console.log("Clicked contact button");
        break;
    }
  });
});

function deleteChild() {
  const contentSection = document.querySelector(".content");
  if (contentSection.firstChild != null) {
    contentSection.removeChild(contentSection.firstChild);
  }
}
