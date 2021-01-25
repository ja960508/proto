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
  } else {
    backBtn.classList.remove("mobile");
    cancleBtn.classList.remove("mobile");
  }
}

window.onload = setPhotoLayoutHeight();
checkDevice();
