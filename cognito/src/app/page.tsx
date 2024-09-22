"use client";
import type { AppProps } from "next/app";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_dgZ3qBBDv",
      userPoolClientId: "4be1q9gkqbrgin7gptd97hul",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
        given_name: {
          required: true,
        },
        family_name: {
          required: true,
        },
      },
    },
    //oauth: {
    //  domain: "https://id-pool-dainoji.auth.ap-northeast-1.amazoncognito.com",
    //  scopes: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
    //  redirectSignIn: "http://localhost:3000/hello",
    //  redirectSignOut: "http://localhost:3000/hello",
    //  responseType: "code",
    //},
    ssr: true,
  },
});
//Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
