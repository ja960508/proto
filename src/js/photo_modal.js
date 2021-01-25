const lecturerImageSendBtn = document.querySelector(".lecturer-image-send");
const modalCloseBtn = document.querySelector(
  ".modal__photo-upload-cancle-select"
);

function openSendImageModal() {
  const modal = document.querySelector(".modal__wrap");
  const wrap = document.querySelector(".wrap");
  wrap.classList.add("modal-on");
  modal.classList.remove("d-none");
}

function closeSendImageModal() {
  const modal = document.querySelector(".modal__wrap");
  const wrap = document.querySelector(".wrap");
  wrap.classList.remove("modal-on");
  modal.classList.add("d-none");
}

function closeKeyword(event) {
  console.log(event);
}

lecturerImageSendBtn.addEventListener("click", openSendImageModal);
modalCloseBtn.addEventListener("click", closeSendImageModal);
