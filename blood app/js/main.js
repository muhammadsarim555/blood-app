

// Animations init
new WOW().init();
// *******************************************************************************************************************************
var provider = new firebase.auth.GoogleAuthProvider();

function signIn(){
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user)
        console.log('token', token);
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
      console.log(this);
    
    
        // console.log(targetBtn);

      })
    }
  //  console.log( bloodGroup.innerText  = targetBtn);
    // )
    

// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************
// *******************************************************************************************************************************

