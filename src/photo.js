const sample = {
  keyword: "sample_keyword",
  image: "./src/images/sample.jpg",
  title: "sample_image",
  sender: "B511153 Leejooam",
  cancleButton: "./src/images/photo_section/PNG_cancle_gray.png",
};
const targetUl = document.querySelector(".photo-layout");
const sampleBtn = document.querySelector(".make-sample");
const body = document.querySelector("body");

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

function addSampleList() {
  makeList();
}

function deleteList(event) {
  const targetList = event.target.parentNode.parentNode;
  targetUl.removeChild(targetList);
}

function makeList() {
  const imageNumber =
    (targetUl.childElementCount + 1) / 10 >= 1
      ? `${targetUl.childElementCount + 1}`
      : `0${targetUl.childElementCount + 1}`;

  const li = document.createElement("li");
  const photoNum = document.createElement("div");
  const imageContainer = document.createElement("div");
  const imageSection = document.createElement("div");
  const photoDeleteBtn = document.createElement("button");
  const imageInfo2 = document.createElement("div");
  const imageKeyword = document.createElement("div");
  const imagetitle = document.createElement("div");
  const imagesender = document.createElement("div");
  const sampleImage = document.createElement("img");
  const deleteImage = document.createElement("img");
  const imageInfo1 = document.createElement("div");

  li.classList.add("photo-items");
  photoNum.classList.add("photo-num", "col-1", "toslide-font-small-normal");
  imageContainer.classList.add("image-container", "col-10");
  imageSection.classList.add("image-section");
  photoDeleteBtn.classList.add("photo-delete-btn", "col-1");
  imageInfo1.classList.add("image-info1");
  imageInfo2.classList.add("image-info2");
  imageKeyword.classList.add("image-keyword", "toslide-font-small-medium");
  imagetitle.classList.add("image-title", "toslide-font-large-normal");
  imagesender.classList.add("image-sender", "toslide-font-small-normal");

  photoNum.innerHTML = imageNumber;
  sampleImage.src = sample.image;
  imageKeyword.innerHTML = sample.keyword;
  imagetitle.innerHTML = `${sample.title}${imageNumber}.jpg`;
  imagesender.innerHTML = sample.sender;
  deleteImage.src = sample.cancleButton;
  photoDeleteBtn.onclick = deleteList;

  photoDeleteBtn.append(deleteImage);
  imageSection.append(sampleImage, imageInfo2);
  imageContainer.append(imageInfo1, imageSection);
  imageInfo1.append(imageKeyword, imagesender);
  imageInfo2.append(imagetitle);
  li.append(photoNum, imageContainer, photoDeleteBtn);
  targetUl.appendChild(li);
}

function setPhotoLayoutHeight() {
  const body = document.querySelector("body");
  const header = document.querySelector(".header-wrap").offsetHeight;
  const btnGruop = document.querySelector(".btn-group-wrap").offsetHeight;
  const option = document.querySelector(".option-wrap").offsetHeight;
  const footer = document.querySelector(".footer-wrap").offsetHeight;
  const photoLayout = document.querySelector(".photo-layout");

  photoLayout.style.height =
    body.offsetHeight - (header + btnGruop + option + footer) + "px";
}

function checkDevice() {
  const backBtn = document.querySelector(".toslide-back-btn");
  const cancleBtn = document.querySelector(".photo-section-cancle");
  const photoSection = document.querySelector(".photo-toggle-section");

  console.log(is_mobile());

  if (is_mobile()) {
    backBtn.classList.add("mobile");
    cancleBtn.classList.add("mobile");
    photoSection.classList.add("mobile");
    alert("mobile");
  } else {
    backBtn.classList.remove("mobile");
    cancleBtn.classList.remove("mobile");
    photoSection.classList.remove("mobile");
    alert("web");
  }
}

sampleBtn.addEventListener("click", addSampleList);
window.onload = setPhotoLayoutHeight();
checkDevice();
