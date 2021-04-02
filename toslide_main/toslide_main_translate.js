function textTranslate(target) {
  const korean = document.querySelector(".translate__korean");
  const english = document.querySelector(".translate__english");
  const bgImg = document.querySelector("#bg_img");
  const domArray = [
    document.querySelector("#lbutton"),
    document.querySelector("#sbutton"),
    document.querySelector("#toslide_intro"),
    document.querySelector("#toslide_qna"),
    document.querySelector("#toslide_online_lecture"),
    document.querySelector("#toslide_online_test"),
    document.querySelector("#select_lecturer"),
    document.querySelector("#select_student"),
  ];

  const koreanText = [
    "강사로 참여하기",
    "학생으로 참여하기",
    "투슬라이드 소개",
    "메시지 및 사진으로 질의응답",
    "파일을 공유하는 온라인 강의",
    "부정행위 방지하는 온라인 시험",
    "강사입장",
    "학생입장",
  ];
  const engText = [
    "Join as a Lecturer",
    "Join as a Student",
    "Introduction",
    "Audience Presentation System(APS)",
    "Online Class",
    "Online Exam",
    "Join as a Lecturer",
    "Join as a Student",
  ];

  switch (target.textContent) {
    case "한국어":
      if (!korean.classList.contains("active")) {
        translate(domArray, koreanText);
        english.classList.remove("active");
        korean.classList.add("active");
        if (parent.is_mobile()) {
          document.getElementById("bg_img").src = "./images/homepage_m_bg.jpg";
        } else {
          document.getElementById("bg_img").src = "./images/homepage_pc_bg.jpg";
        }
        tutorialModeSelect(document.querySelector(".selected"));
      }
      break;
    case "English":
      if (!english.classList.contains("active")) {
        translate(domArray, engText);
        korean.classList.remove("active");
        english.classList.add("active");
        bgImg.src = "./images/eng_image/homepage_pc_bg_eng.jpg";
        tutorialModeSelect(document.querySelector(".selected"));
      }
      break;
  }
}

function translate(domArray, textContent) {
  for (let i = 0; i < domArray.length; i++) {
    domArray[i].innerText = textContent[i];
  }
}
