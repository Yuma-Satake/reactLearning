var firebase = require('firebase');
var firebaseui = require('firebaseui');
import { Button } from "@mui/material";


const MailSend2 = () => {
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
    return <Button variant="contained" onClick={()=>{console.log("vall")}}>ログイン</Button>
}

export default MailSend2;