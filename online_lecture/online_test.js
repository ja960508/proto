const testStartBtn = document.querySelector(".start-test");
const modeTransModal = document.querySelector(".mode-trans-modal");
const modeTransModalCancleBtn = document.querySelector(
  ".mode-trans-modal-fuction-button.cancle"
);
const modeTransModalTransBtn = document.querySelector(
  ".mode-trans-modal-fuction-button.trans"
);
const wrapper = document.querySelector(".wrap");
const hideSection = document.querySelector(".hide-section");
const testSectionWrap = document.querySelector(".test-section-wrap");

function modalOn() {
  wrapper.classList.add("modal-on");
}
function modalOff() {
  wrapper.classList.remove("modal-on");
}

function transMode() {
  modeTransModal.classList.add("d-none");
  hideSection.classList.remove("d-none");
}

function uploadFromPC() {
  const testPaperUploadInput = document.querySelector("#test_paper_upload");
  testPaperUploadInput.click();
}

function openTestSection(input) {
  const testFileIframe = document.querySelector("#iframe_test_file");

  hideSection.classList.add("d-none");
  testSectionWrap.classList.remove("d-none");
  testFileIframe.src =
    "https://docs.google.com/document/d/1E_0U7w2f_kJO0SCSPeccJdNBc9wpZWeCowgOmWP_Amk/edit";
}

testStartBtn.addEventListener("click", () => {
  modalOn();
  if (modeTransModal.classList.contains("d-none")) {
    modeTransModal.classList.remove("d-none");
  }
});
modeTransModalCancleBtn.addEventListener("click", () => {
  modeTransModal.classList.add("d-none");
  modalOff();
});
modeTransModalTransBtn.addEventListener("click", () => {
  modalOff();
  transMode();
});
