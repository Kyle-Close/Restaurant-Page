const contentContainer = document.querySelector("body");

function createElements() {
  contentContainer.appendChild(createHeader());
  contentContainer.appendChild(createContentSection());
  contentContainer.appendChild(createFooter());
}

function createHeader() {
  const headerSection = document.createElement("div");
  headerSection.className = "header";
  const title = document.createElement("h1");
  title.textContent = "Titos Pizza";
  headerSection.appendChild(title);
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-section";
  menuDiv.appendChild(createTab("home", "#39FF14"));
  menuDiv.appendChild(createTab("menu", "#f0051c"));
  menuDiv.appendChild(createTab("contact", "#0548f0"));
  headerSection.appendChild(menuDiv);
  return headerSection;
}

function createTab(className, color) {
  // Create Button
  const tab = document.createElement("button");
  tab.className = className;
  tab.style.setProperty("--clr", color);
  // Create span inside button
  const tabSpan = document.createElement("span");
  tabSpan.textContent = className;
  tab.appendChild(tabSpan);
  // Add "i" section (for styling)
  const tabI = document.createElement("i");
  tab.appendChild(tabI);
  return tab;
}

function createContentSection() {
  const content = document.createElement("div");
  content.className = "content";
  return content;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.className = "footer";
  const text = document.createElement("p");
  text.innerHTML = "Copyright &copy 2023 Kyle Close";
  footer.appendChild(text);
  return footer;
}

export function pageLoad() {
  createElements();
}
