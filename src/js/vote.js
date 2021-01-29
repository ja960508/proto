const pictureSection = document.querySelector(".js_picture_tbody");
const messageSection = document.querySelector(".js_message_tbody");

function showMessage() {
  console.log("msg");
  if (messageSection.classList.contains("d-none")) {
    messageSection.classList.remove("d-none");
    pictureSection.classList.add("d-none");
  }
}

function showPicture() {
  console.log("pic");
  if (pictureSection.classList.contains("d-none")) {
    pictureSection.classList.remove("d-none");
    messageSection.classList.add("d-none");
  }
}
