var firebaseConfig = {
      apiKey: "AIzaSyDdijYOD-uLPCkmTRCV2A5tm7XRoYrCM7s",
      authDomain: "kwitter-8fcc6.firebaseapp.com",
      databaseURL: "https://kwitter-8fcc6.firebaseio.com",
      projectId: "kwitter-8fcc6",
      storageBucket: "kwitter-8fcc6.appspot.com",
      messagingSenderId: "804306730325",
      appId: "1:804306730325:web:e36e1a590397b661f3c3dc",
      measurementId: "G-MY6DEJ9KWY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("username");//remove item and get item is always done with the key//
    room_name=localStorage.getItem("roomname");
    
    function send()
    {
      msg=document.getElementById("msg").value;//Creating a package of variables
    firebase.database().ref(room_name).push
      ({
      Name:user_name,
      Message:msg,
      Like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);//conti
console.log(message_data);//contains the message,username and no. of likes//
name=message_data['Name'];
msg=message_data['Message'];
likes=message_data['Like'];
name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag="<h4 class='message_h4'>"+msg+"</h4>";
likes_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id)'>";//we use double quotes when there is anything related to js//
span_tag="<span class='glyphicon glyphicon-thumbs-up'>&nbsp;Like: "+likes+"</span></button><hr>";
row=name_tag+message_tag+likes_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code 
      } });  }); }
getData();

function updatelike(this_id)
{
console.log(this_id);
button_id=this_id;
console.log(button_id);
likes=document.getElementById(button_id).value;//likes stores the current number of likes//
new_likes=Number(likes)+1;
firebase.database().ref(room_name).child(this_id).update({
  Like:new_likes
  });
}


function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}