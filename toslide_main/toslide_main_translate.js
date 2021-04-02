function textTranslate(target) {
  const korean = document.querySelector(".translate__korean");
  const english = document.querySelector(".translate__english");
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
    "Introduction Toslide",
    "Audience Presentation System(APS)",
    "Online Class",
    "Online Exam",
    "Join as a Lecturer",
    "Join as a Student",
  ];

  switch (target.textContent) {
    case "한국어":
      !korean.classList.contains("active") && translate(domArray, koreanText);
      !korean.classList.contains("active") &&
        english.classList.remove("active");
      !korean.classList.contains("active") && korean.classList.add("active");
      tutorialModeSelect(document.querySelector(".selected"));
      break;
    case "English":
      !english.classList.contains("active") && translate(domArray, engText);
      !english.classList.contains("active") &&
        korean.classList.remove("active");
      !english.classList.contains("active") && english.classList.add("active");
      tutorialModeSelect(document.querySelector(".selected"));
      break;
  }
}

function translate(domArray, textContent) {
  for (let i = 0; i < domArray.length; i++) {
    domArray[i].innerText = textContent[i];
  }
}
