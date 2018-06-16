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
var provider = new firebase.auth.GoogleAuthProvider();

function googelSignIn(){
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user)
        // console.log('token', token);
        console.log('user', user);
        
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error.code);
        console.log(error.message);
        
        // ...

      })
    }
    // *******************************************************************************************************************************
    // let targetBtn = document.getElementById('target');
    let targetBtn =  document.getElementsByClassName('targetbloodGroup')
    let bloodGroup = document.getElementById('bloodGroup');
    // targetBtn.addEventListener('click', 
      for(let i = 0 ; i<targetBtn.length; i++){
       
 
      targetBtn[i].addEventListener('click',    function blood(){ 
        
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


// signup function
function signUp() {
  // var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log(email, password)

  if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      swal({
          title: "Warning!",
          text: "Please enter you email address. example@gmail.com",
          icon: "warning",
      });
  
  // if (name === '' || name === " ") {
      // swal({
          // title: "Warning!",
          // text: "Please enter you name.",
          // icon: "warning",
      // });
  }
  else if (password.length < 6) {
      swal({
          title: "Warning!",
          text: "Please enter atleast 6 number",
          icon: "warning",
      });
  } else {
      auth.createUserWithEmailAndPassword(email, password)
          .then((data) => {
              var uid = data.user.uid;
              var objData = {
                  email: email,
                  password : password,
                  uid : uid,
              }
              console.log('success');
              console.log('uid', uid);
              firebaseDb.ref("BloodUsers/" + uid + '/').set(objData)
                  .then(()=> {
                      swal({
                          title: "Success!",
                          text: "congratulations",
                          icon: "success",
                      });
                      // location = 'index.html'
                  })
          })
          .catch((error) => {
            console.log(error.message)
              // Handle Errors here.
              swal({
                  title: "Warning!",
                  text: error.message,
                  icon: "warning",
              });
              // ...
          });
  }
}

// *******************************************************************************************************************************


// *******************************************************************************************************************************
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