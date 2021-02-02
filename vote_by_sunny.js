function change_to(kind) {
  if (kind == "message") {
    document.querySelector(".message_list").style.display = "block";
    document.querySelector(".photo_list").style.display = "none";
  } else {
    document.querySelector(".message_list").style.display = "none";
    document.querySelector(".photo_list").style.display = "block";
  }
}

var started_voting = false;
var listener_path = null;
function getting_voting_data() {
  if (started_voting) return;

  console.log("voting started");
  started_voting = true;
  var u = parent.firebase.auth().currentUser;
  var email_hash = parent.sha256(u.email);

  listener_path = parent.firebase
    .database()
    .ref(parent.myts + "/backup")
    .child(u.uid)
    .child("backup_current")
    .on("child_added", function (snapshot) {
      console.log("child added", snapshot.val());
      insert_comments_into_div(snapshot.val());
    });
  listener_path = parent.firebase
    .database()
    .ref(parent.myts + "/backup")
    .child(u.uid)
    .child("backup_current")
    .on("child_removed", function (snapshot) {
      console.log("child removed", snapshot.val());
    });
  listener_path = parent.firebase
    .database()
    .ref(parent.myts + "/backup")
    .child(u.uid)
    .child("backup_current")
    .on("child_changed", function (snapshot) {
      console.log("child changed", snapshot.val());
      insert_comments_into_div(snapshot.val());
    });
}

function stop_getting_voting_data(path) {
  started_voting = false;
  try {
    path.off("child_added");
  } catch (err) {
    console.log(err.message);
  }
  try {
    path.off("child_changed");
  } catch (err) {
    console.log(err.message);
  }

  try {
    path.off("child_removed");
  } catch (err) {
    console.log(err.message);
  }
}

function findObjectByKey_in_array_and_return_index(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    //console.log(i,array[i]);
    if (array[i][key] === value) {
      {
        console.log(i, array[i][key]);
        return i;
      }
    }
  }
  return -1;
}
var msg_newly_arrived666 = [];
var voted_comments = [];
function insert_comments_into_div(data) {
  var idx = findObjectByKey_in_array_and_return_index(
    voted_comments,
    "id",
    data.id
  );
  //console.log(voted_comments.length);
  if (idx != -1) {
    voted_comments.splice(idx, 1);
    console.log(voted_comments.length);
  }
  voted_comments.push(data);
  //console.log(voted_comments.length);
  //console.log(data);
  sorting_by_property();

  return;
  sort_according_sorting_order(data, function (rst) {
    var table = document.getElementById("msg_table");
    var cnt = document.getElementById("msg_table").rows.length + 1;
    var new_msg = get_message(data, cnt);
    var row = table.insertRow(0);
    row.id = data.id;
    row.innerHTML = new_msg;
  });

  //element.innerHTML=msg_template;
  //document.getElementById('messages_div').appendChild(element);
  //document.body.appendChild(element);
}
function get_message(data, cnt) {
  //console.log(data);
  var msg_cnt = cnt.toString();
  var msg_hash = data.hash;
  var msg_body = data.pure_comment_whole;
  var msg_id = data.myidinfo;
  var msg_name = data.mynameinfo;
  var like = data.like;

  var msg_template = ``;

  var hash_remove = "";
  if (msg_hash == "") {
    hash_remove = "style='overflow:hidden;visibility:hidden'";
  } else hash_remove = "style='overflow:hidden;cursor:pointer'";

  msg_template =
    `
            <td class="messageFont">` +
    msg_cnt +
    `</td>
            <td width="60%" class="d-flex flex-column">
              <div class="purpleFont mb-1"  onclick="toAps_for_voting('` +
    data.id +
    `')" ` +
    hash_remove +
    `>` +
    msg_hash +
    `</div>
              <div class="question" onclick="toAps_for_voting('` +
    data.id +
    `')" style="overflow:none;cursor:pointer">` +
    msg_body +
    `</div>
            </td>
            <td width="20%" valign="top" class="messageFont" >` +
    like +
    `</td>            
            `;

  return msg_template;
}

var current_sorting_order = "Time";
//var prev_sorting_order = "Time";
function change_sorting(selectObject) {
  var value = selectObject.value;
  //console.log(value);
  if (current_sorting_order != value) {
    current_sorting_order = value;
    sorting_by_property();
  }
}
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = (result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0);

    return result * sortOrder;
  };
}
function sorting_by_property() {
  voted_comments = JSON.parse(JSON.stringify(voted_comments));

  if (current_sorting_order == "default")
    voted_comments.sort(dynamicSort("-send_time"));
  else if (current_sorting_order == "voting")
    voted_comments.sort(dynamicSort("-like"));

  //console.log(myparent.comment_collections);

  $("#msg_table_vote tr").remove();

  var table = document.getElementById("msg_table_vote");
  table.innerHTML = "";

  for (var i = 0; i < voted_comments.length; i++) {
    //var cnt =document.getElementById('msg_table_vote').rows.length+1;
    var cnt = i + 1;
    //console.log(myparent.comment_collections[i]);
    //onsole.log(voted_comments[i]);
    var new_msg = get_message(voted_comments[i], cnt);
    var row = table.insertRow();
    //이 클래스들이 바뀔 수 있다
    //"messageObject d-flex justify-content-around align-items-center p-1"
    //"messageObject d-flex justify-content-around align-items-center p-1"      >

    row.classList.add("messageObject");
    row.classList.add("d-flex");

    row.classList.add("justify-content-around");
    row.classList.add("align-items-center");
    row.classList.add("p-1");

    row.id = voted_comments[i].id;
    //console.log("new_msg",new_msg);
    row.innerHTML = new_msg;
  }
}

var current_vote_id = "";
function toAps_for_voting(id) {
  current_vote_id = id;
  //parent.document.getElementById("left_arrow_vote").style.display="none";
  //parent.document.getElementById("right_arrow_vote").style.display="none";

  var idx = findObjectByKey_in_array_and_return_index(voted_comments, "id", id);

  parent.document.getElementById("left_arrow_vote").style.display = "block";
  parent.document.getElementById("right_arrow_vote").style.display = "block";

  if (idx == 0) {
    parent.document.getElementById("left_arrow_vote").style.display = "none";
    //parent.document.getElementById("right_arrow_vote").style.display="none";
  }

  if (idx == voted_comments.length - 1) {
    parent.document.getElementById("right_arrow_vote").style.display = "none";
  }

  if (parent.kind_of_app == "toslide_control") {
    parent.navigate_comment_by_click(id);
  } else {
    parent.show_comment_v2(id, true);
  }
  return;
}

function move_comment_to_for_vote(dir) {
  var idx = findObjectByKey_in_array_and_return_index(
    voted_comments,
    "id",
    current_vote_id
  );
  if (dir == "l") {
    idx--;
  } else {
    idx++;
  }

  current_vote_id = voted_comments[idx].id;

  toAps_for_voting(current_vote_id);
}
