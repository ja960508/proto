const modalPhotoUploadBtn = document.querySelector(
  ".modal__photo-upload-select"
);
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
  wrap.classList.toggle("modal-on");
  modal.classList.toggle("d-none");

  if (defaultSection.classList.contains("d-none")) {
    defaultSection.classList.remove("d-none");
    imagePreview.classList.add("d-none");
    imagePreview.src = "";
  }
}

function uploadImage() {
  const modal = document.querySelector(".modal__wrap");
  const wrap = document.querySelector(".wrap");
  const imageNumber =
    targetTbody.childElementCount / 10 >= 1
      ? `${targetTbody.childElementCount}`
      : `0${targetTbody.childElementCount}`;
  const tr = document.createElement("tr");
  currentEnlargement().map((item) => {
    tr.classList.add(item);
  });
  tr.onclick = focusOnTableRow;
  tr.innerHTML = `
  <td class="photo-num toslide-font-small-normal">${imageNumber}</td>
  <td class="image-container">
      <div class="image-section">
          <img src="${imagePreview.src}" class="image-section-image">
          <div class="image-title toslide-font-small-lineheight20-normal">${imageInput.files[0].name}.jpg</div>
      </div>
  </td>
  <td class="btn-container">
      <button class="photo-delete-btn" onclick="deleteList(event)">
          <img src="./src/images/photo_section/PNG_cancle_gray.png" class="delete-btn-image">
      </button>
  </td>
  `;
  targetTbody.appendChild(tr);

  wrap.classList.toggle("modal-on");
  modal.classList.toggle("d-none");
  if (defaultSection.classList.contains("d-none")) {
    defaultSection.classList.remove("d-none");
    imagePreview.classList.add("d-none");
    imagePreview.src = "";
  }
}

lecturerImageSendBtn.addEventListener("click", openSendImageModal);
modalCloseBtn.addEventListener("click", closeSendImageModal);
modalPhotoUploadBtn.addEventListener("click", uploadImage);
