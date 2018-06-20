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
        // console.log('user', user);
        alert('you have got');
        targetHomeBtn.style.display = "inline";
        targetHomeBtn.style.width = "300px";

        localStorage.setItem('userObject', JSON.stringify(user));
        // ...
        
        
        console.log('uid ' , user.uid);
        console.log('email', user.email);
        console.log('name', user.displayName);

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

        let data = document.getElementById('data');
  
        if(postName.length >= 3 ){
          postErrorName.style.display = 'none'
            
        }
        
          else 
          
           { postErrorName.style.color = '#ffbb33'
           postErrorName.innerHTML = 'Name must be 3 characters!'
           return false
          
          }

        if(postNumber.length === 11   ){
          postErrorNumber.style.display = 'none'
        }
        else{
          postErrorNumber.style.color = '#ffbb33'
          postErrorNumber.innerHTML = 'numbers must be 11 '
          return false
        }
        
        if(postBottle == 0 ){
          // alert('han')
          postErrorBottles.style.color = '#ffbb33'
          postErrorBottles.innerHTML = 'it must be selected'
          console.log(postBottle);
          return false;
          
        }
        else{
          postErrorBottles.style.display = 'none';
          }
      
        if(postBloodGroup ==  1){
          // alert('chekc')
          console.log(postBloodGroup, 'postBloodGroup')
          postErrorBloodGroup.style.color = '#ffbb33'
          postErrorBloodGroup.innerHTML = 'select your blood group'
          return false;
        }
        
        else{
          postErrorBloodGroup.style.display = 'none';
      }
      
      
    // var uid = result.user.uid;
    var obj = {
      name: postName,
      number: postNumber ,
      bottles: postBottle ,
      bloodGroup : postBloodGroup  ,
    
    // uid : uid,
    }
  
    // console.log(currentUser)
    firebase.database().ref("BloodUsers/"  + "/").push(obj)
    console.log('success insert in database ');
    // console.log('uid', uid);
    // reset();
    // location = "userpost.html"
    // postName.innerText = " ";
    // postNumber.innerHTML = null;
    // postBottle.innerHTML = null;
    // postBloodGroup.innerHTML = null;
    
  }
    
      // firebase.database().ref("BloodUsers/").child().on("value").then((postData )=>{
      // var dt = postData.val();
      // console.log(dt.name ,"database");
  function getUserPost(){
      var userData = document.getElementsByClassName('userData');
      firebaseDb.ref("BloodUsers/" + "/").once("value", (postData) => {
        // let arr = [];
        postData.forEach(function (childData){
        var usersList = childData.val( );
        console.log(usersList.name,usersList.bottles,usersList.bloodGroup,usersList.number,  "child")
        // arr.push(usersList);
        var currentuser = auth.currentUser.uid;
        console.log(currentuser , "currentUser");
      
        userData[0].innerHTML = usersList.name;
        userData[1].innerHTML = usersList.bottles;
        userData[2].innerHTML = usersList.bloodGroup;
        userData[3].innerHTML = usersList.number;
        // ,usersList.bloodGroup,usersList.;
          
      })
        
    var center = document.getElementsByTagName('center');
    center.innerHTML = `<div class="col-md-2 ">

    <div id="targetAll">
        <div class="card wow fadeInRight" data-wow-delay="0.3s">
            <div class="card-body">
                <!--Header-->
                <div class="text-center ">
                    <h3 class="white-text  ">name </h3>
                    <b id="bloodgroup">blood group</b>
                    <hr class="hr-light mb-3 mt-4">
                    <!-- <br> -->
                    <h6 class="col-md-10 offset-md-1">there are many people who need blood so kindly work with us and save
                        their lifes</h6>
                    <!-- <hr class="hr-light"> -->

                </div>


                <div class="text-center" id="footerCard">

                    <div>
                        <i class="fa fa-phone white-text"></i> 09876654334

                    </div>

                    <!-- <button class="btn btn-outline-white" onclick="post()"> Post</button> -->


                </div>
            </div>
        </div>
    </div>`













})


        // return arr;
      // })
      
      
        // let postDataList = postData.val()
      // console.log(d.val(), "data");
      // data.innerHTML = postData.val();
    //   var currentuser = auth.currentUser.uid;
    //   console.log(currentuser)
      // user = currentuser
      // for (var key in usersList) {
      //     // console.log(usersList[key])
      //     if (currentuser !== key) {
      //         usersList[key].uid = key
      //         usersArray.push(usersList[key])
      //     }

    // .catch((er)=>{
    //   console.log(er.message)
    // })
    

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
var obj= localStorage.getItem('userObject')
var userData = JSON.parse(obj) ;
var flag = false;
// if(obj === true ){
//   console.log('good');
  // home.style.display = 'inline';
// }
console.log(userData,"=============");
// var home = document.getElementById('targetHomeBtn').
