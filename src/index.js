import { pageLoad } from "./page-load";
import { displayHomePageContent } from "./home";
import { displayMenuContent } from "./menu";
import { displayContactContent } from "./contact";

pageLoad();
displayHomePageContent();
const buttons = document.querySelectorAll("button");

[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("test");
    // Delete child node, then create/display new node
    deleteChild();
    switch (e.target.parentElement.className) {
      case "home":
        displayHomePageContent();
        break;
      case "menu":
        displayMenuContent();
        break;
      case "contact":
        displayContactContent();
        break;
    }
  });
});

function deleteChild() {
  const contentSection = document.querySelector(".content");
  if (contentSection.firstChild != null) {
    contentSection.removeChild(contentSection.firstChild);
    contentSection.classList.remove(contentSection.classList[1]);
  }
}
