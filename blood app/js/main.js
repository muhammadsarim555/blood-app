// var overlay = document.getElementById('overlay');
// setInterval(load, 3000)


//     function load () {


//         // document.body.removeChild(overlay);
//         document.querySelector('div').style.display = 'none';
//     }


// *****************************************************************************************************************************

// Animations init

new WOW().init();
// *******************************************************************************************************************************
// var home = document.getElementById('targetHomeBtn').style.display ='none';
var provider = new firebase.auth.GoogleAuthProvider();

var targetHomeBtn = document.getElementById('targetHomeBtn');

function googelSignIn() {
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      var targetHomeBtn = document.getElementById('targetHomeBtn');

      // console.log(user)
      // console.log('token', token);
      // console.log('user', user);
      alert('you have got');
      targetHomeBtn.style.display = "inline";
      targetHomeBtn.style.width = "300px";

      localStorage.setItem('userObject', JSON.stringify(user));
      // ...


      console.log('uid ', user.uid);
      console.log('email', user.email);
      console.log('name', user.displayName);

    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error.code);
      console.log(error.message);
      alert('uid not get');
      // ...

    })
}

// function objData(){
// let a = document.getElementById('objData');
// // a.addEventListener('load' , 
//     a.innerHTML = user.email;
// }

// *******************************************************************************************************************************
// let targetBtn = document.getElementById('target');
let targetBtn = document.getElementsByClassName('targetbloodGroup')
let bloodGroup = document.getElementById('bloodGroup');
// targetBtn.addEventListener('click', 
for (let i = 0; i < targetBtn.length; i++) {


  targetBtn[i].addEventListener('click', function blood() {

    bloodGroup.innerHTML = this.innerHTML;
    // console.log(this);


    // console.log(targetBtn);

  })
}
//  console.log( bloodGroup.innerText  = targetBtn);
// )


// *******************************************************************************************************************************
// for hide content

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', function h(){
//   btn1.style.display = 'none';
// } )

// *******************************************************************************************************************************

// window.addEventListener('load', 
// function chUer(){
//     let targetHome = document.getElementById('targetHomeBtn');
//     let flag = false;

//     if(flag === true){

//       targetHome.style.visibility = 'visible';
//     }
//     else{
//       targetHome.style.visibility = 'hidden';

//     }

// })

// *******************************************************************************************************************************
const auth = firebase.auth()
const firebaseDb = firebase.database()


// post  function
function post() {
  let postName = document.getElementById('PostName').value;
  let postNumber = document.getElementById('postNumber').value;
  let postBottle = document.getElementById('postBottle').value;
  let postBloodGroup = document.getElementById('postBloodGroup').value;
  // console.log(postName, postNumber,postBottle,postBloodGroup);
  let postErrorName = document.getElementById('postErrorName');
  let postErrorNumber = document.getElementById('postErrorNumber');
  let postErrorBottles = document.getElementById('postErrorBottles');
  let postErrorBloodGroup = document.getElementById('postErrorBloodGroup');

  let data = document.getElementById('data');

  if (postName.length >= 3) {
    postErrorName.style.display = 'none'

  }

  else {
    postErrorName.style.color = '#ffbb33'
    postErrorName.innerHTML = 'Name must be 3 characters!'
    return false

  }

  if (postNumber.length === 11) {
    postErrorNumber.style.display = 'none'
  }
  else {
    postErrorNumber.style.color = '#ffbb33'
    postErrorNumber.innerHTML = 'numbers must be 11 '
    return false
  }

  if (postBottle == 0) {
    // alert('han')
    postErrorBottles.style.color = '#ffbb33'
    postErrorBottles.innerHTML = 'it must be selected'
    console.log(postBottle);
    return false;

  }
  else {
    postErrorBottles.style.display = 'none';
  }

  if (postBloodGroup == 1) {
    // alert('chekc')
    console.log(postBloodGroup, 'postBloodGroup')
    postErrorBloodGroup.style.color = '#ffbb33'
    postErrorBloodGroup.innerHTML = 'select your blood group'
    return false;
  }

  else {
    postErrorBloodGroup.style.display = 'none';
  }


  // var uid = result.user.uid;
  var obj = {
    name: postName,
    number: postNumber,
    bottles: postBottle,
    bloodGroup: postBloodGroup,

    // uid : uid,
  }

  // console.log(currentUser)
  firebase.database().ref("BloodUsers/" + "/").push(obj)
  console.log('success insert in database ');
  document.getElementById('forlink').innerHTML = "your post has been submited click here for more ";
  // console.log('uid', uid);
  // reset();
  // location = "userpost.html"
  // postName.value = " ";
  // postNumber.innerHTML = null;
  // postBottle.innerHTML = null;
  // postBloodGroup.innerHTML = null;

}

