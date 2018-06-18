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


function googelSignIn(){
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        var targetHomeBtn = document.getElementById('targetHomeBtn');

        // console.log(user)
        // console.log('token', token);
        console.log('user', user);
        console.log('email', user.email);
        console.log('name', user.displayName);
        localStorage.setItem('userObject', JSON.stringify(user));
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
    
    // function objData(){
    // let a = document.getElementById('objData');
    // // a.addEventListener('load' , 
    //     a.innerHTML = user.email;
    // }
    
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
  
  
  // post  function
  function post() {
      let postName = document.getElementById('PostName').value;
      let postNumber = document.getElementById('postNumber').value;
      let postBottle = document.getElementById('postBottle').value;
      let postBloodGroup = document.getElementById('postBloodGroup').value;
        // console.log(postName, postNumber,postBottle,postBloodGroup);
         let postErrorName =  document.getElementById('postErrorName');
         let postErrorNumber = document.getElementById('postErrorNumber');
          let postErrorBottles = document.getElementById('postErrorBottles');
        let postErrorBloodGroup = document.getElementById('postErrorBloodGroup');


  }


        let modal = document.getElementById('modal');
        modal.innerHTML = `<!-- Central Modal Medium Success -->
        <div class="modal fade" id="centralModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-notify modal-success" role="document">
                <!--Content-->
                <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <p class="heading lead">Modal Success</p>
        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true" class="white-text">&times;</span>
                                                </button>
                    </div>
        
                    <!--Body-->
                    <div class="modal-body">
                        <div class="text-center">
                            <i class="fa fa-check fa-4x mb-3 animated rotateIn"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam
                                blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat.
                                Esse ratione fuga, enim, ab officiis totam.</p>
                        </div>
                    </div>
        
                    <!--Footer-->
                    <div class="modal-footer justify-content-center">
                        <a type="button" class="btn btn-primary">Get it now <i class="fa fa-diamond ml-1"></i></a>
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">No, thanks</a>
                    </div>
                </div>
                <!--/.Content-->
            </div>
        </div>
        <!-- Central Modal Medium Success-->
        
        <!-- Button trigger modal -->
        <div class="text-center">
            <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#centralModalSuccess">Launch Modal Success <i class="fa fa-eye ml-1"></i></a>
        </div>`
1
        
      
      
      
    




        // if(postName.length >= 3 ){
        //   postErrorName.style.color = '#2BBBAD'
        // postErrorName.innerHTML = 'Good!'
            
        // }
        
        //   else 
          
        //    { postErrorName.style.color = '#ffbb33'
        //    postErrorName.innerHTML = 'Name must be 3 characters!'
        // }

        // if(postNumber.length === 11   ){
        //   postErrorNumber.style.color = '#2BBBAD'
        //   postErrorNumber.innerHTML = 'Good!'
        // }
        // else{
        //   postErrorNumber.style.color = '#ffbb33'
        //   postErrorNumber.innerHTML = 'numbers must be 11 '
        // }
        
        // if(postBottle === " " ){
        //   alert('good');
          // postErrorBottles.style.color = '#2BBBAD'
          // postErrorBottles.innerHTML = 'Good!'
        // }
        // else{
        //  alert('d');
          // postErrorBottles.style.color = '#ff4081'
          // postErrorBottles.innerHTML = "Select any one"
        // }


      // }
    
    // else{

    // }
    //   // if (name === '' || name === " ") {
      //       // swal({
        //           // title: "Warning!",
  //           // text: "Please enter you name.",
  //           // icon: "warning",
  //       // });
  //   }
  //   else if (password.length < 6) {
    //       swal({
  //           title: "Warning!",
  //           text: "Please enter atleast 6 number",
  //           icon: "warning",
  //       });
  //   } else {
    //       auth.createUserWithEmailAndPassword(email, password)
//           .then((data) => {
  //               var uid = data.user.uid;
  //               var objData = {
    //                   email: email,
    //                   password : password,
    //                   uid : uid,
//               }
//               console.log('success');
//               console.log('uid', uid);
//               firebaseDb.ref("BloodUsers/" + uid + '/').set(objData)
//                   .then(()=> {
  //                       swal({
    //                           title: "Success!",
    //                           text: "congratulations",
    //                           icon: "success",
    //                       });
    //                       // location = 'index.html'
    //                   })
    //           .catch((error) => {
      //             console.log(error.message)
      //               // Handle Errors here.
      //               swal({
        //                   title: "Warning!",
        //                   text: error.message,
    //                   icon: "warning",
    //               });
    //               // ...
    //           });
    //   }
    // }
    
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
var obj= localStorage.getItem('userObject')
var userData = JSON.parse(obj) ;
var flag = false;
// if(obj === true ){
//   console.log('good');
  // home.style.display = 'inline';
// }
console.log(userData,"=============");
// var home = document.getElementById('targetHomeBtn').
