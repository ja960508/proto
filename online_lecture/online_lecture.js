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
}

//
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
