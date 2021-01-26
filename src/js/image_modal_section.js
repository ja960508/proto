const imageInput = document.querySelector("#image_upload");
const uploadBtn = document.querySelector(".select-photo");

// function previewImage(f) {
//   var file = f.files;

//   //사진 한번 불러들이고, 다시 화면 열고  취소하면 에러납니다
//   // 아래 코드 추가 해주세요
//   console.log(f.files.length);
//   if (f.files.length == 0) return;
//   // 확장자 체크
//   if (!/\.(jpg|jpeg|png)$/i.test(file[0].name)) {
//     alert("jpg, png 파일만 선택해 주세요.\n\n현재 파일 : " + file[0].name);

//     // 선택한 파일 초기화
//     f.outerHTML = f.outerHTML;

//     document.getElementById("preview").innerHTML = "";
//   } else {
//     // FileReader 객체 사용
//     var reader = new FileReader();

//     // 파일 읽기가 완료되었을때 실행
//     reader.onload = function (rst) {
//       console.log(rst.target.result);
//       parent.data_picture = rst.target.result;
//       document.getElementById("preview").innerHTML =
//         '<img class="preview_img "src="' + rst.target.result + '">';
//     };

//     // 파일을 읽는다
//     reader.readAsDataURL(file[0]);
//   }
// }

uploadBtn.addEventListener("click", () => {
  imageInput.click();
});
