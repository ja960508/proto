
//window.onload = function(){
//  parent.show_modal_inside_alert_collections("del_all_photo_lecturer");
//}

//const del_all_photos = nonStudent = document.querySelector('.delete-all-photo');
var del_all_photos = document.querySelector('.delete-all-photo');
var current_image_width =100;
function resize_image(increase)
{

  console.log("current_image_width",current_image_width);
  if(increase)
  {
    
    current_image_width  = current_image_width + current_image_width*20/100;
    current_image_width = Math.floor( current_image_width );
    if(current_image_width >100 )
    {
      current_image_width = 100;
    }
    
    
    $(".imageTd").attr('width', current_image_width+"%");
    

	
  }
  else
  {
    console.log("current_image_width",current_image_width);
    current_image_width  = current_image_width - current_image_width*20/100;
    current_image_width = Math.floor( current_image_width );
    
    if(current_image_width < 15 )
    {
      current_image_width = 15;
    }
    $(".imageTd").attr('width', current_image_width+"%");
  }
  console.log("calculated current_image_width",current_image_width);
}
function get_message(src,img_id,cnt,has_keyword)
  {
    
    var msg_cnt ="1";
    var msg_hash ="hash";
    var msg_body ="body";
    var msg_id ="id" ;
    var msg_name ="name";
    var msg_template =``;
    var keyword_style = "display:none";
    if(has_keyword)
    {
      keyword_style = "display:block";
    }
    console.log("delete_a_photo('"+src+"')");
    return msg_template =`
    <td width="10%" align="center" valign="middle"><div class="messageFont">`+cnt+`</div></td>
    <td valign="middle" >
    	<table style="width:100%;">
        <tr >
        <td ></td>
        <td  id="keyword_td" align="left" class="image-keyword toslide-font-small-medium" style="`+keyword_style+`" >
        <div style="width: 40px; overflow: hidden;">
        AAAAAAAAAAAAAAAAAAA
        </div>
        </td>
        <td ></td>
        </tr>
        <tr>
        <td style="display:none" >key</td>
        <td ></td>
        <td  class="imageTd" width="`+current_image_width+`%"  align="center" valign="middle" style="background-color:white;position:relative">
        
          <img onclick="parent.display_photo_to_photo_div('`+img_id+`')" style="cursor:pointer;display:block;" width="100%" height="100%;background-color:red" class="" src=`+src+`    />
        <div style="position: absolute;top: 0px;left:0px;;background-color:white">wonderland hahaha</div>
        <div style="position: absolute;bottom: 0px;right:0px;background-color:white">Alexander</div>
        
        </td>
        
        
        <td ></td>
        
        </tr>
    	</table>
    </td>
    <td width="40px">
          <img onclick="delete_each_photo('`+img_id+`')" width="40" height="40px" style="cursor:pointer;" class="messageClose" src="./src/images/photo_section/PNG_cancle_black.png"    />
    </td>
    `;

    
  }
function  append_image(img_id) {

  var src ="https://drive.google.com/uc?export=view&id="+img_id;
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
            <img onclick="parent.display_photo_to_photo_div('`+img_id+`')" src="`+src+`" class="image-section-image">
            <div class="image-title toslide-font-small-lineheight20-normal">${
              items[targetTbody.childElementCount % 20].name
            }.jpg</div>
        </div>
    </td>
    <td class="btn-container">
        <button class="photo-delete-btn" onclick="delete_each_photo('`+img_id+`')">
            <img src="./src/images/photo_section/PNG_cancle_gray.png" class="delete-btn-image">
        </button>
    </td>
    `;
  
    targetTbody.appendChild(tr);
  }

function append_image_old(img_id) {
  
  /*
  var position = $(".photo-layout").offset(); 
  var height = $(".photo-layout").height(); 
  
  console.log("position",position);
  console.log("height",height);
  $('.imageSize').css({"bottom": position.top+height +100 + "px"});
  */
  var src ="https://drive.google.com/uc?export=view&id="+img_id;

  console.log("src id", src);
  var cnt =document.getElementById('msg_table').rows.length+1;
  //console.log(parent.comment_collections[i]);
  //$("#msg_table tr").remove();
  var table = document.getElementById("msg_table");
  
  var row = table.insertRow(0);
  row.id = img_id;
  var new_msg = get_message(src,img_id,cnt,false);
  
  console.log(new_msg);
  row.innerHTML =new_msg;
  return;
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
  imageContainer.classList.add("image-container", "col-3");
  imageSection.classList.add("image-section");
  photoDeleteBtn.classList.add("photo-delete-btn", "col-1");
  imageInfo1.classList.add("image-info1");
  imageInfo2.classList.add("image-info2");
  imageKeyword.classList.add("image-keyword", "toslide-font-small-medium");
  imagetitle.classList.add("image-title", "toslide-font-large-normal");
  imagesender.classList.add("image-sender", "toslide-font-small-normal");

  photoNum.innerHTML = imageNumber;
  sampleImage.src = src;
  imageKeyword.innerHTML = sample.keyword;
  imagetitle.innerHTML = `${sample.title}${imageNumber}.jpg`;
  imagesender.innerHTML = sample.sender;
  deleteImage.src = sample.cancleButton;
  
  photoDeleteBtn.onclick = deleteList_sunny;

  photoDeleteBtn.append(deleteImage);
  imageSection.append(sampleImage, imageInfo2);
  imageContainer.append(imageInfo1, imageSection);
  imageInfo1.append(imageKeyword, imagesender);
  imageInfo2.append(imagetitle);
  li.append(photoNum, imageContainer, photoDeleteBtn);
  li.id =  src;
  targetUl.appendChild(li);
}

var tobe_deleted_photo_id= "";
var parentId_of_tobe_deleted_photo= "";
function deleteList_sunny(event) {

 
  
  $('#delete_a_photo').modal('show');
  
  const targetList = event.target.parentNode.parentNode;
  tobe_deleted_photo_id  = targetList.id;
  parentId_of_tobe_deleted_photo = targetList;
  console.log(tobe_deleted_photo_id);
  
  return;
  targetUl.removeChild(targetList);
}
function delete_each_photo(id)
{
  tobe_deleted_photo_id = id;
  $('#delete_a_photo').modal('show');
}
function do_actual_delete_a_photo()
{
  
  console.log(tobe_deleted_photo_id);
  $('#'+tobe_deleted_photo_id).remove();
  //targetUl.removeChild(parentId_of_tobe_deleted_photo);
  $('#delete_a_photo').modal('hide');

  
}
function alert_for_del_all_photos()
{
  
  
  $('#delete_all_photos').modal('show');
  return;
  var path = "/revised/services/hwanghi/alert/alert_collections.html";
  show_modal_inside_alert_collections("del_all_photo_lecturer",path);
}

try{
  del_all_photos.onclick = alert_for_del_all_photos;
}
catch(err)
{

}




try
{
  $('.photo-toggle-section').css({"min-width": 0 + "px"});
  $(".sort_option").addClass("responsive_font_1");
  $(".function-text").addClass("responsive_font_1");
  $(".anonimity").addClass("responsive_font_1");
  $(".sound").addClass("responsive_font_1");
}
catch(err)
{

}


try{
  
  document.getElementById('included_alert_collection').name ="alert_collection";
  document.getElementById('included_alert_collection').innerHTML = "";
  document.getElementById('included_alert_collection').setAttribute("w3-include-html","/revised/services/modals_by_sunny.html");

  includeHTML(function(rst){
    //console.log(rst);
  });
}
catch(err)
{
  
}




//$('.imageSize').css({"bottom": 300 + "px"});

