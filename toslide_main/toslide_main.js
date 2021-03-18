const tutorialSectionModeItems = document.querySelectorAll(
  ".tutorial-section__mode__items"
);
const selectLecturer = document.querySelector("#select_lecturer");
const selectStudent = document.querySelector("#select_student");
/* 동영상 링크 정보 관리 */
const QA_LECTURER = [
  ['질의응답모드 둘러보기', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['메시지', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['사진', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['투표', "https://www.youtube.com/embed/ruIciRNDrDA"],
];
const QA_STUDENT = [
  ['메시지 보내기', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['사진 보내기', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['투표하기', "https://www.youtube.com/embed/ruIciRNDrDA"],
];
const LEC_LECTURER = [
  ['강의모드 둘러보기', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['강의모드 활용하기', "https://www.youtube.com/embed/ruIciRNDrDA"],
];
const LEC_STUDENT = [
  ['강의모드 활용하기', "https://www.youtube.com/embed/ruIciRNDrDA"],
];
const TEST_LECTURER = [
  ['시험모드 둘러보기', "https://www.youtube.com/embed/ruIciRNDrDA"],
  ['시험모드 활용하기', "https://www.youtube.com/embed/ruIciRNDrDA"],
];
const TEST_STUDENT = [
  ['시험모드 활용하기', "https://www.youtube.com/embed/ruIciRNDrDA"],
];

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
/* Add for videos */
function addVideoBox( videoList ) {
  for( videoInfo of videoList ) {
    if (videoInfo === undefined)
      continue;
    const div = document.createElement('div');
    div.className = 'video-box';
    div.innerHTML = `
      <figcaption>`+videoInfo[0]+`</figcaption>
      <iframe src="`+videoInfo[1]+`"frameborder="0" allowfullscreen class="video">
      </iframe>
    `;
    document.getElementById('tutorial-videos').appendChild(div);
  }
}
function removeRow() {
  const videos = document.getElementById('tutorial-videos');
  videos.innerHTML = '';
}
function getTutorialImageContent(
  target,
  selectedJoiner = selectLecturer.classList.contains("selected")
    ? selectLecturer
    : selectStudent
) {
  const imgContent = document.querySelector("#tutorial_img_content");
  const joinerMode = document.querySelector(".joiner-mode");
  removeRow();
  switch (target.textContent) {
    case tutorialSectionModeItems[0].innerText:
      imgContent.src = "./images/tutorial_toslide_intro.jpg";
      !joinerMode.classList.contains("d-none") &&
        joinerMode.classList.add("d-none");
      break;
    case tutorialSectionModeItems[1].innerText:
      // 탭 공통 영역 
      imgContent.src = "./images/qa_benefit.jpg";
      // 탭 개별 영역
      if (selectedJoiner === selectLecturer) {
        addVideoBox(QA_LECTURER);
        // Additional image
        const div = document.createElement('div');
        div.className = 'video-box';
        div.innerHTML = `
        <figcaption>질의응답 모바일 컨트롤</figcaption>
        <img src="./images/qa_control.jpg" class="video" height="100%" />
        `;
        document.getElementById('tutorial-videos').appendChild(div);
      } else {
        addVideoBox(QA_STUDENT);
      }

      joinerMode.classList.contains("d-none") &&
        joinerMode.classList.remove("d-none");
      break;
    case tutorialSectionModeItems[2].innerText:
      // 탭 공통 영역 
      imgContent.src = "./images/lecture_benefit.jpg";
      // 탭 개별 영역
      if (selectedJoiner === selectLecturer) {
        addVideoBox(LEC_LECTURER);
      } else {
        addVideoBox(LEC_STUDENT);
      }

      joinerMode.classList.contains("d-none") &&
        joinerMode.classList.remove("d-none");
      break;
    case tutorialSectionModeItems[3].innerText:
      // 탭 공통 영역 
      imgContent.src = "./images/test_benefit.jpg";
      // 탭 개별 영역
      if (selectedJoiner === selectLecturer) {
        addVideoBox(TEST_LECTURER);
      } else {
        addVideoBox(TEST_STUDENT);
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
    document.getElementById("bg_img").src = "./images/homepage_m_bg.jpg";
  } else {
    document.getElementById("bg_img").src = "./images/homepage_pc_bg.jpg";
  }
};
