const tutorialSectionModeItems = document.querySelectorAll(
  ".tutorial-section__mode__items"
);
const selectLecturer = document.querySelector("#select_lecturer");
const selectStudent = document.querySelector("#select_student");

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

function selectTutorialContent(target) {
  let selectedContent;

  tutorialSectionModeItems.forEach((item) => {
    if (item.classList.contains("selected")) {
      selectedContent = item;
    }
  });

  if (target.classList.contains("selected")) return;

  if (target === selectLecturer) {
    selectStudent.classList.remove("selected");
  } else {
    selectLecturer.classList.remove("selected");
  }

  target.classList.add("selected");
  getTutorialImageContent(selectedContent, target);
}

function getTutorialImageContent(
  target,
  selectedJoiner = selectLecturer.classList.contains("selected")
    ? selectLecturer
    : selectStudent
) {
  const imgContent = document.querySelector("#tutorial_img_content");
  const joinerMode = document.querySelector(".joiner-mode");

  switch (target.textContent) {
    case tutorialSectionModeItems[0].innerText:
      imgContent.src = "./images/tutorial_toslide_intro.png";
      !joinerMode.classList.contains("d-none") &&
        joinerMode.classList.add("d-none");
      break;
    case tutorialSectionModeItems[1].innerText:
      if (selectedJoiner === selectLecturer) {
        imgContent.src = "./images/tutorial_QnA_lecturer.png";
      } else {
        imgContent.src = "./images/tutorial_QnA_student.png";
      }

      joinerMode.classList.contains("d-none") &&
        joinerMode.classList.remove("d-none");
      break;
    case tutorialSectionModeItems[2].innerText:
      if (selectedJoiner === selectLecturer) {
        imgContent.src = "./images/tutorial_online_lecture_lecturer.png";
      } else {
        imgContent.src = "./images/tutorial_online_lecture_student.png";
      }

      joinerMode.classList.contains("d-none") &&
        joinerMode.classList.remove("d-none");
      break;
    case tutorialSectionModeItems[3].innerText:
      if (selectedJoiner === selectLecturer) {
        imgContent.src = "./images/tutorial_online_test_lecturer.png";
      } else {
        imgContent.src = "./images/tutorial_online_test_student.png";
      }

      joinerMode.classList.contains("d-none") &&
        joinerMode.classList.remove("d-none");
      break;
  }
}

function tutorialModeSelect(target) {
  const itemList = document.querySelectorAll(".tutorial-section__mode__items");
  itemList.forEach((data) => {
    data.classList.contains("selected") && data.classList.remove("selected");
    target === data && target.classList.add("selected");
  });

  getTutorialImageContent(target);
}

function is_mobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  if (typeof window.orientation !== "undefined") {
    return true;
  }

  let iOSios =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (iOSios) return true;

  return false;
}

window.onload = function () {
  if (parent.is_mobile()) {
    document.getElementById("bg_img").src = "./images/homepage_m_bg.png";
  } else {
    document.getElementById("bg_img").src = "./images/homepage_pc_bg.png";
  }
};
