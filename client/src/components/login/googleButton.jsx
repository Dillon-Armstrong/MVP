
import React from 'react';

const responseGoogle = (response) => {
  console.log(response);
};

export default function GoogleSignInButton() {
  return (
    // <GoogleLogin
    //   clientId="263537932169-u3n5ltqmuk3iha3rhfqhptlabh4tqje1.apps.googleusercontent.com"
    //   buttonText="Sign in with Google"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={'single_host_origin'}
    // />
    <>
      <div id="g_id_onload"
        data-client_id="263537932169-u3n5ltqmuk3iha3rhfqhptlabh4tqje1.apps.googleusercontent.com"
        data-login_uri="http://localhost:3000"
        data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
      </div>
    </>
  )
};