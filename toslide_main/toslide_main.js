function textTranslate(target) {
  const korean = document.querySelector(".translate__korean");
  const english = document.querySelector(".translate__english");
  switch (target.textContent) {
    case "한국어":
      !korean.classList.contains("active") &&
        english.classList.remove("active");
      !korean.classList.contains("active") && korean.classList.add("active");
      break;
    case "English":
      !english.classList.contains("active") &&
        korean.classList.remove("active");
      !english.classList.contains("active") && english.classList.add("active");
      break;
  }
}

function tutorialModeSelect(target) {
  const itemList = document.querySelectorAll(".tutorial-section__mode__items");
  itemList.forEach((data) => {
    data.classList.contains("selected") && data.classList.remove("selected");
    target === data && target.classList.add("selected");
  });
}

function loginToslide() {
  alert("login try");
}
