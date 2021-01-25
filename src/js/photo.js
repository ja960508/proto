const targetUl = document.querySelector(".photo-layout");
const enlargeBtn = document.querySelector(".enlargement-btn");
const reductionBtn = document.querySelector(".reduction-btn");

let magnifyingGlassController = 0;

function enlargeImages() {
  const currentImages = document.querySelectorAll(".photo-items");
  magnifyingGlassController++;
  if (reductionBtn.disabled) {
    const img = document.querySelector(".reductionImage");
    img.src = `./src/images/photo_section/photo_size_control_minus-enabled.svg`;

    reductionBtn.disabled = false;
  }
  for (let i = 0; i < currentImages.length; i++) {
    currentImages[i].classList.add(`enlarge-${magnifyingGlassController}`);
  }

  if (magnifyingGlassController === 2) {
    const img = document.querySelector(".enlargeImage");
    img.src = `./src/images/photo_section/photo_size_control_plus-disabled.svg`;

    enlargeBtn.disabled = true;
  }
}

function reductionImages() {
  const currentImages = document.querySelectorAll(".photo-items");

  for (let i = 0; i < currentImages.length; i++) {
    currentImages[i].classList.remove(`enlarge-${magnifyingGlassController}`);
  }
  magnifyingGlassController--;

  if (enlargeBtn.disabled) {
    const img = document.querySelector(".enlargeImage");
    img.src = `./src/images/photo_section/photo_size_control_plus-enabled.svg`;

    enlargeBtn.disabled = false;
  }

  if (magnifyingGlassController === 0) {
    const img = document.querySelector(".reductionImage");
    img.src = `./src/images/photo_section/photo_size_control_minus-disabled.svg`;

    reductionBtn.disabled = true;
  }
}

function deleteList(event) {
  const targetList = event.target.parentNode.parentNode.parentNode;
  targetUl.removeChild(targetList);
}

function currentEnlargement() {
  if (magnifyingGlassController === 0) {
    return ["photo-items"];
  } else if (magnifyingGlassController === 1) {
    return ["photo-items", "enlarge-1"];
  } else {
    return ["photo-items", "enlarge-1", "enlarge-2"];
  }
}

function makeList() {
  const imageNumber =
    targetUl.childElementCount / 10 >= 1
      ? `${targetUl.childElementCount}`
      : `0${targetUl.childElementCount}`;

  const li = document.createElement("li");
  currentEnlargement().map((item) => {
    li.classList.add(item);
  });
  li.innerHTML = `
    <div class="photo-num toslide-font-small-normal">${imageNumber}</div>
    <div class="image-container">
        <div class="image-info">
            <div class="image-keyword toslide-font-small-medium">sample_keyword</div>
            <div class="image-sender toslide-font-small-normal">B511153 Leejooam</div>
        </div>
        <div class="image-section">
            <img src="./src/images/sample${
              targetUl.childElementCount % 6
            }.jpg" class="image-section-image">
            <div class="image-title toslide-font-small-lineheight20-normal">sample_image${imageNumber}.jpg</div>
        </div>
    </div>
    <div class="btn-container">
        <button class="photo-delete-btn" onclick="deleteList(event)">
            <img src="./src/images/photo_section/PNG_cancle_gray.png" class="delete-btn-image">
        </button>
    </div>
    `;

  targetUl.appendChild(li);
}

const sampleBtn = document.querySelector(".make-sample");
sampleBtn.addEventListener("click", makeList);

enlargeBtn.addEventListener("click", enlargeImages);
reductionBtn.addEventListener("click", reductionImages);
