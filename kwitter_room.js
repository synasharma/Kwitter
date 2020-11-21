
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
  

    user_name=localStorage.getItem("username");//getting the name of the user from the local storage//
    document.getElementById("u_name").innerHTML="Welcome "+ user_name+"!";//adding it to the empty h3 tag, along with a welcome and exclamation mark//
    
    function addroom(){
    room_name=document.getElementById("room_name").value;//getting value of room name from html//
    localStorage.setItem("roomname",room_name);//adding it in the local storage//
    firebase.database().ref("/").child(room_name).update({//adding all the roomnames in the database//
      purpose:"adding roomname"//Adding it as a main folder("/")//
    });
    window.location="kwitter_page.html";
    }

       

    function getData() 
    {
      firebase.database().ref("/").on('value', function(snapshot)
     {
       document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) 
     {
       childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
    console.log(Room_names);//Ask ma'am why is capslock?//
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoom(name)
{
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}