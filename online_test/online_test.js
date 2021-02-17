const testStartBtn = document.querySelector(".start-test");
const modeTransModal = document.querySelector(".mode-trans-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const hideSection = document.querySelector(".hide-section");
const testSectionWrap = document.querySelector(".test-section-wrap");
const testPaperUploadInput = document.querySelector("#test_paper_upload");

let interval;

function modalOn() {
  modalOverlay.classList.add("modal-on");
}
function modalOff() {
  modalOverlay.classList.remove("modal-on");
}

function transMode() {
  modalOff();

  modeTransModal.classList.add("d-none");
  hideSection.classList.remove("d-none");
}

function cancleTransModal() {
  modeTransModal.classList.add("d-none");
  modalOff();
}

function uploadFromPC() {
  testPaperUploadInput.click();
}
function uploadFromGoogleDrive() {
  const setTestNameModal = document.querySelector(".set-test-name-modal");
  const fileName = document.querySelector("#file_name");

  fileName.value = "google drive file";

  alert("google Drive API");

  modalOn();
  setTestNameModal.classList.remove("d-none");
}

function loadTestPaper() {
  const loadPaperModal = document.querySelector(".load-paper-modal");

  modalOn();
  loadPaperModal.classList.remove("d-none");
}
function closeLoadPaperModal() {
  const loadPaperModal = document.querySelector(".load-paper-modal");

  modalOff();
  loadPaperModal.classList.add("d-none");
}

function openTestEditSection(input) {
  const setTestNameModal = document.querySelector(".set-test-name-modal");
  const fileName = document.querySelector("#file_name");

  fileName.value = testPaperUploadInput.value.split(/(\\|\/)/g).pop();
  modalOn();
  setTestNameModal.classList.remove("d-none");
}

function setTestName() {
  const setTestNameModal = document.querySelector(".set-test-name-modal");
  const testFileIframe = document.querySelector("#iframe_test_file");
  const fileName = document.querySelector("#file_name");
  const testName = document.querySelector("#test_name");
  const toslideTestName = document.querySelector("#toslide_test_name");

  modalOff();
  setTestNameModal.classList.add("d-none");
  hideSection.classList.add("d-none");
  testSectionWrap.classList.remove("d-none");
  testFileIframe.src =
    "https://docs.google.com/document/d/1E_0U7w2f_kJO0SCSPeccJdNBc9wpZWeCowgOmWP_Amk/edit";
  toslideTestName.innerText = testName.value;

  testName.value = "";
  fileName.value = "";
}
function setTestNameCancle() {
  const setTestNameModal = document.querySelector(".set-test-name-modal");
  const fileName = document.querySelector("#file_name");
  const testName = document.querySelector("#test_name");

  fileName.value = "";
  testName.value = "";
  testPaperUploadInput.value = "";
  modalOff();
  setTestNameModal.classList.add("d-none");
}

function cancleSetTestSessionModal() {
  const modal = document.querySelector(".set-test-session-modal");
  let sessionNum = document.querySelector("#session_num");
  let sessionName = document.querySelector("#session_name");
  let testPaperAmount = document.querySelector("#test_paper_amount");

  sessionNum = sessionName = testPaperAmount = "";
  modal.classList.add("d-none");
  modalOff();
}

function openSetTestSessionModal() {
  const modal = document.querySelector(".set-test-session-modal");

  modalOn();
  modal.classList.remove("d-none");
}

function setTestSession() {
  const modal = document.querySelector(".set-test-session-modal");

  console.log("set session");
  modal.classList.add("d-none");
  modalOff();

  readyToStartTest();
}

function readyToStartTest() {
  const testOff = document.querySelector(".test-off");
  const testTimer = document.querySelector(".test-timer");
  const testCheck = document.querySelector(".test-check");
  const attendance = document.querySelector(".attendance");

  testCheck.classList.add("d-none");
  testTimer.classList.remove("d-none");
  testOff.classList.remove("d-none");
  attendance.classList.remove("d-none");
}

function toggleTestMode() {
  const testOn = document.querySelector(".test-on");

  if (testOn.classList.contains("d-none")) {
    openTestStartModal();
  } else {
    openTestStopModal();
  }
}

function openTestStartModal() {
  const modal = document.querySelector(".test-start-modal");

  modalOn();
  modal.classList.remove("d-none");
}
function openTestStopModal() {
  const modal = document.querySelector(".test-stop-modal");

  modalOn();
  modal.classList.remove("d-none");
}

function cancleTestStartModal() {
  const modal = document.querySelector(".test-start-modal");
  modalOff();
  modal.classList.add("d-none");
}
function cancleTestStopModal() {
  const modal = document.querySelector(".test-stop-modal");
  modalOff();
  modal.classList.add("d-none");
}

function testStart() {
  const testOff = document.querySelector(".test-off");
  const testOn = document.querySelector(".test-on");
  const modal = document.querySelector(".test-start-modal");

  testOff.classList.add("d-none");
  testOn.classList.remove("d-none");
  modalOff();
  modal.classList.add("d-none");
}
function testStop() {
  const testOff = document.querySelector(".test-off");
  const testOn = document.querySelector(".test-on");
  const modal = document.querySelector(".test-stop-modal");

  clearTimer();
  testOn.classList.add("d-none");
  testOff.classList.remove("d-none");
  modalOff();
  modal.classList.add("d-none");
}

function checkTimerHourInputValue(e) {
  if (e.value > 23) {
    e.value = 23;
    return;
  } else if (e.value < 10) {
    e.value = `0${e.value}`;
    return;
  }
}

function checkTimerInputValue(e) {
  if (e.value > 59) {
    e.value = 59;
    return;
  } else if (e.value < 10) {
    e.value = `0${e.value}`;
    return;
  }
}

function clearTimer() {
  const timerStartBtn = document.querySelector("#timer_start");
  const hourInput = document.querySelector("#hour_input");
  const minuteInput = document.querySelector("#minute_input");
  const secondInput = document.querySelector("#second_input");

  hourInput.value = "";
  minuteInput.value = "";
  secondInput.value = "";
  timerStartBtn.disabled = false;
  clearInterval(interval);
}

function timerStart() {
  const hourInput = document.querySelector("#hour_input");
  const minuteInput = document.querySelector("#minute_input");
  const secondInput = document.querySelector("#second_input");
  const timerStartBtn = document.querySelector("#timer_start");

  timerStartBtn.disabled = true;

  hourInput.value = hourInput.value || `00`;
  minuteInput.value = minuteInput.value || `00`;
  secondInput.value = secondInput.value || `00`;

  let hourInputValue = String(hourInput.value);
  let minuteInputValue = String(minuteInput.value);
  let secondInputValue = String(secondInput.value);

  interval = setInterval(() => {
    console.log("tick");

    secondInputValue--;
    if (secondInputValue < 0) {
      minuteInputValue--;
      if (minuteInputValue >= 0) {
        secondInputValue = `60`;
      } else {
        hourInputValue--;
        if (hourInputValue >= 0) {
          minuteInputValue = `60`;
          secondInputValue = `00`;
        } else {
          hourInputValue = `00`;
          minuteInputValue = `00`;
          secondInputValue = `00`;
        }
      }
    }

    console.log(hourInputValue.length);
    console.log(hourInputValue);
    secondInputValue =
      secondInputValue.length < 2
        ? `0${secondInputValue}`
        : `${secondInputValue}`;
    minuteInputValue =
      minuteInputValue.length < 2
        ? `0${minuteInputValue}`
        : `${minuteInputValue}`;
    hourInputValue =
      hourInputValue.length < 2 ? `0${hourInputValue}` : `${hourInputValue}`;

    secondInput.value = secondInputValue;
    minuteInput.value = minuteInputValue;
    hourInput.value = hourInputValue;

    secondInput.value === `00` &&
      minuteInput.value === `00` &&
      hourInput.value === `00` &&
      clearTimer();
  }, 1000);
}

function openCloseTestPaperModal() {
  const modal = document.querySelector(".close-test-paper-modal");

  modalOn();
  modal.classList.remove("d-none");
}
function cancleCloseTestPaperModal() {
  const modal = document.querySelector(".close-test-paper-modal");
  modalOff();
  modal.classList.add("d-none");
}
function closeTestPaper() {
  const modal = document.querySelector(".close-test-paper-modal");
  modalOff();

  modal.classList.add("d-none");
  testSectionWrap.classList.add("d-none");
  hideSection.classList.remove("d-none");
}

testStartBtn.addEventListener("click", () => {
  modalOn();
  if (modeTransModal.classList.contains("d-none")) {
    modeTransModal.classList.remove("d-none");
  }
});
