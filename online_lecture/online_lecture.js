const modalOverlay = document.querySelector(".modal-overlay");
const hideSection = document.querySelector(".hide-section");

// test
function startLecture() {
  const modeTransModal = document.querySelector(".mode-trans-modal");

  modalOn();
  if (modeTransModal.classList.contains("d-none")) {
    modeTransModal.classList.remove("d-none");
  }
}

function getTypeOfLectureBook() {
  const iframeContent = document.querySelector("#iframe_lecture_book_file");
  const filterREG = /(?:https?:\/\/)?(?:\w+.\w+.\w+\/)(\w+)/;
  const extension = iframeContent.src.match(filterREG)[1];
  const lectureBookModeSelect = document.querySelector(
    ".lecture-book-mode-select"
  );
  const lectureSlideController = document.querySelector(
    ".lecture-book-slide-controller"
  );

  if (extension === "presentation") {
    lectureBookModeSelect.classList.contains("d-none") &&
      lectureBookModeSelect.classList.remove("d-none");
    lectureSlideController.classList.contains("d-none") &&
      lectureSlideController.classList.remove("d-none");
    return;
  } else {
    lectureBookModeSelect.classList.add("d-none");
    lectureSlideController.classList.add("d-none");
  }
}

function openLectureBook() {
  const loadLectureBookModal = document.querySelector(
    ".load-lecture-book-modal"
  );
  const lectureBookSection = document.querySelector(
    ".lecture-book-section-wrap"
  );

  modalOff();
  hideSection.classList.toggle("d-none");
  loadLectureBookModal.classList.toggle("d-none");
  lectureBookSection.classList.toggle("d-none");

  getTypeOfLectureBook();
}

function modalOn() {
  modalOverlay.classList.add("modal-on");
}
function modalOff() {
  modalOverlay.classList.remove("modal-on");
}

function transMode() {
  const modeTransModal = document.querySelector(".mode-trans-modal");

  modalOff();

  modeTransModal.classList.add("d-none");
  hideSection.classList.remove("d-none");
}

function cancleTransModal() {
  const modeTransModal = document.querySelector(".mode-trans-modal");

  modeTransModal.classList.add("d-none");
  modalOff();
}

function openLoadLectureBookModal() {
  const loadPaperModal = document.querySelector(".load-lecture-book-modal");

  modalOn();
  loadPaperModal.classList.remove("d-none");
}

function closeLoadLectureBookModal() {
  const loadLectureBook = document.querySelector(".load-lecture-book-modal");

  modalOff();
  loadLectureBook.classList.add("d-none");
}

function openCloseLectureBookModal() {
  const modal = document.querySelector(".close-lecture-book-paper-modal");

  modalOn();
  modal.classList.remove("d-none");
}
function cancleCloseLectureBookModal() {
  const modal = document.querySelector(".close-lecture-book-paper-modal");
  modalOff();
  modal.classList.add("d-none");
}
function closeLectureBook() {
  const modal = document.querySelector(".close-lecture-book-paper-modal");
  const LectureBookSectionWrap = document.querySelector(
    ".lecture-book-section-wrap"
  );
  modalOff();

  modal.classList.add("d-none");
  LectureBookSectionWrap.classList.add("d-none");
  hideSection.classList.remove("d-none");
}

function lectureBookModeTrans(target) {
  const editMode = document.querySelector(".edit-mode");
  const lookMode = document.querySelector(".look-mode");

  if (target.classList.contains("clicked")) return;
  else {
    editMode.classList.toggle("clicked");
    lookMode.classList.toggle("clicked");
  }
}

function lectureStartToggle(target) {
  const spanContent = target.querySelector("span");
  const imgContent = target.querySelector("img");

  if (spanContent.textContent === "강의중지") {
    spanContent.textContent = "강의중";
    imgContent.src = "./images/gathering_start.png";
  } else {
    spanContent.textContent = "강의중지";
    imgContent.src = "./images/not_collecting.png";
  }
}
