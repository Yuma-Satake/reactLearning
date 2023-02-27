import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const MailSend = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  // provider.addScope("https://mail.google.com/");

  const Login = () => {
    try {
      const auth = getAuth();
      signInWithPopup(auth, provider).then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;
        const user = res.user;
        console.log(`tokenは${token}`);
        console.log(`userは${user}`);
      });
    } catch (e) {
      console.log(`エラー${e}`);
    }
  };

  return (
    <>
      <Stack direction='column' justifyContent='center'>
        <Button variant='contained' onClick={Login}>
          <Typography>ログイン</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default MailSend;