// firebase.database().ref("BloodUsers/").child().on("value").then((postData )=>{
// var dt = postData.val();
// console.log(dt.name ,"database");
function getUserPost() {
// var userData = document.getElementsByClassName('userData');
firebaseDb.ref("BloodUsers/" ).once("value", (postData) => {
  let arr = [];
  let data = postData.val()
  // console.log(data);
 
  for(let key in data ){
    // console.log(
      arr.push(data[key]);
  }
  
  let addpostdata = document.getElementById('addpostdata');
  console.log(arr);
  arr.map((v,i)=>{
    var addpost = document.createElement("div");
    addpost.setAttribute("id", "addpost");
    var footer = document.createElement('div');
    footer.setAttribute("class", "cardfooter");
    var h4name = document.createElement('h5');
    var h4namenode = document.createTextNode(v.name);
    h4name.className = "name";
    h4name.appendChild(h4namenode);
    footer.appendChild(h4name);
    var h6 = document.createElement('h6');
    // var h6node = document.createTextNode(d.Price);
    h6.innerHTML = "Bottles: " + v.bottles;
    //   h6.appendChild(h6node);
    footer.appendChild(h6);
    var model = document.createElement('h6');
    model.className = "category";
    model.innerHTML = "Group: " + v.bloodGroup;
    // var modelnode = document.createTextNode(d.Model);
    // model.appendChild(modelnode);
    footer.appendChild(model);
    var category = document.createElement('h6');
    category.className = "category";
    category.innerHTML = "Number: " + v.number;
    // var categorynode = document.createTextNode(d.Category);
    // category.appendChild(categorynode);
    footer.appendChild(category);
    
    var hr = document.createElement('hr');
    footer.appendChild(hr);
        addpost.appendChild(footer);
        addpostdata.appendChild(addpost);
  }  )
})

}








// *******************************************************************************************************************************

// Material Select Initialization
// $(document).ready(function() {
//     $('.mdb-select').material_select();
//           })
//   });


// function formRegister(){
//    let targetRegisterBtnForLink = document.getElementById('targetRegisterBtnForLink').innerHTML = 'Login';
//    targetRegisterBtnForLink.setAttribute('id' , 'targetLoginBtnForLink' )
//    let targetLoginBtn = document.getElementById('targetLoginBtn').innerHTML = 'Register';
// //    targetLoginBtn.setAttribute('id' , 'targetRegisterBtn')
//     let targetLogin=  document.getElementById('targetLogin').innerHTML = 'Register';
//     }


// function changeValueOfSignUp(){
//     let targetLogin = document.getElementById('targetLogin');
//     let targetLoginBtn = document.getElementById('targetLoginBtn').style.display='none';
//     let targetRegisterBtn = document.getElementById('targetRegisterBtn').style.display = "inline";
//     let password = document.getElementById('password');
//     let targetRegisterBtnForLink = document.getElementById('targetRegisterBtnForLink').style.display = 'none';
//     let targetLoginBtnForLink = document.getElementById('targetLoginBtnForLink').style.display = 'inline';
//     targetLogin.innerHTML =` <div class="text-center ">
//     <h3 class="white-text " id="targetLogin"><i class="fa fa-user white-text"></i> Register:</h3>

// </div>`
// targetLoginBtn.style.display = 'none';

// }

// for hiding register form
// function btnLoad(){
//     let targetRegisterBtn = document.getElementById('targetRegisterBtn').style.display ="none";
//     let targetLoginBtnForLink = document.getElementById('targetLoginBtnForLink').style.display = 'none';

// }

// *******************************************************************************************************************************





// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.js')
    .then(function () { console.log('Service Worker Registered'); })
}
// *******************************************************************************************************************************

// home.style.display = 'none';
var obj = localStorage.getItem('userObject')
var userData = JSON.parse(obj);
var flag = false;
// if(obj === true ){
//   console.log('good');
// home.style.display = 'inline';
// }
console.log(userData, "=============");
// var home = document.getElementById('targetHomeBtn').
