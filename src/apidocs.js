var signIn;
fetch("../../firebase-keys.json")
  .then(response => response.json())
  .then(json => {
  var firebaseConfig = json;

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var provider = new firebase.auth.GoogleAuthProvider();
  signIn = function() {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        document.getElementById("bear-icon").style.display = "none";
        document.getElementById("loading").style.display = "inline-block";
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var authResult = result;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Authorization', 'Bearer ' + authResult.credential.idToken);
        var raw = JSON.stringify({"uid":authResult.user.uid});
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://us-central1-api-team-292919.cloudfunctions.net/login", requestOptions)
          .then(response => response.text())
          .then(result => {
            if (result.includes("berkeley")) {
              emailWrongAlert();
            } else if (result.includes("Success")) {
              successAlert();
            } else {
              failureAlert();
            }
          })
          .catch((error) => {
            console.log('error', error)
          });
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
    }
  });
function failureAlert() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("bear-icon").style.display = "inline-block";
  document.getElementById("alert_placeholder").innerHTML = createAlert("danger", "Oops!", "Something went wrong. Please try again later.");
}
function successAlert() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("bear-icon").style.display = "inline-block";
  document.getElementById("alert_placeholder").innerHTML = createAlert("success", "Success!", "Tokens have been sent to your email address.");
}
function emailWrongAlert() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("bear-icon").style.display = "inline-block";
  document.getElementById("alert_placeholder").innerHTML = createAlert("danger", "Oops!", "Please make sure you are signing in using your berkeley.edu account.");
}

function createAlert(type, header, message) {
  return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${header}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      if(mutation.addedNodes[i].className === "dialog-ux") {
        document.getElementsByClassName("modal-ux-header")[0].children[0].innerHTML = `Authentication (Bearer Token)`;
        document.getElementsByClassName("auth-container")[0].children[0].children[0].children[0].innerHTML = '';
        document.getElementsByClassName("auth-container")[0].children[0].children[0].children[2].children[0].innerHTML = 'Access Token';
      } 
    }
  });
});
observer.observe(document, { attributes: false, childList: true, subtree: true });


