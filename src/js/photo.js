const targetUl = document.querySelector(".photo-layout");
const enlargeBtn = document.querySelector(".enlargement-btn");
const reductionBtn = document.querySelector(".reduction-btn");
const targetTbody = document.querySelector("#js_tbody");
const nextImageBtn = document.querySelector(".nextImage"),
  prevImageBtn = document.querySelector(".prevImage"),
  lecturerImageSendBtn = document.querySelector(".lecturer-image-send");
let focusTableRowIndex = -1;

let magnifyingGlassController = 0;

const items = [
  {
    name: "202011241641-B711142-이종찬",
  },
  {
    name: "202011241643-B711142-이종찬",
  },
  {
    name: "202011251634-B411042-김영진",
  },
  {
    name: "202011251634-B635453-한재현",
  },
  {
    name: "202011251634-B911085-백지웅",
  },
  {
    name: "202011251638-B711218-황선호",
  },
  {
    name: "B311202-정찬용-202011261633",
  },
  {
    name: "B390036-송주영-202011251639",
  },
  {
    name: "B411119-안승태-202011241643",
  },
  {
    name: "B411119-안승태-202011261634",
  },
  {
    name: "B511042-김재환-202011261634",
  },
  {
    name: "B611110-양민섭-202011241644",
  },
  {
    name: "B611119-오준석-202011241643",
  },
  {
    name: "B611156-이은-202011241645",
  },
  {
    name: "B635453-한재현-202011251638",
  },
  {
    name: "B711002-강소정-202011261634",
  },
  {
    name: "B711012-길상현-202011261635",
  },
  {
    name: "B711069-박선형-202011261637",
  },
  {
    name: "B711107-양수민-202011261633",
  },
  {
    name: "B811087-서예진-202011251636",
  },
];

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
  targetTbody.removeChild(event.target.parentNode.parentNode.parentNode);
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

function focusOnTableRow(event) {
  if (focusTableRowIndex >= 1) {
    targetTbody.childNodes[focusTableRowIndex].classList.remove("focus");
  }
  focusTableRowIndex = event.currentTarget.rowIndex + 1;
  event.currentTarget.classList.add("focus");
}

function focusNextImage() {
  if (
    focusTableRowIndex < 1 ||
    focusTableRowIndex >= targetTbody.childNodes.length - 1
  )
    return;
  targetTbody.childNodes[focusTableRowIndex].classList.remove("focus");
  targetTbody.childNodes[focusTableRowIndex + 1].classList.add("focus");
  focusTableRowIndex += 1;
}

function focusPrevImage() {
  if (focusTableRowIndex <= 1) return;
  targetTbody.childNodes[focusTableRowIndex].classList.remove("focus");
  targetTbody.childNodes[focusTableRowIndex - 1].classList.add("focus");
  focusTableRowIndex -= 1;
}

function photoMobileCheck() {
  console.log("hello");
  if (is_mobile()) {
    prevImageBtn.classList.add("mobile");
    nextImageBtn.classList.add("mobile");
    lecturerImageSendBtn.classList.add("mobile");
    
    //document.getElementById("photo_table").style.height= (window.innerHeight -300)+"px";
  }
  else
  {
    document.getElementById("photo_footer").classList.remove("bottom_div1") ;
  }
}

function makeList() {
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
            <img src="./src/images/sample_photos/${
              items[targetTbody.childElementCount % 20].name
            }.jpg" class="image-section-image">
            <div class="image-title toslide-font-small-lineheight20-normal">${
              items[targetTbody.childElementCount % 20].name
            }.jpg</div>
        </div>
    </td>
    <td class="btn-container">
        <button class="photo-delete-btn" onclick="deleteList(event)">
            <img src="./src/images/photo_section/PNG_cancle_gray.png" class="delete-btn-image">
        </button>
    </td>
    `;

  targetTbody.appendChild(tr);
}

//     <div class="image-info">
//     <div class="image-keyword toslide-font-small-medium">sample_keyword</div>
//     <div class="image-sender toslide-font-small-normal">B511153 Leejooam</div>
//     </div>

const sampleBtn = document.querySelector(".make-sample");
sampleBtn.addEventListener("click", makeList);

enlargeBtn.addEventListener("click", enlargeImages);
reductionBtn.addEventListener("click", reductionImages);
photoMobileCheck();
